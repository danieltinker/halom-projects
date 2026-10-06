(function () {
'use strict';
const WORKER_SRC = "// ---------- small maths ----------\nconst TAU = Math.PI * 2;\nconst clamp = (x, a, b) => Math.min(b, Math.max(a, x));\nconst lerp = (a, b, t) => a + (b - a) * t;\nconst smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };\nconst easeOutCubic = t => 1 - Math.pow(1 - t, 3);\nconst easeInOut = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);\n\nfunction rng(seed) {\n  let a = seed >>> 0;\n  return function () {\n    a |= 0; a = a + 0x6D2B79F5 | 0;\n    let t = Math.imul(a ^ a >>> 15, 1 | a);\n    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;\n    return ((t ^ t >>> 14) >>> 0) / 4294967296;\n  };\n}\n\n// hash + value noise (3D), optionally periodic\nfunction hash3(x, y, z) {\n  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 2147483647);\n  h = Math.imul(h ^ (h >>> 13), 1274126177);\n  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;\n}\nfunction vnoise(x, y, z, period) {\n  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);\n  const xf = x - xi, yf = y - yi, zf = z - zi;\n  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);\n  const P = period || 0;\n  const wrap = P ? (n => ((n % P) + P) % P) : (n => n);\n  const h = (a, b, c) => hash3(wrap(xi + a), wrap(yi + b), zi + c);\n  const x00 = lerp(h(0, 0, 0), h(1, 0, 0), u), x10 = lerp(h(0, 1, 0), h(1, 1, 0), u);\n  const x01 = lerp(h(0, 0, 1), h(1, 0, 1), u), x11 = lerp(h(0, 1, 1), h(1, 1, 1), u);\n  return lerp(lerp(x00, x10, v), lerp(x01, x11, v), w) * 2 - 1;\n}\nfunction fbm(x, y, z, oct) {\n  let a = 0.5, f = 1, s = 0;\n  for (let i = 0; i < (oct || 3); i++) { s += a * vnoise(x * f, y * f, z + i * 17.3); a *= 0.5; f *= 2.03; }\n  return s;\n}\n\n// ---------- springs ----------\n// semi-implicit damped spring; state {x, v}\nfunction springStep(s, target, k, d, dt) {\n  const a = -k * (s.x - target) - d * s.v;\n  s.v += a * dt; s.x += s.v * dt;\n}\n\n// ---------- geometry helpers ----------\n// Build an indexed grid. f(a, b, out) fills out.p = [x,y,z], out.uv = [u,v], out.uv1 = [u,v]\nfunction gridGeo(nu, nv, f, opts) {\n  opts = opts || {};\n  const closeU = !!opts.closeU;\n  const cols = nu, rows = nv;\n  const pos = new Float32Array(cols * rows * 3), uv = new Float32Array(cols * rows * 2), uv1 = new Float32Array(cols * rows * 2);\n  const out = { p: [0, 0, 0], uv: [0, 0], uv1: [0, 0] };\n  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {\n    const a = closeU ? i / cols : i / (cols - 1), b = j / (rows - 1);\n    out.uv1[0] = a; out.uv1[1] = b;\n    f(a, b, out, i, j);\n    const k = j * cols + i;\n    pos[k * 3] = out.p[0]; pos[k * 3 + 1] = out.p[1]; pos[k * 3 + 2] = out.p[2];\n    uv[k * 2] = out.uv[0]; uv[k * 2 + 1] = out.uv[1];\n    uv1[k * 2] = out.uv1[0]; uv1[k * 2 + 1] = out.uv1[1];\n  }\n  const idx = [];\n  const iu = closeU ? cols : cols - 1;\n  for (let j = 0; j < rows - 1; j++) for (let i = 0; i < iu; i++) {\n    const i2 = (i + 1) % cols;\n    const a = j * cols + i, b = j * cols + i2, c = (j + 1) * cols + i, d = (j + 1) * cols + i2;\n    if (opts.flip) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c);\n  }\n  const g = new THREE.BufferGeometry();\n  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));\n  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));\n  g.setAttribute('uv1', new THREE.BufferAttribute(uv1, 2));\n  g.setIndex(idx);\n  return g;\n}\n\nfunction mergeGeos(list) {\n  let nv = 0, ni = 0;\n  list.forEach(g => { nv += g.attributes.position.count; ni += g.index.count; });\n  const pos = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), uv1 = new Float32Array(nv * 2);\n  const idx = new Uint32Array(ni);\n  let vo = 0, io = 0;\n  list.forEach(g => {\n    pos.set(g.attributes.position.array, vo * 3);\n    if (g.attributes.uv) uv.set(g.attributes.uv.array, vo * 2);\n    if (g.attributes.uv1) uv1.set(g.attributes.uv1.array, vo * 2);\n    const gi = g.index.array;\n    for (let k = 0; k < gi.length; k++) idx[io + k] = gi[k] + vo;\n    vo += g.attributes.position.count; io += gi.length;\n  });\n  const g = new THREE.BufferGeometry();\n  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));\n  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));\n  g.setAttribute('uv1', new THREE.BufferAttribute(uv1, 2));\n  g.setIndex(new THREE.BufferAttribute(idx, 1));\n  return g;\n}\n\n// weld coincident vertices so normals smooth across panel seams\nfunction weld(g, eps) {\n  eps = eps || 2e-4;\n  const p = g.attributes.position.array, n = g.attributes.position.count;\n  const map = new Map(), remap = new Uint32Array(n);\n  const keep = [];\n  for (let i = 0; i < n; i++) {\n    const key = Math.round(p[i * 3] / eps) + '_' + Math.round(p[i * 3 + 1] / eps) + '_' + Math.round(p[i * 3 + 2] / eps);\n    let j = map.get(key);\n    if (j === undefined) { j = keep.length; keep.push(i); map.set(key, j); }\n    remap[i] = j;\n  }\n  const m = keep.length;\n  const pos = new Float32Array(m * 3), uv = new Float32Array(m * 2), uv1 = new Float32Array(m * 2);\n  const u0 = g.attributes.uv.array, u1 = g.attributes.uv1.array;\n  for (let j = 0; j < m; j++) {\n    const i = keep[j];\n    pos[j * 3] = p[i * 3]; pos[j * 3 + 1] = p[i * 3 + 1]; pos[j * 3 + 2] = p[i * 3 + 2];\n    uv[j * 2] = u0[i * 2]; uv[j * 2 + 1] = u0[i * 2 + 1];\n    uv1[j * 2] = u1[i * 2]; uv1[j * 2 + 1] = u1[i * 2 + 1];\n  }\n  const src = g.index.array, idx = [];\n  for (let k = 0; k < src.length; k += 3) {\n    const a = remap[src[k]], b = remap[src[k + 1]], c = remap[src[k + 2]];\n    if (a !== b && b !== c && a !== c) idx.push(a, b, c);\n  }\n  const o = new THREE.BufferGeometry();\n  o.setAttribute('position', new THREE.BufferAttribute(pos, 3));\n  o.setAttribute('uv', new THREE.BufferAttribute(uv, 2));\n  o.setAttribute('uv1', new THREE.BufferAttribute(uv1, 2));\n  o.setIndex(idx);\n  return o;\n}\n\n// Sweep an elliptical cross-section along a polyline. pts: array of [x,y,z]; closed loop optional.\n// sec(i, t) -> {a, b, up:[x,y,z]} : half-size along the up-ish axis and across it.\nfunction sweep(pts, closed, sec, radial, uvScale) {\n  const n = pts.length, R = radial || 10;\n  const V = THREE.Vector3;\n  const P = pts.map(p => new V(p[0], p[1], p[2]));\n  const g = gridGeo(R, closed ? n + 1 : n, (a, b, out, i, j) => {\n    const k = closed ? j % n : j;\n    const prev = P[closed ? (k - 1 + n) % n : Math.max(0, k - 1)], next = P[closed ? (k + 1) % n : Math.min(n - 1, k + 1)];\n    const T = new V().subVectors(next, prev).normalize();\n    const s = sec(k, n > 1 ? k / (n - 1) : 0);\n    const up = new V(s.up ? s.up[0] : 0, s.up ? s.up[1] : 1, s.up ? s.up[2] : 0);\n    const N1 = up.clone().addScaledVector(T, -up.dot(T)).normalize();\n    const N2 = new V().crossVectors(T, N1).normalize();\n    const ang = a * TAU;\n    const c = Math.cos(ang), sn = Math.sin(ang);\n    const e = s.pow || 1;\n    const cc = Math.sign(c) * Math.pow(Math.abs(c), e), ss = Math.sign(sn) * Math.pow(Math.abs(sn), e);\n    const q = P[k].clone().addScaledVector(N1, s.a * cc).addScaledVector(N2, s.b * ss);\n    out.p[0] = q.x; out.p[1] = q.y; out.p[2] = q.z;\n    out.uv[0] = a * (uvScale ? uvScale[0] : 1); out.uv[1] = j * (uvScale ? uvScale[1] : 0.01);\n  }, { closeU: true });\n  return g;\n}\n\nfunction hexToRgb(hex) {\n  const h = hex.replace('#', '');\n  const v = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);\n  return [(v >> 16 & 255) / 255, (v >> 8 & 255) / 255, (v & 255) / 255];\n}\nfunction luma(hex) { const c = hexToRgb(hex); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }\n\n// ---------- a small position-based cloth solver ----------\n// Used once per cut to let the drawn garment settle under its own weight, so folds are real folds.\nfunction Cloth(n) {\n  this.n = n;\n  this.p = new Float32Array(n * 3);\n  this.w = new Float32Array(n).fill(1);\n  this.ci = []; this.cj = []; this.cr = []; this.ck = [];\n  this.pa = []; this.pb = []; this.pg = []; this.px = [];\n  this.ta = []; this.tb = []; this.tl = [];\n  this.colliders = [];\n}\nCloth.prototype.link = function (i, j, k, ease) {\n  if (i === j) return;\n  const p = this.p;\n  const d = Math.hypot(p[i * 3] - p[j * 3], p[i * 3 + 1] - p[j * 3 + 1], p[i * 3 + 2] - p[j * 3 + 2]);\n  this.ci.push(i); this.cj.push(j); this.cr.push(d * (ease || 1)); this.ck.push(k);\n};\n// a tether stops the cloth stretching under its own weight: no particle may stray further from its anchor than the cloth between them\nCloth.prototype.tether = function (a, b, len) { this.ta.push(a); this.tb.push(b); this.tl.push(len); };\nCloth.prototype.dist = function (i, j) { const p = this.p; return Math.hypot(p[i * 3] - p[j * 3], p[i * 3 + 1] - p[j * 3 + 1], p[i * 3 + 2] - p[j * 3 + 2]); };\n// keep a ahead of b by at least g along one axis (0 x, 1 y, 2 z): stops two layers of cloth passing through each other\nCloth.prototype.gap = function (a, b, g, axis) { if (g < 0) { const t = a; a = b; b = t; g = -g; } this.pa.push(a); this.pb.push(b); this.pg.push(g); this.px.push(axis == null ? 2 : axis); };\nCloth.prototype.run = function (steps, iters, grav, damp) {\n  const n = this.n, p = this.p, w = this.w, dt = 1 / 60;\n  const q = new Float32Array(n * 3), v = new Float32Array(n * 3);\n  const ci = Uint32Array.from(this.ci), cj = Uint32Array.from(this.cj), cr = Float32Array.from(this.cr), ck = Float32Array.from(this.ck);\n  const pa = Uint32Array.from(this.pa), pb = Uint32Array.from(this.pb), pg = Float32Array.from(this.pg), px = Uint8Array.from(this.px);\n  const ta = Uint32Array.from(this.ta), tb = Uint32Array.from(this.tb), tl = Float32Array.from(this.tl), nt = ta.length;\n  const nc = ci.length, np = pa.length, cols = this.colliders;\n  for (let s = 0; s < steps; s++) {\n    for (let i = 0; i < n; i++) {\n      const k = i * 3;\n      q[k] = p[k]; q[k + 1] = p[k + 1]; q[k + 2] = p[k + 2];\n      if (w[i] === 0) continue;\n      v[k + 1] += grav * dt;\n      v[k] *= damp; v[k + 1] *= damp; v[k + 2] *= damp;\n      p[k] += v[k] * dt; p[k + 1] += v[k + 1] * dt; p[k + 2] += v[k + 2] * dt;\n    }\n    for (let it = 0; it < iters; it++) {\n      for (let c = 0; c < nc; c++) {\n        const i = ci[c] * 3, j = cj[c] * 3, wi = w[ci[c]], wj = w[cj[c]], ws = wi + wj;\n        if (ws === 0) continue;\n        const dx = p[i] - p[j], dy = p[i + 1] - p[j + 1], dz = p[i + 2] - p[j + 2];\n        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);\n        if (d < 1e-9) continue;\n        const f = (d - cr[c]) / d * ck[c] / ws;\n        p[i] -= dx * f * wi; p[i + 1] -= dy * f * wi; p[i + 2] -= dz * f * wi;\n        p[j] += dx * f * wj; p[j + 1] += dy * f * wj; p[j + 2] += dz * f * wj;\n      }\n      for (let c = 0; c < nt; c++) {\n        const i = ta[c] * 3, j = tb[c] * 3, wi = w[ta[c]], wj = w[tb[c]], ws = wi + wj;\n        if (ws === 0) continue;\n        const dx = p[i] - p[j], dy = p[i + 1] - p[j + 1], dz = p[i + 2] - p[j + 2];\n        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);\n        if (d <= tl[c]) continue;\n        const f = (d - tl[c]) / d / ws;\n        p[i] -= dx * f * wi; p[i + 1] -= dy * f * wi; p[i + 2] -= dz * f * wi;\n        p[j] += dx * f * wj; p[j + 1] += dy * f * wj; p[j + 2] += dz * f * wj;\n      }\n      for (let c = 0; c < np; c++) {\n        const a = pa[c] * 3 + px[c], b = pb[c] * 3 + px[c], sep = p[a] - p[b];\n        if (sep < pg[c]) {\n          const wa = w[pa[c]], wb = w[pb[c]], ws = wa + wb; if (ws === 0) continue;\n          const e = (pg[c] - sep) / ws;\n          p[a] += e * wa; p[b] -= e * wb;\n        }\n      }\n      for (let c = 0; c < cols.length; c++) cols[c](p, w, n);\n    }\n    const inv = 1 / dt;\n    for (let i = 0; i < n * 3; i++) v[i] = (p[i] - q[i]) * inv;\n  }\n};\n// take out wrinkles finer than the mesh can carry (Taubin smoothing over the sewn structure, no shrinkage)\nCloth.prototype.relax = function (passes) {\n  const n = this.n, p = this.p, w = this.w, nb = Array.from({ length: n }, () => []);\n  for (let c = 0; c < this.ci.length; c++) if (this.ck[c] === 1) { nb[this.ci[c]].push(this.cj[c]); nb[this.cj[c]].push(this.ci[c]); }\n  const d = new Float32Array(n * 3);\n  const pass = f => {\n    for (let i = 0; i < n; i++) {\n      const l = nb[i], m = l.length; if (!m || w[i] === 0) { d[i * 3] = d[i * 3 + 1] = d[i * 3 + 2] = 0; continue; }\n      let x = 0, y = 0, z = 0;\n      for (let k = 0; k < m; k++) { const j = l[k] * 3; x += p[j]; y += p[j + 1]; z += p[j + 2]; }\n      d[i * 3] = x / m - p[i * 3]; d[i * 3 + 1] = y / m - p[i * 3 + 1]; d[i * 3 + 2] = z / m - p[i * 3 + 2];\n    }\n    for (let i = 0; i < n * 3; i++) p[i] += d[i] * f;\n  };\n  for (let k = 0; k < passes; k++) { pass(0.5); pass(-0.52); }\n};\n// colliders: each acts on particles [from, to) ---------------------------------\nfunction capsuleCollider(ax, ay, az, bx, by, bz, r, from, to) {\n  const ex = bx - ax, ey = by - ay, ez = bz - az, el = ex * ex + ey * ey + ez * ez;\n  return (p, w, n) => {\n    const i1 = to == null ? n : to;\n    for (let i = from || 0; i < i1; i++) {\n      if (w[i] === 0) continue;\n      const k = i * 3, px = p[k] - ax, py = p[k + 1] - ay, pz = p[k + 2] - az;\n      let t = (px * ex + py * ey + pz * ez) / el; t = t < 0 ? 0 : t > 1 ? 1 : t;\n      const dx = px - ex * t, dy = py - ey * t, dz = pz - ez * t, d2 = dx * dx + dy * dy + dz * dz;\n      if (d2 < r * r && d2 > 1e-12) { const d = Math.sqrt(d2), s = (r - d) / d; p[k] += dx * s; p[k + 1] += dy * s; p[k + 2] += dz * s; }\n    }\n  };\n}\n// upright elliptical column between two heights: pushes cloth out sideways\nfunction columnCollider(cx, a, c, y0, y1, from, to) {\n  return (p, w, n) => {\n    const i1 = to == null ? n : to;\n    for (let i = from || 0; i < i1; i++) {\n      if (w[i] === 0) continue;\n      const k = i * 3, y = p[k + 1];\n      if (y < y0 || y > y1) continue;\n      const x = (p[k] - cx) / a, z = p[k + 2] / c, f = x * x + z * z;\n      if (f < 1 && f > 1e-9) { const s = 1 / Math.sqrt(f); p[k] = cx + (p[k] - cx) * s; p[k + 2] *= s; }\n    }\n  };\n}\n\n// ---------- the pure part of a garment body: its outline, its mesh layout and how it settles ----------\n// Nothing here touches the renderer, so the same source also runs inside a worker.\n// ---------- torso: front + back panels sewn at the sides and shoulders, then settled ----------\nfunction torsoShape(S, variant) {\n  const nz = (variant % 97) * 1.37 + 3;\n  const hemY = S.hsp.y - S.len, p = S.p || 2.6;\n  const halfW = v => {\n    const vA = S.armpitV;\n    let w = v < vA ? lerp(S.hemHalf, S.chestHalf, smooth(0, vA, v)) : lerp(S.chestHalf, S.shoulder.x, smooth(vA, 1, v));\n    if (S.cinch) w = lerp(S.cinch, w, smooth(0, 0.1, v));\n    return w;\n  };\n  const yTop = (side, xTop) => {\n    const ax = Math.abs(xTop);\n    if (ax >= S.hsp.x) return S.hsp.y + (S.shoulder.y - S.hsp.y) * (ax - S.hsp.x) / (S.shoulder.x - S.hsp.x);\n    const k = ax / S.hsp.x, drop = side > 0 ? S.neckFront : S.neckBack;\n    return S.hsp.y - drop * Math.pow(Math.cos(k * Math.PI / 2), S.neckPow || 0.7);\n  };\n  const yHemAt = s => hemY + (S.tail || 0) * Math.pow(Math.abs(s), 2.4);\n  function surf(side, s, v, D, out) {\n    const x = s * halfW(v), xTop = s * S.shoulder.x;\n    const yt = yTop(side, xTop), yh = yHemAt(s), y = lerp(yh, yt, v);\n    const yn = clamp((y - hemY) / S.len, 0, 1.1);\n    const P = Math.pow(Math.max(0, 1 - Math.pow(Math.abs(s), p)), 1 / p);\n    const dep = lerp(lerp(D.depthHem, D.depthChest, smooth(0, 0.62, yn)), D.depthTop, smooth(0.74, 0.985, yn));\n    const tBody = P * dep, ax = Math.abs(xTop);\n    let tEdge = 0, rr = S.rollR;\n    if (ax < S.hsp.x) { const k = ax / S.hsp.x; tEdge = (side > 0 ? S.neckDepthF : S.neckDepthB) * Math.sqrt(1 - k * k); rr = lerp(S.rollR, 0.075, 1 - k * k); }\n    const dTop = yt - y;\n    let roll = 1;\n    if (dTop < rr) { const q = 1 - dTop / rr; roll = Math.sqrt(Math.max(0, 1 - q * q)); }\n    let t = tEdge + (tBody - tEdge) * roll;\n    const m = Math.pow(P, 0.55) * smooth(0, 0.1, dTop);\n    const fold = D.foldAmp * Math.pow(1 - yn, 1.2) * Math.sin(TAU * (x / S.foldLen) + nz + side * 1.3 + 1.7 * vnoise(x * 3, y * 2, nz));\n    const bumps = D.bumpAmp * (0.35 + 0.65 * (1 - yn)) * fbm(x * 7 + side * 9, y * 5, nz, 3);\n    t += (fold + bumps) * m;\n    t = Math.max(t, 0.0035 * P * smooth(0, 0.02, dTop));\n    out[0] = x; out[1] = y; out[2] = side > 0 ? t : -t * (S.backFlat || 0.9);\n    return out;\n  }\n  function toParam(side, x, y) {\n    let v = clamp((y - hemY) / S.len, 0, 1), s = 0;\n    for (let i = 0; i < 6; i++) {\n      s = clamp(x / halfW(v), -1, 1);\n      const yt = yTop(side, s * S.shoulder.x), yh = yHemAt(s);\n      v = clamp((y - yh) / (yt - yh), 0, 1);\n    }\n    return [s, v];\n  }\n  return { surf, toParam, hemY, halfW };\n}\n\n// The body of a tee, hoodie or shirt is one piece of cloth: two panels sewn at the sides and shoulders, with a\n// sleeve growing out of each armhole. It is drawn in two poses (hanging on the rail, presented to the viewer),\n// each pose is left to settle under its own weight, and the mesh morphs between them.\n// S.sleeve: { armhole, NA, NC, cuffLen, cuffScale, wr, blend, rack:{theta,bend,len,rIn,rZ}, front:{...}, easeA, easeL, bend, column:{half,depth} }\nfunction bodyLayout(S, variant) {\n  const NS = S.ns || 40, NVa = S.nva || 30, NVb = 14, NV = NVa + NVb, C = NS + 1, R = NV + 1, nF = C * R;\n  S.hsp.x = S.shoulder.x * (2 * S.neckCols / NS);          // put the neck points on grid columns\n  const A = torsoShape(S, variant), SL = S.sleeve;\n  const iN0 = NS / 2 - S.neckCols, iN1 = NS / 2 + S.neckCols;\n  const shoulderCol = i => i <= iN0 || i >= iN1;\n  // side seams are sewn below the armpit; above it they are open and the sleeve is sewn in\n  const id = (side, i, j) => (side > 0 || ((i === 0 || i === NS) && j <= NVa) || (j === NV && shoulderCol(i))) ? j * C + i : nF + j * C + i;\n  const vArm = 1 - SL.armhole / (S.shoulder.y - A.hemY - (S.tail || 0));\n  const vmap = j => j <= NVa ? vArm * j / NVa : vArm + (1 - vArm) * (j - NVa) / NVb;\n  const vinv = v => v <= vArm ? v / vArm * NVa : NVa + (v - vArm) / (1 - vArm) * NVb;\n  const NP = 2 * NVb, NA = SL.NA, NC = SL.NC || 0, SR = NA + NC;      // sleeve rings beyond the armhole\n  const sleeveBase = k => nF * 2 + k * NP * SR, n = nF * 2 + 2 * NP * SR;\n  const ringId = (k, i, j) => {\n    i = ((i % NP) + NP) % NP;\n    if (j === 0) { const e = k === 0 ? NS : 0; return i <= NVb ? id(1, e, NV - i) : id(-1, e, NV - (NP - i)); }\n    return sleeveBase(k) + (j - 1) * NP + i;\n  };\n  const rowA = j => j <= NA ? j / NA : 1 + (SL.cuffLen || 0) * (j - NA) / NC;\n  const rowS = j => j <= NA ? 1 : SL.cuffScale;\n  return { NS, NVa, NVb, NV, C, R, nF, A, SL, iN0, iN1, shoulderCol, id, vArm, vmap, vinv, NP, NA, NC, SR, sleeveBase, n, ringId, rowA, rowS };\n}\n\nfunction settleBody(S, poses, variant) {\n  const { NS, NVa, NVb, NV, C, R, nF, A, SL, iN0, iN1, shoulderCol, id, vArm, vmap, vinv, NP, NA, NC, SR, sleeveBase, n, ringId, rowA, rowS } = bodyLayout(S, variant);\n  const q = [0, 0, 0], uv = new Float32Array(n * 2);\n  const hangerY = x => S.hsp.y - 0.012 + (S.shoulder.y - S.hsp.y) * (Math.abs(x) - S.hsp.x) / (S.shoulder.x - S.hsp.x);\n\n  const sims = poses.map((D, pi) => {\n    const cl = new Cloth(n), P = cl.p;\n    for (let side = 1; side >= -1; side -= 2) for (let j = 0; j < R; j++) for (let i = 0; i < C; i++) {\n      A.surf(side, i / NS * 2 - 1, vmap(j), D, q);\n      const raw = (side > 0 ? 0 : nF) + j * C + i, k = id(side, i, j);\n      P[raw * 3] = q[0]; P[raw * 3 + 1] = q[1]; P[raw * 3 + 2] = q[2];\n      if (raw !== k) cl.w[raw] = 0;\n      if (pi === 0) { uv[raw * 2] = q[0]; uv[raw * 2 + 1] = q[1]; }\n    }\n    for (let i = 0; i < C; i++) {\n      if (shoulderCol(i)) cl.w[id(1, i, NV)] = 0;\n      else { cl.w[id(-1, i, NV)] = 0; if (D.pinNeck) cl.w[id(1, i, NV)] = 0; }\n    }\n    const ex = 1 + D.easeX, ey = 1 + (D.easeY || 0), ed = 1 + (D.easeX + (D.easeY || 0)) / 2;\n    for (let side = 1; side >= -1; side -= 2) for (let j = 0; j < R; j++) for (let i = 0; i < C; i++) {\n      const a = id(side, i, j);\n      if (i < NS) cl.link(a, id(side, i + 1, j), 1, ex);\n      if (j < NV) cl.link(a, id(side, i, j + 1), 1, ey);\n      if (i < NS && j < NV) { cl.link(a, id(side, i + 1, j + 1), 0.6, ed); cl.link(id(side, i + 1, j), id(side, i, j + 1), 0.6, ed); }\n      if (i < NS - 1) cl.link(a, id(side, i + 2, j), D.bend, ex);\n      if (j < NV - 1) cl.link(a, id(side, i, j + 2), D.bend, ey);\n    }\n    for (let j = 0; j < R; j++) for (let i = 1; i < NS; i++) {\n      const a = id(1, i, j), b = id(-1, i, j);\n      if (a !== b) cl.gap(a, b, D.gapK * (P[a * 3 + 2] - P[b * 3 + 2]));\n    }\n    for (let side = 1; side >= -1; side -= 2) for (let i = 0; i < C; i++) {\n      let run = 0; const top = id(side, i, NV);\n      for (let j = NV - 1; j >= 0; j--) { run += cl.dist(id(side, i, j), id(side, i, j + 1)) * ey; cl.tether(id(side, i, j), top, run * 1.004); }\n    }\n    [1, -1].forEach(sx => cl.colliders.push(capsuleCollider(sx * S.hsp.x * 0.6, hangerY(S.hsp.x), 0, sx * (S.shoulder.x - 0.03), hangerY(S.shoulder.x - 0.03), 0, 0.011, 0, nF * 2)));\n\n    // sleeves\n    const pose = pi === 0 ? SL.rack : SL.front;\n    [1, -1].forEach((sign, k) => {\n      const nz = (variant % 89) * 2.11 + sign * 5;\n      const e = k === 0 ? NS : 0, tp = id(1, e, NV) * 3, bt = id(1, e, NVa) * 3;\n      const M = [(P[tp] + P[bt]) / 2, (P[tp + 1] + P[bt + 1]) / 2], half = Math.hypot(P[tp] - P[bt], P[tp + 1] - P[bt + 1]) / 2;\n      for (let j = 1; j <= SR; j++) for (let i = 0; i < NP; i++) {\n        const ph = i / NP * TAU, c = Math.cos(ph), sn = Math.sin(ph), kk = ringId(k, i, j);\n        const a = rowA(j), ac = Math.min(a, 1), rs = rowS(j);\n        const w = smooth(0, SL.blend, a), th = pose.theta + pose.bend * a, thm = pose.theta + pose.bend * a * 0.5;\n        const cx = Math.abs(M[0]) + pose.len * a * Math.cos(thm), cy = M[1] - pose.len * a * Math.sin(thm);\n        const al = th * w, r1 = lerp(half, lerp(pose.rIn[0], pose.rIn[1], ac) * rs, w);\n        const rz = lerp(0, lerp(pose.rZ[0], pose.rZ[1], ac) * rs, Math.pow(clamp(a / (SL.blend * 0.8), 0, 1), 0.6));\n        const wob = 1 + SL.wr * fbm(c * 1.3 + a * 4.2, sn * 1.3 + a * 1.1, nz, 3);\n        P[kk * 3] = sign * (cx + Math.sin(al) * r1 * c * wob); P[kk * 3 + 1] = cy + Math.cos(al) * r1 * c * wob; P[kk * 3 + 2] = rz * sn * wob;\n        if (pi === 0) { uv[kk * 2] = i / NP * 0.5; uv[kk * 2 + 1] = a * pose.len; }\n      }\n      const ea = 1 + SL.easeA, el = 1 + (pi === 0 ? SL.easeL : SL.easeL * 0.5);\n      for (let j = 0; j <= SR; j++) for (let i = 0; i < NP; i++) {\n        const a = ringId(k, i, j);\n        if (j > 0) { cl.link(a, ringId(k, i + 1, j), 1, j > NA ? 1 : ea); cl.link(a, ringId(k, i + 2, j), SL.bend, j > NA ? 1 : ea); }\n        if (j < SR) { cl.link(a, ringId(k, i, j + 1), 1, el); cl.link(a, ringId(k, i + 1, j + 1), 0.6, el); cl.link(ringId(k, i + 1, j), ringId(k, i, j + 1), 0.6, el); }\n        if (j < SR - 1) cl.link(a, ringId(k, i, j + 2), SL.bend, el);\n        if (j > 0 && i > 0 && i < NP / 2) { const b = ringId(k, NP - i, j); cl.gap(a, b, 0.7 * (P[a * 3 + 2] - P[b * 3 + 2])); }\n        // on the rail the sleeve hangs flat against the body: keep its outer layer outside its inner one\n        if (pi === 0 && j > 0 && (i < NP / 4 || i > NP * 3 / 4)) { const b = ringId(k, NP / 2 - i, j); cl.gap(a, b, 0.75 * (P[a * 3] - P[b * 3]), 0); }\n      }\n      for (let i = 0; i < NP; i++) {\n        let run = 0;\n        for (let j = 1; j <= SR; j++) { run += cl.dist(ringId(k, i, j), ringId(k, i, j - 1)) * el; cl.tether(ringId(k, i, j), ringId(k, i, 0), run * 1.004); }\n      }\n      const f0 = sleeveBase(k), f1 = f0 + NP * SR;\n      if (pi === 0) cl.colliders.push(columnCollider(0, SL.column.half, SL.column.depth, A.hemY - 0.1, S.shoulder.y - 0.03, f0 + NP, f1));\n      else {\n        const th = pose.theta + pose.bend * 0.5, d = [Math.cos(th), -Math.sin(th)], jx = Math.abs(M[0]) - 0.03, jy = M[1] + half * 0.35;\n        cl.colliders.push(capsuleCollider(sign * jx, jy, 0, sign * (jx + d[0] * pose.len * 1.3), jy + d[1] * pose.len * 1.3, 0, pose.rZ[1] * 0.85, f0, f1));\n      }\n    });\n    cl.run(D.steps, D.iters, D.grav, 0.9);\n    cl.relax(D.relax == null ? 3 : D.relax);\n    return P;\n  });\n  return { sims, uv };\n}\n\nself.onmessage = function (e) { var r = settleBody(e.data.S, e.data.poses, e.data.variant); self.postMessage(r, r.sims.map(function (a) { return a.buffer; }).concat([r.uv.buffer])); };\n";
// ---- 00-util.js ----
// ---------- small maths ----------
const TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
const easeInOut = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// hash + value noise (3D), optionally periodic
function hash3(x, y, z) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 2147483647);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function vnoise(x, y, z, period) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const P = period || 0;
  const wrap = P ? (n => ((n % P) + P) % P) : (n => n);
  const h = (a, b, c) => hash3(wrap(xi + a), wrap(yi + b), zi + c);
  const x00 = lerp(h(0, 0, 0), h(1, 0, 0), u), x10 = lerp(h(0, 1, 0), h(1, 1, 0), u);
  const x01 = lerp(h(0, 0, 1), h(1, 0, 1), u), x11 = lerp(h(0, 1, 1), h(1, 1, 1), u);
  return lerp(lerp(x00, x10, v), lerp(x01, x11, v), w) * 2 - 1;
}
function fbm(x, y, z, oct) {
  let a = 0.5, f = 1, s = 0;
  for (let i = 0; i < (oct || 3); i++) { s += a * vnoise(x * f, y * f, z + i * 17.3); a *= 0.5; f *= 2.03; }
  return s;
}

// ---------- springs ----------
// semi-implicit damped spring; state {x, v}
function springStep(s, target, k, d, dt) {
  const a = -k * (s.x - target) - d * s.v;
  s.v += a * dt; s.x += s.v * dt;
}

// ---------- geometry helpers ----------
// Build an indexed grid. f(a, b, out) fills out.p = [x,y,z], out.uv = [u,v], out.uv1 = [u,v]
function gridGeo(nu, nv, f, opts) {
  opts = opts || {};
  const closeU = !!opts.closeU;
  const cols = nu, rows = nv;
  const pos = new Float32Array(cols * rows * 3), uv = new Float32Array(cols * rows * 2), uv1 = new Float32Array(cols * rows * 2);
  const out = { p: [0, 0, 0], uv: [0, 0], uv1: [0, 0] };
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const a = closeU ? i / cols : i / (cols - 1), b = j / (rows - 1);
    out.uv1[0] = a; out.uv1[1] = b;
    f(a, b, out, i, j);
    const k = j * cols + i;
    pos[k * 3] = out.p[0]; pos[k * 3 + 1] = out.p[1]; pos[k * 3 + 2] = out.p[2];
    uv[k * 2] = out.uv[0]; uv[k * 2 + 1] = out.uv[1];
    uv1[k * 2] = out.uv1[0]; uv1[k * 2 + 1] = out.uv1[1];
  }
  const idx = [];
  const iu = closeU ? cols : cols - 1;
  for (let j = 0; j < rows - 1; j++) for (let i = 0; i < iu; i++) {
    const i2 = (i + 1) % cols;
    const a = j * cols + i, b = j * cols + i2, c = (j + 1) * cols + i, d = (j + 1) * cols + i2;
    if (opts.flip) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setAttribute('uv1', new THREE.BufferAttribute(uv1, 2));
  g.setIndex(idx);
  return g;
}

function mergeGeos(list) {
  let nv = 0, ni = 0;
  list.forEach(g => { nv += g.attributes.position.count; ni += g.index.count; });
  const pos = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), uv1 = new Float32Array(nv * 2);
  const idx = new Uint32Array(ni);
  let vo = 0, io = 0;
  list.forEach(g => {
    pos.set(g.attributes.position.array, vo * 3);
    if (g.attributes.uv) uv.set(g.attributes.uv.array, vo * 2);
    if (g.attributes.uv1) uv1.set(g.attributes.uv1.array, vo * 2);
    const gi = g.index.array;
    for (let k = 0; k < gi.length; k++) idx[io + k] = gi[k] + vo;
    vo += g.attributes.position.count; io += gi.length;
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setAttribute('uv1', new THREE.BufferAttribute(uv1, 2));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  return g;
}

// weld coincident vertices so normals smooth across panel seams
function weld(g, eps) {
  eps = eps || 2e-4;
  const p = g.attributes.position.array, n = g.attributes.position.count;
  const map = new Map(), remap = new Uint32Array(n);
  const keep = [];
  for (let i = 0; i < n; i++) {
    const key = Math.round(p[i * 3] / eps) + '_' + Math.round(p[i * 3 + 1] / eps) + '_' + Math.round(p[i * 3 + 2] / eps);
    let j = map.get(key);
    if (j === undefined) { j = keep.length; keep.push(i); map.set(key, j); }
    remap[i] = j;
  }
  const m = keep.length;
  const pos = new Float32Array(m * 3), uv = new Float32Array(m * 2), uv1 = new Float32Array(m * 2);
  const u0 = g.attributes.uv.array, u1 = g.attributes.uv1.array;
  for (let j = 0; j < m; j++) {
    const i = keep[j];
    pos[j * 3] = p[i * 3]; pos[j * 3 + 1] = p[i * 3 + 1]; pos[j * 3 + 2] = p[i * 3 + 2];
    uv[j * 2] = u0[i * 2]; uv[j * 2 + 1] = u0[i * 2 + 1];
    uv1[j * 2] = u1[i * 2]; uv1[j * 2 + 1] = u1[i * 2 + 1];
  }
  const src = g.index.array, idx = [];
  for (let k = 0; k < src.length; k += 3) {
    const a = remap[src[k]], b = remap[src[k + 1]], c = remap[src[k + 2]];
    if (a !== b && b !== c && a !== c) idx.push(a, b, c);
  }
  const o = new THREE.BufferGeometry();
  o.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  o.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  o.setAttribute('uv1', new THREE.BufferAttribute(uv1, 2));
  o.setIndex(idx);
  return o;
}

// Sweep an elliptical cross-section along a polyline. pts: array of [x,y,z]; closed loop optional.
// sec(i, t) -> {a, b, up:[x,y,z]} : half-size along the up-ish axis and across it.
function sweep(pts, closed, sec, radial, uvScale) {
  const n = pts.length, R = radial || 10;
  const V = THREE.Vector3;
  const P = pts.map(p => new V(p[0], p[1], p[2]));
  const g = gridGeo(R, closed ? n + 1 : n, (a, b, out, i, j) => {
    const k = closed ? j % n : j;
    const prev = P[closed ? (k - 1 + n) % n : Math.max(0, k - 1)], next = P[closed ? (k + 1) % n : Math.min(n - 1, k + 1)];
    const T = new V().subVectors(next, prev).normalize();
    const s = sec(k, n > 1 ? k / (n - 1) : 0);
    const up = new V(s.up ? s.up[0] : 0, s.up ? s.up[1] : 1, s.up ? s.up[2] : 0);
    const N1 = up.clone().addScaledVector(T, -up.dot(T)).normalize();
    const N2 = new V().crossVectors(T, N1).normalize();
    const ang = a * TAU;
    const c = Math.cos(ang), sn = Math.sin(ang);
    const e = s.pow || 1;
    const cc = Math.sign(c) * Math.pow(Math.abs(c), e), ss = Math.sign(sn) * Math.pow(Math.abs(sn), e);
    const q = P[k].clone().addScaledVector(N1, s.a * cc).addScaledVector(N2, s.b * ss);
    out.p[0] = q.x; out.p[1] = q.y; out.p[2] = q.z;
    out.uv[0] = a * (uvScale ? uvScale[0] : 1); out.uv[1] = j * (uvScale ? uvScale[1] : 0.01);
  }, { closeU: true });
  return g;
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const v = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return [(v >> 16 & 255) / 255, (v >> 8 & 255) / 255, (v & 255) / 255];
}
function luma(hex) { const c = hexToRgb(hex); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }

// ---- 10-textures.js ----
// ---------- procedural fabric normal maps + studio environment ----------
function normalTexFromHeight(N, hfn, strength, repeatM) {
  const h = new Float32Array(N * N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) h[y * N + x] = hfn(x / N, y / N);
  const cv = document.createElement('canvas'); cv.width = cv.height = N;
  const ctx = cv.getContext('2d'), img = ctx.createImageData(N, N), d = img.data;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const xm = h[y * N + (x + N - 1) % N], xp = h[y * N + (x + 1) % N];
    const ym = h[((y + N - 1) % N) * N + x], yp = h[((y + 1) % N) * N + x];
    let nx = (xm - xp) * strength, ny = (ym - yp) * strength, nz = 1;
    const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const k = (y * N + x) * 4;
    d[k] = (nx * .5 + .5) * 255; d[k + 1] = (ny * .5 + .5) * 255; d[k + 2] = (nz * .5 + .5) * 255; d[k + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1 / repeatM, 1 / repeatM);   // uv is in metres
  t.anisotropy = 8;
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

const FabricNormals = {};
function initFabricNormals() {
  const N = 256;
  // Body fabrics get a fine, even grain. Directional knit lines beat against the screen's pixels at rail distance
  // and read as pinstripes, so the grain is kept isotropic and the ribs are reserved for trims.
  FabricNormals.jersey = normalTexFromHeight(N, (u, v) => .6 * vnoise(u * 56, v * 56, 1, 56) + .4 * vnoise(u * 112, v * 112, 2, 112), 1.1, 0.07);
  FabricNormals.fleece = normalTexFromHeight(N, (u, v) => .65 * vnoise(u * 22, v * 22, 2, 22) + .35 * vnoise(u * 60, v * 60, 3, 60), 1.5, 0.09);
  FabricNormals.oxford = normalTexFromHeight(N, (u, v) => {
    const w = 30, cu = Math.floor(u * w), cv2 = Math.floor(v * w), fu = u * w - cu, fv = v * w - cv2;
    return ((cu + cv2) % 2 ? Math.sin(Math.PI * fu) : Math.sin(Math.PI * fv)) * .5 + .3 * vnoise(u * 64, v * 64, 4, 64);
  }, 0.9, 0.05);
  // rib: collar, cuffs, hem bands, beanies
  FabricNormals.rib = normalTexFromHeight(N, (u, v) => {
    const w = 14;
    return Math.pow(Math.abs(Math.sin(Math.PI * u * w)), .6) + .12 * vnoise(u * 48, v * 48, 5, 48);
  }, 5.0, 0.05);
  // chunky rib for beanies: wide enough to read from across the room
  FabricNormals.ribChunky = normalTexFromHeight(N, (u, v) => {
    const w = 7;
    return Math.pow(Math.abs(Math.sin(Math.PI * u * w)), 0.7) + 0.1 * vnoise(u * 32, v * 32, 8, 32);
  }, 3.2, 0.05);
  // brushed wool twill for scarves
  FabricNormals.wool = normalTexFromHeight(N, (u, v) => {
    const w = 10;
    return .5 * Math.sin(TAU * (u + v) * w) + .6 * vnoise(u * 14, v * 14, 6, 14) + .25 * vnoise(u * 40, v * 40, 7, 40);
  }, 1.5, 0.08);
}

// A soft studio: big overhead softbox, side fill, dark floor. Used for chrome reflections and gentle IBL.
function makeStudioEnv(renderer) {
  const W = 512, H = 256;
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const c = cv.getContext('2d');
  const g = c.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#ffffff'); g.addColorStop(.32, '#e9e9e6'); g.addColorStop(.5, '#b9bab6');
  g.addColorStop(.62, '#6d6e6c'); g.addColorStop(1, '#3c3d3c');
  c.fillStyle = g; c.fillRect(0, 0, W, H);
  // softboxes
  const box = (x, y, w, h, col) => {
    const r = c.createRadialGradient(x, y, 0, x, y, Math.max(w, h));
    r.addColorStop(0, col); r.addColorStop(1, 'rgba(255,255,255,0)');
    c.save(); c.translate(x, y); c.scale(w / Math.max(w, h), h / Math.max(w, h)); c.translate(-x, -y);
    c.fillStyle = r; c.fillRect(x - 2 * Math.max(w, h), y - 2 * Math.max(w, h), 4 * Math.max(w, h), 4 * Math.max(w, h)); c.restore();
  };
  box(W * .25, H * .2, 120, 46, 'rgba(255,255,255,1)');
  box(W * .72, H * .3, 70, 36, 'rgba(255,255,255,.9)');
  // dark flags to give the rail its black streaks
  c.fillStyle = 'rgba(12,12,14,.92)';
  c.fillRect(W * .40, H * .40, W * .22, H * .07);
  c.fillRect(W * .86, H * .43, W * .1, H * .05);
  c.fillRect(0, H * .44, W * .08, H * .04);
  const tex = new THREE.CanvasTexture(cv);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  const pm = new THREE.PMREMGenerator(renderer);
  const env = pm.fromEquirectangular(tex).texture;
  tex.dispose(); pm.dispose();
  return env;
}

// ---- 15-cloth.js ----
// ---------- a small position-based cloth solver ----------
// Used once per cut to let the drawn garment settle under its own weight, so folds are real folds.
function Cloth(n) {
  this.n = n;
  this.p = new Float32Array(n * 3);
  this.w = new Float32Array(n).fill(1);
  this.ci = []; this.cj = []; this.cr = []; this.ck = [];
  this.pa = []; this.pb = []; this.pg = []; this.px = [];
  this.ta = []; this.tb = []; this.tl = [];
  this.colliders = [];
}
Cloth.prototype.link = function (i, j, k, ease) {
  if (i === j) return;
  const p = this.p;
  const d = Math.hypot(p[i * 3] - p[j * 3], p[i * 3 + 1] - p[j * 3 + 1], p[i * 3 + 2] - p[j * 3 + 2]);
  this.ci.push(i); this.cj.push(j); this.cr.push(d * (ease || 1)); this.ck.push(k);
};
// a tether stops the cloth stretching under its own weight: no particle may stray further from its anchor than the cloth between them
Cloth.prototype.tether = function (a, b, len) { this.ta.push(a); this.tb.push(b); this.tl.push(len); };
Cloth.prototype.dist = function (i, j) { const p = this.p; return Math.hypot(p[i * 3] - p[j * 3], p[i * 3 + 1] - p[j * 3 + 1], p[i * 3 + 2] - p[j * 3 + 2]); };
// keep a ahead of b by at least g along one axis (0 x, 1 y, 2 z): stops two layers of cloth passing through each other
Cloth.prototype.gap = function (a, b, g, axis) { if (g < 0) { const t = a; a = b; b = t; g = -g; } this.pa.push(a); this.pb.push(b); this.pg.push(g); this.px.push(axis == null ? 2 : axis); };
Cloth.prototype.run = function (steps, iters, grav, damp) {
  const n = this.n, p = this.p, w = this.w, dt = 1 / 60;
  const q = new Float32Array(n * 3), v = new Float32Array(n * 3);
  const ci = Uint32Array.from(this.ci), cj = Uint32Array.from(this.cj), cr = Float32Array.from(this.cr), ck = Float32Array.from(this.ck);
  const pa = Uint32Array.from(this.pa), pb = Uint32Array.from(this.pb), pg = Float32Array.from(this.pg), px = Uint8Array.from(this.px);
  const ta = Uint32Array.from(this.ta), tb = Uint32Array.from(this.tb), tl = Float32Array.from(this.tl), nt = ta.length;
  const nc = ci.length, np = pa.length, cols = this.colliders;
  for (let s = 0; s < steps; s++) {
    for (let i = 0; i < n; i++) {
      const k = i * 3;
      q[k] = p[k]; q[k + 1] = p[k + 1]; q[k + 2] = p[k + 2];
      if (w[i] === 0) continue;
      v[k + 1] += grav * dt;
      v[k] *= damp; v[k + 1] *= damp; v[k + 2] *= damp;
      p[k] += v[k] * dt; p[k + 1] += v[k + 1] * dt; p[k + 2] += v[k + 2] * dt;
    }
    for (let it = 0; it < iters; it++) {
      for (let c = 0; c < nc; c++) {
        const i = ci[c] * 3, j = cj[c] * 3, wi = w[ci[c]], wj = w[cj[c]], ws = wi + wj;
        if (ws === 0) continue;
        const dx = p[i] - p[j], dy = p[i + 1] - p[j + 1], dz = p[i + 2] - p[j + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < 1e-9) continue;
        const f = (d - cr[c]) / d * ck[c] / ws;
        p[i] -= dx * f * wi; p[i + 1] -= dy * f * wi; p[i + 2] -= dz * f * wi;
        p[j] += dx * f * wj; p[j + 1] += dy * f * wj; p[j + 2] += dz * f * wj;
      }
      for (let c = 0; c < nt; c++) {
        const i = ta[c] * 3, j = tb[c] * 3, wi = w[ta[c]], wj = w[tb[c]], ws = wi + wj;
        if (ws === 0) continue;
        const dx = p[i] - p[j], dy = p[i + 1] - p[j + 1], dz = p[i + 2] - p[j + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d <= tl[c]) continue;
        const f = (d - tl[c]) / d / ws;
        p[i] -= dx * f * wi; p[i + 1] -= dy * f * wi; p[i + 2] -= dz * f * wi;
        p[j] += dx * f * wj; p[j + 1] += dy * f * wj; p[j + 2] += dz * f * wj;
      }
      for (let c = 0; c < np; c++) {
        const a = pa[c] * 3 + px[c], b = pb[c] * 3 + px[c], sep = p[a] - p[b];
        if (sep < pg[c]) {
          const wa = w[pa[c]], wb = w[pb[c]], ws = wa + wb; if (ws === 0) continue;
          const e = (pg[c] - sep) / ws;
          p[a] += e * wa; p[b] -= e * wb;
        }
      }
      for (let c = 0; c < cols.length; c++) cols[c](p, w, n);
    }
    const inv = 1 / dt;
    for (let i = 0; i < n * 3; i++) v[i] = (p[i] - q[i]) * inv;
  }
};
// take out wrinkles finer than the mesh can carry (Taubin smoothing over the sewn structure, no shrinkage)
Cloth.prototype.relax = function (passes) {
  const n = this.n, p = this.p, w = this.w, nb = Array.from({ length: n }, () => []);
  for (let c = 0; c < this.ci.length; c++) if (this.ck[c] === 1) { nb[this.ci[c]].push(this.cj[c]); nb[this.cj[c]].push(this.ci[c]); }
  const d = new Float32Array(n * 3);
  const pass = f => {
    for (let i = 0; i < n; i++) {
      const l = nb[i], m = l.length; if (!m || w[i] === 0) { d[i * 3] = d[i * 3 + 1] = d[i * 3 + 2] = 0; continue; }
      let x = 0, y = 0, z = 0;
      for (let k = 0; k < m; k++) { const j = l[k] * 3; x += p[j]; y += p[j + 1]; z += p[j + 2]; }
      d[i * 3] = x / m - p[i * 3]; d[i * 3 + 1] = y / m - p[i * 3 + 1]; d[i * 3 + 2] = z / m - p[i * 3 + 2];
    }
    for (let i = 0; i < n * 3; i++) p[i] += d[i] * f;
  };
  for (let k = 0; k < passes; k++) { pass(0.5); pass(-0.52); }
};
// colliders: each acts on particles [from, to) ---------------------------------
function capsuleCollider(ax, ay, az, bx, by, bz, r, from, to) {
  const ex = bx - ax, ey = by - ay, ez = bz - az, el = ex * ex + ey * ey + ez * ez;
  return (p, w, n) => {
    const i1 = to == null ? n : to;
    for (let i = from || 0; i < i1; i++) {
      if (w[i] === 0) continue;
      const k = i * 3, px = p[k] - ax, py = p[k + 1] - ay, pz = p[k + 2] - az;
      let t = (px * ex + py * ey + pz * ez) / el; t = t < 0 ? 0 : t > 1 ? 1 : t;
      const dx = px - ex * t, dy = py - ey * t, dz = pz - ez * t, d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < r * r && d2 > 1e-12) { const d = Math.sqrt(d2), s = (r - d) / d; p[k] += dx * s; p[k + 1] += dy * s; p[k + 2] += dz * s; }
    }
  };
}
// upright elliptical column between two heights: pushes cloth out sideways
function columnCollider(cx, a, c, y0, y1, from, to) {
  return (p, w, n) => {
    const i1 = to == null ? n : to;
    for (let i = from || 0; i < i1; i++) {
      if (w[i] === 0) continue;
      const k = i * 3, y = p[k + 1];
      if (y < y0 || y > y1) continue;
      const x = (p[k] - cx) / a, z = p[k + 2] / c, f = x * x + z * z;
      if (f < 1 && f > 1e-9) { const s = 1 / Math.sqrt(f); p[k] = cx + (p[k] - cx) * s; p[k + 2] *= s; }
    }
  };
}

// ---- 18-sim.js ----
// ---------- the pure part of a garment body: its outline, its mesh layout and how it settles ----------
// Nothing here touches the renderer, so the same source also runs inside a worker.
// ---------- torso: front + back panels sewn at the sides and shoulders, then settled ----------
function torsoShape(S, variant) {
  const nz = (variant % 97) * 1.37 + 3;
  const hemY = S.hsp.y - S.len, p = S.p || 2.6;
  const halfW = v => {
    const vA = S.armpitV;
    let w = v < vA ? lerp(S.hemHalf, S.chestHalf, smooth(0, vA, v)) : lerp(S.chestHalf, S.shoulder.x, smooth(vA, 1, v));
    if (S.cinch) w = lerp(S.cinch, w, smooth(0, 0.1, v));
    return w;
  };
  const yTop = (side, xTop) => {
    const ax = Math.abs(xTop);
    if (ax >= S.hsp.x) return S.hsp.y + (S.shoulder.y - S.hsp.y) * (ax - S.hsp.x) / (S.shoulder.x - S.hsp.x);
    const k = ax / S.hsp.x, drop = side > 0 ? S.neckFront : S.neckBack;
    return S.hsp.y - drop * Math.pow(Math.cos(k * Math.PI / 2), S.neckPow || 0.7);
  };
  const yHemAt = s => hemY + (S.tail || 0) * Math.pow(Math.abs(s), 2.4);
  function surf(side, s, v, D, out) {
    const x = s * halfW(v), xTop = s * S.shoulder.x;
    const yt = yTop(side, xTop), yh = yHemAt(s), y = lerp(yh, yt, v);
    const yn = clamp((y - hemY) / S.len, 0, 1.1);
    const P = Math.pow(Math.max(0, 1 - Math.pow(Math.abs(s), p)), 1 / p);
    const dep = lerp(lerp(D.depthHem, D.depthChest, smooth(0, 0.62, yn)), D.depthTop, smooth(0.74, 0.985, yn));
    const tBody = P * dep, ax = Math.abs(xTop);
    let tEdge = 0, rr = S.rollR;
    if (ax < S.hsp.x) { const k = ax / S.hsp.x; tEdge = (side > 0 ? S.neckDepthF : S.neckDepthB) * Math.sqrt(1 - k * k); rr = lerp(S.rollR, 0.075, 1 - k * k); }
    const dTop = yt - y;
    let roll = 1;
    if (dTop < rr) { const q = 1 - dTop / rr; roll = Math.sqrt(Math.max(0, 1 - q * q)); }
    let t = tEdge + (tBody - tEdge) * roll;
    const m = Math.pow(P, 0.55) * smooth(0, 0.1, dTop);
    const fold = D.foldAmp * Math.pow(1 - yn, 1.2) * Math.sin(TAU * (x / S.foldLen) + nz + side * 1.3 + 1.7 * vnoise(x * 3, y * 2, nz));
    const bumps = D.bumpAmp * (0.35 + 0.65 * (1 - yn)) * fbm(x * 7 + side * 9, y * 5, nz, 3);
    t += (fold + bumps) * m;
    t = Math.max(t, 0.0035 * P * smooth(0, 0.02, dTop));
    out[0] = x; out[1] = y; out[2] = side > 0 ? t : -t * (S.backFlat || 0.9);
    return out;
  }
  function toParam(side, x, y) {
    let v = clamp((y - hemY) / S.len, 0, 1), s = 0;
    for (let i = 0; i < 6; i++) {
      s = clamp(x / halfW(v), -1, 1);
      const yt = yTop(side, s * S.shoulder.x), yh = yHemAt(s);
      v = clamp((y - yh) / (yt - yh), 0, 1);
    }
    return [s, v];
  }
  return { surf, toParam, hemY, halfW };
}

// The body of a tee, hoodie or shirt is one piece of cloth: two panels sewn at the sides and shoulders, with a
// sleeve growing out of each armhole. It is drawn in two poses (hanging on the rail, presented to the viewer),
// each pose is left to settle under its own weight, and the mesh morphs between them.
// S.sleeve: { armhole, NA, NC, cuffLen, cuffScale, wr, blend, rack:{theta,bend,len,rIn,rZ}, front:{...}, easeA, easeL, bend, column:{half,depth} }
function bodyLayout(S, variant) {
  const NS = S.ns || 40, NVa = S.nva || 30, NVb = 14, NV = NVa + NVb, C = NS + 1, R = NV + 1, nF = C * R;
  S.hsp.x = S.shoulder.x * (2 * S.neckCols / NS);          // put the neck points on grid columns
  const A = torsoShape(S, variant), SL = S.sleeve;
  const iN0 = NS / 2 - S.neckCols, iN1 = NS / 2 + S.neckCols;
  const shoulderCol = i => i <= iN0 || i >= iN1;
  // side seams are sewn below the armpit; above it they are open and the sleeve is sewn in
  const id = (side, i, j) => (side > 0 || ((i === 0 || i === NS) && j <= NVa) || (j === NV && shoulderCol(i))) ? j * C + i : nF + j * C + i;
  const vArm = 1 - SL.armhole / (S.shoulder.y - A.hemY - (S.tail || 0));
  const vmap = j => j <= NVa ? vArm * j / NVa : vArm + (1 - vArm) * (j - NVa) / NVb;
  const vinv = v => v <= vArm ? v / vArm * NVa : NVa + (v - vArm) / (1 - vArm) * NVb;
  const NP = 2 * NVb, NA = SL.NA, NC = SL.NC || 0, SR = NA + NC;      // sleeve rings beyond the armhole
  const sleeveBase = k => nF * 2 + k * NP * SR, n = nF * 2 + 2 * NP * SR;
  const ringId = (k, i, j) => {
    i = ((i % NP) + NP) % NP;
    if (j === 0) { const e = k === 0 ? NS : 0; return i <= NVb ? id(1, e, NV - i) : id(-1, e, NV - (NP - i)); }
    return sleeveBase(k) + (j - 1) * NP + i;
  };
  const rowA = j => j <= NA ? j / NA : 1 + (SL.cuffLen || 0) * (j - NA) / NC;
  const rowS = j => j <= NA ? 1 : SL.cuffScale;
  return { NS, NVa, NVb, NV, C, R, nF, A, SL, iN0, iN1, shoulderCol, id, vArm, vmap, vinv, NP, NA, NC, SR, sleeveBase, n, ringId, rowA, rowS };
}

function settleBody(S, poses, variant) {
  const { NS, NVa, NVb, NV, C, R, nF, A, SL, iN0, iN1, shoulderCol, id, vArm, vmap, vinv, NP, NA, NC, SR, sleeveBase, n, ringId, rowA, rowS } = bodyLayout(S, variant);
  const q = [0, 0, 0], uv = new Float32Array(n * 2);
  const hangerY = x => S.hsp.y - 0.012 + (S.shoulder.y - S.hsp.y) * (Math.abs(x) - S.hsp.x) / (S.shoulder.x - S.hsp.x);

  const sims = poses.map((D, pi) => {
    const cl = new Cloth(n), P = cl.p;
    for (let side = 1; side >= -1; side -= 2) for (let j = 0; j < R; j++) for (let i = 0; i < C; i++) {
      A.surf(side, i / NS * 2 - 1, vmap(j), D, q);
      const raw = (side > 0 ? 0 : nF) + j * C + i, k = id(side, i, j);
      P[raw * 3] = q[0]; P[raw * 3 + 1] = q[1]; P[raw * 3 + 2] = q[2];
      if (raw !== k) cl.w[raw] = 0;
      if (pi === 0) { uv[raw * 2] = q[0]; uv[raw * 2 + 1] = q[1]; }
    }
    for (let i = 0; i < C; i++) {
      if (shoulderCol(i)) cl.w[id(1, i, NV)] = 0;
      else { cl.w[id(-1, i, NV)] = 0; if (D.pinNeck) cl.w[id(1, i, NV)] = 0; }
    }
    const ex = 1 + D.easeX, ey = 1 + (D.easeY || 0), ed = 1 + (D.easeX + (D.easeY || 0)) / 2;
    for (let side = 1; side >= -1; side -= 2) for (let j = 0; j < R; j++) for (let i = 0; i < C; i++) {
      const a = id(side, i, j);
      if (i < NS) cl.link(a, id(side, i + 1, j), 1, ex);
      if (j < NV) cl.link(a, id(side, i, j + 1), 1, ey);
      if (i < NS && j < NV) { cl.link(a, id(side, i + 1, j + 1), 0.6, ed); cl.link(id(side, i + 1, j), id(side, i, j + 1), 0.6, ed); }
      if (i < NS - 1) cl.link(a, id(side, i + 2, j), D.bend, ex);
      if (j < NV - 1) cl.link(a, id(side, i, j + 2), D.bend, ey);
    }
    for (let j = 0; j < R; j++) for (let i = 1; i < NS; i++) {
      const a = id(1, i, j), b = id(-1, i, j);
      if (a !== b) cl.gap(a, b, D.gapK * (P[a * 3 + 2] - P[b * 3 + 2]));
    }
    for (let side = 1; side >= -1; side -= 2) for (let i = 0; i < C; i++) {
      let run = 0; const top = id(side, i, NV);
      for (let j = NV - 1; j >= 0; j--) { run += cl.dist(id(side, i, j), id(side, i, j + 1)) * ey; cl.tether(id(side, i, j), top, run * 1.004); }
    }
    [1, -1].forEach(sx => cl.colliders.push(capsuleCollider(sx * S.hsp.x * 0.6, hangerY(S.hsp.x), 0, sx * (S.shoulder.x - 0.03), hangerY(S.shoulder.x - 0.03), 0, 0.011, 0, nF * 2)));

    // sleeves
    const pose = pi === 0 ? SL.rack : SL.front;
    [1, -1].forEach((sign, k) => {
      const nz = (variant % 89) * 2.11 + sign * 5;
      const e = k === 0 ? NS : 0, tp = id(1, e, NV) * 3, bt = id(1, e, NVa) * 3;
      const M = [(P[tp] + P[bt]) / 2, (P[tp + 1] + P[bt + 1]) / 2], half = Math.hypot(P[tp] - P[bt], P[tp + 1] - P[bt + 1]) / 2;
      for (let j = 1; j <= SR; j++) for (let i = 0; i < NP; i++) {
        const ph = i / NP * TAU, c = Math.cos(ph), sn = Math.sin(ph), kk = ringId(k, i, j);
        const a = rowA(j), ac = Math.min(a, 1), rs = rowS(j);
        const w = smooth(0, SL.blend, a), th = pose.theta + pose.bend * a, thm = pose.theta + pose.bend * a * 0.5;
        const cx = Math.abs(M[0]) + pose.len * a * Math.cos(thm), cy = M[1] - pose.len * a * Math.sin(thm);
        const al = th * w, r1 = lerp(half, lerp(pose.rIn[0], pose.rIn[1], ac) * rs, w);
        const rz = lerp(0, lerp(pose.rZ[0], pose.rZ[1], ac) * rs, Math.pow(clamp(a / (SL.blend * 0.8), 0, 1), 0.6));
        const wob = 1 + SL.wr * fbm(c * 1.3 + a * 4.2, sn * 1.3 + a * 1.1, nz, 3);
        P[kk * 3] = sign * (cx + Math.sin(al) * r1 * c * wob); P[kk * 3 + 1] = cy + Math.cos(al) * r1 * c * wob; P[kk * 3 + 2] = rz * sn * wob;
        if (pi === 0) { uv[kk * 2] = i / NP * 0.5; uv[kk * 2 + 1] = a * pose.len; }
      }
      const ea = 1 + SL.easeA, el = 1 + (pi === 0 ? SL.easeL : SL.easeL * 0.5);
      for (let j = 0; j <= SR; j++) for (let i = 0; i < NP; i++) {
        const a = ringId(k, i, j);
        if (j > 0) { cl.link(a, ringId(k, i + 1, j), 1, j > NA ? 1 : ea); cl.link(a, ringId(k, i + 2, j), SL.bend, j > NA ? 1 : ea); }
        if (j < SR) { cl.link(a, ringId(k, i, j + 1), 1, el); cl.link(a, ringId(k, i + 1, j + 1), 0.6, el); cl.link(ringId(k, i + 1, j), ringId(k, i, j + 1), 0.6, el); }
        if (j < SR - 1) cl.link(a, ringId(k, i, j + 2), SL.bend, el);
        if (j > 0 && i > 0 && i < NP / 2) { const b = ringId(k, NP - i, j); cl.gap(a, b, 0.7 * (P[a * 3 + 2] - P[b * 3 + 2])); }
        // on the rail the sleeve hangs flat against the body: keep its outer layer outside its inner one
        if (pi === 0 && j > 0 && (i < NP / 4 || i > NP * 3 / 4)) { const b = ringId(k, NP / 2 - i, j); cl.gap(a, b, 0.75 * (P[a * 3] - P[b * 3]), 0); }
      }
      for (let i = 0; i < NP; i++) {
        let run = 0;
        for (let j = 1; j <= SR; j++) { run += cl.dist(ringId(k, i, j), ringId(k, i, j - 1)) * el; cl.tether(ringId(k, i, j), ringId(k, i, 0), run * 1.004); }
      }
      const f0 = sleeveBase(k), f1 = f0 + NP * SR;
      if (pi === 0) cl.colliders.push(columnCollider(0, SL.column.half, SL.column.depth, A.hemY - 0.1, S.shoulder.y - 0.03, f0 + NP, f1));
      else {
        const th = pose.theta + pose.bend * 0.5, d = [Math.cos(th), -Math.sin(th)], jx = Math.abs(M[0]) - 0.03, jy = M[1] + half * 0.35;
        cl.colliders.push(capsuleCollider(sign * jx, jy, 0, sign * (jx + d[0] * pose.len * 1.3), jy + d[1] * pose.len * 1.3, 0, pose.rZ[1] * 0.85, f0, f1));
      }
    });
    cl.run(D.steps, D.iters, D.grav, 0.9);
    cl.relax(D.relax == null ? 3 : D.relax);
    return P;
  });
  return { sims, uv };
}

// ---- 20-garments.js ----
// ---------- materials ----------
function fabricMaterial(kind, hex, opts) {
  opts = opts || {};
  const m = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(hex),
    roughness: opts.roughness != null ? opts.roughness : 0.94,
    metalness: 0,
    normalMap: FabricNormals[kind],
    normalScale: new THREE.Vector2(opts.bump || 0.22, opts.bump || 0.22),
    sheen: opts.sheen != null ? opts.sheen : 0.55,
    sheenRoughness: 0.55,
    side: THREE.DoubleSide,
    envMapIntensity: 0.2,
    specularIntensity: 0.25,
    vertexColors: true
  });
  m.userData.kind = kind;
  // the inside of a garment (seen through hems, cuffs and the neck) reads darker
  m.onBeforeCompile = sh => {
    // Cloth is one sheet seen from both sides. Deciding "inside or outside" per triangle leaves dotted lines along every
    // fold that turns edge-on, so both the shading normal and the darkening go by the smooth normal instead.
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_maps>',
      '#include <normal_fragment_maps>\n #ifdef DOUBLE_SIDED\n normal *= faceDirection;\n #endif\n { vec3 vd = normalize(vViewPosition); float fb = dot(normal, vd); if (fb < 0.0) normal = normalize(normal - 2.0 * fb * vd); }');
    sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>',
      '#include <color_fragment>\n { float fc = dot(normalize(vNormal), normalize(vViewPosition)); diffuseColor.rgb *= mix(0.5, 1.0, smoothstep(-0.35, -0.02, fc)); }');
  };
  return m;
}
function tintFabric(m, hex, k) {
  m.color.set(hex);
  if (k) m.color.multiplyScalar(k);
  const c = m.color, l = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
  // dark cloth gets a soft pale bloom at grazing angles, pale cloth barely any
  m.sheenColor = new THREE.Color().copy(c).lerp(new THREE.Color(1, 1, 1), 0.35);
  m.sheen = lerp(0.22, 0.2, clamp(l * 1.6, 0, 1));
  m.envMapIntensity = lerp(0.08, 0.2, clamp(l * 3, 0, 1));
}

const Mats = {};
function initSharedMaterials() {
  Mats.wood = new THREE.MeshPhysicalMaterial({ color: 0x5b2a1a, roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.35, envMapIntensity: 0.8 });
  Mats.woodDark = new THREE.MeshPhysicalMaterial({ color: 0x2c2622, roughness: 0.34, clearcoat: 0.6, clearcoatRoughness: 0.3, envMapIntensity: 0.8 });
  Mats.chrome = new THREE.MeshStandardMaterial({ color: 0xe6e8ea, metalness: 1, roughness: 0.14, envMapIntensity: 1.25 });
  Mats.steel = new THREE.MeshStandardMaterial({ color: 0xcfd2d4, metalness: 1, roughness: 0.3, envMapIntensity: 1.1 });
  Mats.hit = new THREE.MeshBasicMaterial({ visible: false });
}

function flipIndex(g) {
  const a = g.index.array;
  for (let k = 0; k < a.length; k += 3) { const t = a[k + 1]; a[k + 1] = a[k + 2]; a[k + 2] = t; }
  g.index.needsUpdate = true;
}
// make sure a closed shell faces outward; returns true if it had to flip
function faceOutward(g) {
  g.computeVertexNormals();
  const p = g.attributes.position, n = g.attributes.normal;
  let cx = 0, cy = 0, cz = 0;
  for (let i = 0; i < p.count; i++) { cx += p.getX(i); cy += p.getY(i); cz += p.getZ(i); }
  cx /= p.count; cy /= p.count; cz /= p.count;
  let s = 0;
  for (let i = 0; i < p.count; i++) s += (p.getX(i) - cx) * n.getX(i) + (p.getY(i) - cy) * n.getY(i) + (p.getZ(i) - cz) * n.getZ(i);
  if (s < 0) { flipIndex(g); g.computeVertexNormals(); return true; }
  return false;
}
function whiteColors(g) {
  const c = new Float32Array(g.attributes.position.count * 3).fill(1);
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return g;
}
// soft occlusion from the cloth's own relief: vertices sitting in a valley go a little darker
function shadeCreases(g, strength) {
  const pos = g.attributes.position, nor = g.attributes.normal, idx = g.index.array, n = pos.count;
  const sx = new Float32Array(n), sy = new Float32Array(n), sz = new Float32Array(n), cnt = new Uint16Array(n);
  const add = (a, b) => { sx[a] += pos.getX(b); sy[a] += pos.getY(b); sz[a] += pos.getZ(b); cnt[a]++; };
  for (let k = 0; k < idx.length; k += 3) { const a = idx[k], b = idx[k + 1], c = idx[k + 2]; add(a, b); add(a, c); add(b, a); add(b, c); add(c, a); add(c, b); }
  const col = g.attributes.color ? g.attributes.color.array : new Float32Array(n * 3).fill(1);
  for (let i = 0; i < n; i++) {
    if (!cnt[i]) continue;
    const h = (sx[i] / cnt[i] - pos.getX(i)) * nor.getX(i) + (sy[i] / cnt[i] - pos.getY(i)) * nor.getY(i) + (sz[i] / cnt[i] - pos.getZ(i)) * nor.getZ(i);
    const v = clamp(1 - h * strength, 0.76, 1.05);
    col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = v;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
}
// geometry in the hanging pose with a morph target for the presented pose
function twoPose(g0, g1, outward) {
  if (outward) { if (faceOutward(g0)) flipIndex(g1); } else g0.computeVertexNormals();
  g1.computeVertexNormals();
  const a = g0.attributes.position.array, b = g1.attributes.position.array, na = g0.attributes.normal.array, nb = g1.attributes.normal.array;
  const dp = new Float32Array(a.length), dn = new Float32Array(a.length);
  for (let i = 0; i < a.length; i++) { dp[i] = b[i] - a[i]; dn[i] = nb[i] - na[i]; }
  g0.morphAttributes.position = [new THREE.BufferAttribute(dp, 3)];
  g0.morphAttributes.normal = [new THREE.BufferAttribute(dn, 3)];
  g0.morphTargetsRelative = true;
  if (!g0.attributes.color) whiteColors(g0);
  g0.userData.normal1 = nb;
  return g0;
}

function makeBody(S, poses, variant, pre) {
  const { NS, NVa, NVb, NV, C, R, nF, A, SL, iN0, iN1, shoulderCol, id, vArm, vmap, vinv, NP, NA, NC, SR, sleeveBase, n, ringId, rowA, rowS } = bodyLayout(S, variant);
  const settled = pre || settleBody(S, poses, variant), sims = settled.sims, uv = settled.uv;

  const idxTorso = [], idxSleeve = [], idxCuff = [];
  for (let side = 1; side >= -1; side -= 2) for (let j = 0; j < NV; j++) for (let i = 0; i < NS; i++) {
    const a = id(side, i, j), b = id(side, i + 1, j), c = id(side, i, j + 1), d = id(side, i + 1, j + 1);
    if (side > 0) idxTorso.push(a, b, c, b, d, c); else idxTorso.push(a, c, b, b, c, d);
  }
  [1, -1].forEach((sign, k) => {
    for (let j = 0; j < SR; j++) for (let i = 0; i < NP; i++) {
      const a = ringId(k, i, j), b = ringId(k, i + 1, j), c = ringId(k, i, j + 1), d = ringId(k, i + 1, j + 1);
      const t = j < NA ? idxSleeve : idxCuff;
      if (sign > 0) t.push(a, b, c, b, d, c); else t.push(a, c, b, b, c, d);
    }
  });
  const build = P => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(P), 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idxTorso.concat(idxSleeve, idxCuff));
    return g;
  };
  const geo = twoPose(build(sims[0]), build(sims[1]));
  shadeCreases(geo, 20);
  if (NC && SL.cuffSeam) { const col = geo.attributes.color.array; for (let k = 0; k < 2; k++) for (let i = 0; i < NP; i++) { const v = ringId(k, i, NA) * 3; col[v] = col[v + 1] = col[v + 2] = SL.cuffSeam; } }
  if (NC) { const m = idxTorso.length + idxSleeve.length; geo.addGroup(0, m, 0); geo.addGroup(m, idxCuff.length, 1); }
  const nrm = [geo.attributes.normal.array, geo.userData.normal1];

  // read the settled cloth back: positions on either panel, in either pose
  function sample(pose, side, s, v, lift) {
    const a = clamp((s + 1) / 2 * NS, 0, NS - 1e-4), b = clamp(vinv(v), 0, NV - 1e-4);
    const i = Math.floor(a), j = Math.floor(b), fa = a - i, fb = b - j, P = sims[pose], N = nrm[pose];
    const ids = [id(side, i, j), id(side, i + 1, j), id(side, i, j + 1), id(side, i + 1, j + 1)];
    const ws = [(1 - fa) * (1 - fb), fa * (1 - fb), (1 - fa) * fb, fa * fb];
    const o = [0, 0, 0], nn = [0, 0, 0];
    for (let k = 0; k < 4; k++) for (let c = 0; c < 3; c++) { o[c] += P[ids[k] * 3 + c] * ws[k]; nn[c] += N[ids[k] * 3 + c] * ws[k]; }
    const l = Math.hypot(nn[0], nn[1], nn[2]) || 1;
    if (lift) for (let c = 0; c < 3; c++) o[c] += nn[c] / l * lift;
    o.n = [nn[0] / l, nn[1] / l, nn[2] / l];
    return o;
  }
  const pointAt = (pose, side, x, y, lift) => { const sv = A.toParam(side, x, y); return sample(pose, side, sv[0], sv[1], lift); };
  function neckLoop(pose) {
    const P = sims[pose], pts = [];
    for (let i = iN0; i <= iN1; i++) { const k = id(1, i, NV); pts.push([P[k * 3], P[k * 3 + 1], P[k * 3 + 2]]); }
    for (let i = iN1 - 1; i > iN0; i--) { const k = id(-1, i, NV); pts.push([P[k * 3], P[k * 3 + 1], P[k * 3 + 2]]); }
    return pts;
  }
  function hemLoop(pose) {
    const P = sims[pose], pts = [];
    for (let i = 0; i <= NS; i++) { const k = id(1, i, 0); pts.push([P[k * 3], P[k * 3 + 1], P[k * 3 + 2]]); }
    for (let i = NS - 1; i > 0; i--) { const k = id(-1, i, 0); pts.push([P[k * 3], P[k * 3 + 1], P[k * 3 + 2]]); }
    return pts;
  }
  // a patch that rides on a panel (prints, pockets, plackets), built in both poses
  // straight: lay the patch out square to the viewer in the presented pose (a print must not follow the cloth's shear)
  function patch(side, x0, y0, w, h, nx, ny, lift, mask, straight) {
    const solved = new Map();
    const square = (x, y) => {
      const key = x.toFixed(5) + '_' + y.toFixed(5); let r = solved.get(key);
      if (!r) {
        const c = pointAt(1, side, x0, y0, 0); let px = x, py = y;
        const tx = c[0] + (x - x0), ty = c[1] + (y - y0);
        for (let it = 0; it < 5; it++) { const q = pointAt(1, side, px, py, 0); px += tx - q[0]; py += ty - q[1]; }
        r = [px, py]; solved.set(key, r);
      }
      return r;
    };
    const mk = pose => {
      const g = gridGeo(nx, ny, (a, b, out) => {
        let x = x0 + (a - 0.5) * w, y = y0 + (b - 0.5) * h;
        if (straight) { const r = square(x, y); x = r[0]; y = r[1]; }
        const o = pointAt(pose, side, x, y, lift);
        out.p[0] = o[0]; out.p[1] = o[1]; out.p[2] = o[2];
        out.uv[0] = side > 0 ? a : 1 - a; out.uv[1] = b; out.uv1[0] = (a - 0.5) * w; out.uv1[1] = (b - 0.5) * h;
      }, { flip: side < 0 });
      if (mask) {
        const src = g.index.array, keep = [], U = g.attributes.uv1;
        for (let k = 0; k < src.length; k += 3) {
          const cx = (U.getX(src[k]) + U.getX(src[k + 1]) + U.getX(src[k + 2])) / 3, cy = (U.getY(src[k]) + U.getY(src[k + 1]) + U.getY(src[k + 2])) / 3;
          if (mask(cx, cy)) keep.push(src[k], src[k + 1], src[k + 2]);
        }
        g.setIndex(keep);
      }
      return g;
    };
    return twoPose(mk(0), mk(1));
  }
  return { geo, sample, pointAt, neckLoop, hemLoop, patch, hemY: A.hemY, spec: S };
}

// ---------- small helpers for trims ----------
function sweepTwoPose(loop0, loop1, closed, sec, radial, uvScale) {
  return twoPose(sweep(loop0, closed, sec, radial, uvScale), sweep(loop1, closed, sec, radial, uvScale), true);
}
// rigid bits (buttons, cord tips) that ride on the cloth in both poses
function rigidTwoPose(base, spots) {
  const mk = key => {
    const list = spots.map(sp => {
      const g = base.clone(), o = sp[key];
      const qn = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(o.n[0], o.n[1], o.n[2]).normalize());
      g.applyQuaternion(qn); g.translate(o[0], o[1], o[2]);
      if (!g.attributes.uv1) g.setAttribute('uv1', g.attributes.uv.clone());
      return g;
    });
    return mergeGeos(list);
  };
  return twoPose(mk('a'), mk('b'));
}

// ---------- hanger ----------
function makeHanger(kind, dark, line, clips) {
  const g = new THREE.Group(), wood = dark ? Mats.woodDark : Mats.wood;
  const hook = new THREE.Group();
  const hr = 0.0245, wire = 0.0027, sink = -(hr - wire - 0.016);
  const pts = [];
  for (let i = 0; i <= 22; i++) { const t = lerp(-0.62, Math.PI * 0.94, i / 22); pts.push([Math.cos(t) * hr, Math.sin(t) * hr + sink, 0]); }
  const last = pts[pts.length - 1];
  pts.push([last[0] + 0.002, last[1] - 0.012, 0], [-0.006, -0.038, 0], [0, -0.05, 0], [0, -0.08, 0]);
  const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p[0], p[1], p[2])), false, 'catmullrom', 0.4);
  const hk = new THREE.Mesh(new THREE.TubeGeometry(curve, 64, wire, 8, false), Mats.chrome);
  hook.add(hk);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(wire * 1.25, 10, 8), Mats.chrome);
  tip.position.set(pts[0][0], pts[0][1], 0); hook.add(tip);
  // the arms follow the garment's own shoulder line, just under the cloth
  const bar = kind === 'scarf' || kind === 'clip';
  const half = line ? line.half : kind === 'clip' ? 0.13 : 0.2, neckY = -0.097, y0 = line ? line.y0 : neckY - 0.012, tipDrop = line ? line.y0 - line.y1 : kind === 'clip' ? 0.05 : 0.072;
  const arm = sx => {
    const P = [];
    for (let i = 0; i <= 16; i++) { const t = i / 16; P.push([sx * half * t, y0 - tipDrop * Math.pow(t, 1.15) + 0.004 * Math.sin(t * Math.PI), 0]); }
    const geo = sweep(P, false, (k, t) => ({ a: lerp(0.017, 0.009, t), b: lerp(0.0075, bar ? 0.006 : 0.004, t), pow: 0.7 }), 12);
    faceOutward(geo);
    return new THREE.Mesh(geo, wood);
  };
  g.add(arm(1), arm(-1));
  const neck = new THREE.Mesh(new THREE.SphereGeometry(0.019, 16, 12), wood);
  neck.scale.set(1.75, 1.2, 0.5); neck.position.set(0, neckY - 0.002, 0); g.add(neck);
  const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.0042, 0.0048, 0.008, 12), Mats.chrome);
  ferrule.position.set(0, neckY + 0.02, 0); g.add(ferrule);
  [1, -1].forEach(sx => {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.0105, 12, 10), wood);
    cap.scale.set(0.85, 0.85, bar ? 0.6 : 0.42); cap.position.set(sx * half, y0 - tipDrop, 0); g.add(cap);
  });
  if (bar) {
    const by = kind === 'scarf' ? -0.2 : -0.185;
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(kind === 'scarf' ? 0.0095 : 0.0045, kind === 'scarf' ? 0.0095 : 0.0045, half * 2 - 0.01, 14), kind === 'scarf' ? wood : Mats.chrome);
    rod.rotation.z = Math.PI / 2; rod.position.set(0, by, 0); g.add(rod);
    [1, -1].forEach(sx => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.03, 8), Mats.steel);
      post.position.set(sx * (half - 0.012), by + 0.012, 0); post.scale.y = kind === 'clip' ? 0.8 : 1; g.add(post);
    });
    if (kind === 'clip' && clips) [1, -1].forEach(sx => {
      // a sprung clip: two little jaws and the loop that slides on the bar
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.0016, 0.0016, by - clips.y, 6), Mats.chrome);
      stem.position.set(sx * clips.x, (clips.y + by) / 2, 0); g.add(stem);
      const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.017, 0.022, 0.014), Mats.chrome);
      jaw.position.set(sx * clips.x, clips.y - 0.006, 0); g.add(jaw);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.007, 0.0017, 6, 16), Mats.chrome);
      ring.position.set(sx * clips.x, by, 0); ring.rotation.y = Math.PI / 2; g.add(ring);
    });
  }
  return { group: g, hook };
}

function labelTexture() {
  if (labelTexture.t) return labelTexture.t;
  const c = document.createElement('canvas'); c.width = 256; c.height = 160;
  const x = c.getContext('2d');
  x.fillStyle = '#f3f1ea'; x.fillRect(0, 0, 256, 160);
  x.fillStyle = '#17181a'; x.font = '700 58px Archivo, Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText('blank', 128, 70);
  x.font = '500 20px Archivo, Arial, sans-serif'; x.fillText('batch 001', 128, 122);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return (labelTexture.t = t);
}

// ---------- trims that ride on the settled cloth ----------
function smoothPath(pts, n) {
  const c = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p[0], p[1], 0)), false, 'catmullrom', 0.5);
  return c.getPoints(n).map(v => [v.x, v.y]);
}
// a flat band (hood edge, placket) following a path drawn on a panel
function clothBand(T, side, path, halfW, thick, lift) {
  const mk = pose => {
    const P3 = [], ups = [];
    path.forEach((q, i) => {
      const a = path[Math.max(0, i - 1)], b = path[Math.min(path.length - 1, i + 1)];
      const tx = b[0] - a[0], ty = b[1] - a[1], tl = Math.hypot(tx, ty) || 1, nx = -ty / tl, ny = tx / tl;
      const o = T.pointAt(pose, side, q[0], q[1], lift), o2 = T.pointAt(pose, side, q[0] + nx * 0.01, q[1] + ny * 0.01, lift);
      P3.push([o[0], o[1], o[2]]); ups.push([o2[0] - o[0], o2[1] - o[1], o2[2] - o[2]]);
    });
    return sweep(P3, false, (k, t) => ({ a: typeof halfW === 'function' ? halfW(t) : halfW, b: thick, up: ups[k], pow: 0.55 }), 10, [0.1, 0.01]);
  };
  return twoPose(mk(0), mk(1), true);
}
// a stitched seam: a fine ridge that catches a little shadow
function clothLine(T, side, path, r, lift, shade) {
  const mk = pose => sweep(path.map(q => { const o = T.pointAt(pose, side, q[0], q[1], lift); return [o[0], o[1], o[2]]; }), false, () => ({ a: r, b: r }), 5);
  const g = twoPose(mk(0), mk(1), true);
  g.attributes.color.array.fill(shade == null ? 0.88 : 0.55 + 0.45 * shade);   // a seam is a soft shadow, never a drawn line
  return g;
}
// a rib band that lies in the plane of the neck opening: upright at the front and back, flat across the shoulders
function neckRib(T, halfH, thick) {
  const mk = pose => {
    const loop = T.neckLoop(pose), n = loop.length;
    let cx = 0, cy = 0, cz = 0; loop.forEach(p => { cx += p[0]; cy += p[1]; cz += p[2]; }); cx /= n; cy /= n; cz /= n;
    const ups = loop.map(p => { const d = [cx - p[0], cy + 0.05 - p[1], (cz - p[2]) * 0.35], l = Math.hypot(d[0], d[1], d[2]) || 1; return [d[0] / l, d[1] / l, d[2] / l]; });
    const pts = loop.map((p, i) => [p[0] + ups[i][0] * halfH * 0.55, p[1] + ups[i][1] * halfH * 0.55, p[2] + ups[i][2] * halfH * 0.55]);
    return sweep(pts, true, k => ({ a: halfH, b: thick, up: ups[k], pow: 0.7 }), 10, [0.05, 0.004]);
  };
  return twoPose(mk(0), mk(1), true);
}
const hline = (x0, x1, y, n) => Array.from({ length: n + 1 }, (_, i) => [lerp(x0, x1, i / n), y]);

function hangerLineFor(S) {
  const half = Math.min(0.2, S.shoulder.x - 0.058);
  const yAt = x => S.hsp.y + (S.shoulder.y - S.hsp.y) * (x - S.hsp.x) / (S.shoulder.x - S.hsp.x);
  return { half, y0: yAt(0.03) - 0.025, y1: yAt(half) - 0.023 };
}

// ---------- the cuts ----------
// spec() is the pattern (plain numbers, so a worker can settle it); build() dresses the settled cloth with its trims.
const TYPES = {};
const SIM = { steps: 70, iters: 6, grav: -5 };

TYPES.tee = {
  label: 'T-shirt', fabric: 'jersey',
  spec() {
    const S = {
      hsp: { x: 0.094, y: -0.106 }, shoulder: { x: 0.234, y: -0.16 }, len: 0.75, neckCols: 8,
      chestHalf: 0.25, hemHalf: 0.248, armpitV: 0.66,
      neckFront: 0.076, neckBack: 0.02, neckDepthF: 0.03, neckDepthB: 0.018, neckPow: 0.72,
      rollR: 0.024, foldLen: 0.17, backFlat: 0.92
    };
    S.sleeve = {
      armhole: 0.225, NA: 16, wr: 0.03, blend: 0.34, easeA: 0.03, easeL: 0.02, bend: 0.2,
      front: { theta: 1.0, bend: 0.16, len: 0.165, rIn: [0.11, 0.098], rZ: [0.04, 0.032] },
      rack: { theta: 1.2, bend: 0.14, len: 0.2, rIn: [0.04, 0.034], rZ: [0.08, 0.075] },
      column: { half: S.chestHalf + 0.008, depth: 0.105 }
    };
    return { S, poses: [
      Object.assign({ depthTop: 0.022, depthChest: 0.066, depthHem: 0.086, foldAmp: 0.007, bumpAmp: 0.003, easeX: 0.022, easeY: 0.004, bend: 0.35, gapK: 0.62, relax: 6 }, SIM),
      Object.assign({ depthTop: 0.021, depthChest: 0.042, depthHem: 0.05, foldAmp: 0.003, bumpAmp: 0.002, easeX: 0.012, easeY: 0.002, bend: 0.4, gapK: 0.7, relax: 5 }, SIM)
    ] };
  },
  build(variant, pre) {
    const { S, poses } = this.spec(), T = makeBody(S, poses, variant, pre);
    const parts = [{ geo: T.geo, mat: 'main', cast: true }];
    parts.push({ geo: neckRib(T, 0.012, 0.0052), mat: 'rib', cast: true });
    parts.push({ geo: T.patch(-1, 0, S.hsp.y - S.neckBack - 0.024, 0.05, 0.032, 6, 5, -0.003), mat: 'label', cast: false });
    [1, -1].forEach(side => parts.push({ geo: clothLine(T, side, hline(-0.22, 0.22, T.hemY + 0.026, 28), 0.0011, 0.0006), mat: 'main', cast: false }));
    return {
      parts, patch: T.patch, hanger: 'std', hangerLine: hangerLineFor(S),
      size: { w: 0.76, d: 0.2, top: -0.1, bottom: T.hemY },
      prints: { center: { side: 1, x: 0, y: -0.325, w: 0.22 }, chest: { side: 1, x: 0.095, y: -0.265, w: 0.08 }, back: { side: -1, x: 0, y: -0.3, w: 0.26 } },
      defaultPrint: 'center'
    };
  }
};

TYPES.hoodie = {
  label: 'Hoodie', fabric: 'fleece',
  spec() {
    const S = {
      hsp: { x: 0.1, y: -0.106 }, shoulder: { x: 0.262, y: -0.162 }, len: 0.675, neckCols: 8,
      chestHalf: 0.286, hemHalf: 0.282, cinch: 0.256, armpitV: 0.62,
      neckFront: 0.066, neckBack: 0.016, neckDepthF: 0.036, neckDepthB: 0.022, neckPow: 0.8,
      rollR: 0.03, foldLen: 0.21, backFlat: 0.95, p: 2.4
    };
    S.sleeve = {
      armhole: 0.25, NA: 22, NC: 4, cuffLen: 0.11, cuffScale: 0.8, wr: 0.035, blend: 0.16, easeA: 0.03, easeL: 0.045, bend: 0.35,
      front: { theta: 1.37, bend: 0.06, len: 0.53, rIn: [0.118, 0.07], rZ: [0.048, 0.036] },
      rack: { theta: 1.4, bend: 0.06, len: 0.54, rIn: [0.046, 0.036], rZ: [0.09, 0.062] },
      column: { half: S.chestHalf + 0.01, depth: 0.11 }
    };
    return { S, poses: [
      Object.assign({ depthTop: 0.026, depthChest: 0.078, depthHem: 0.082, foldAmp: 0.006, bumpAmp: 0.004, easeX: 0.022, easeY: 0.012, bend: 0.45, gapK: 0.7, pinNeck: true, relax: 6 }, SIM),
      Object.assign({ depthTop: 0.025, depthChest: 0.052, depthHem: 0.056, foldAmp: 0.003, bumpAmp: 0.003, easeX: 0.014, easeY: 0.008, bend: 0.5, gapK: 0.75, pinNeck: true, relax: 5 }, SIM)
    ] };
  },
  build(variant, pre) {
    const { S, poses } = this.spec(), T = makeBody(S, poses, variant, pre);
    const parts = [{ geo: T.geo, mat: ['main', 'rib'], cast: true }];
    // rib hem band lofted off the settled hem
    const band = pose => {
      const loop = T.hemLoop(pose), n = loop.length;
      return gridGeo(n, 6, (a, b, out, i) => {
        const p = loop[i], k = lerp(0.975, 0.93, b);
        out.p[0] = p[0] * k; out.p[1] = p[1] + 0.006 - b * 0.07; out.p[2] = p[2] * lerp(0.9, 0.8, b);
        out.uv[0] = a * 1.4; out.uv[1] = b * 0.07;
      }, { closeU: true });
    };
    parts.push({ geo: twoPose(band(0), band(1), true), mat: 'rib', cast: true });
    // The hood. On a hanger it stands round the neck like a deep soft collar, its two edges cross on the chest,
    // and the rest of it hangs down the back.
    const loop = T.neckLoop(0), N = loop.length;
    let cx = 0, cz = 0; loop.forEach(p => { cx += p[0]; cz += p[2]; }); cx /= N; cz /= N;
    const cowl = gridGeo(N, 9, (a, b, out, i) => {
      const p = loop[i], rl = Math.hypot(p[0] - cx, p[2] - cz) || 1e-4, ox = (p[0] - cx) / rl, oz = (p[2] - cz) / rl;
      const front = clamp((p[2] - cz) / 0.036, 0, 1), fr = Math.pow(front, 1.6) * (1 - Math.min(1, Math.abs(p[0]) / 0.075));
      const H = lerp(0.078, 0.012, fr);                          // a soft roll at the back and sides, dipping to the V in front
      const t = b, roll = Math.sin(Math.PI * Math.min(1, t * 1.08));
      const up = H * (t < 0.78 ? t / 0.78 : 1 - (t - 0.78) / 0.22 * 0.3);
      const outw = 0.016 + 0.036 * roll + (t > 0.78 ? (t - 0.78) / 0.22 * 0.02 : 0);
      out.p[0] = p[0] + ox * outw; out.p[1] = p[1] - 0.006 + up; out.p[2] = p[2] + oz * outw * 0.8 - 0.022 * t * (1 - front);
      out.uv[0] = a * 0.7; out.uv[1] = b * 0.1;
    }, { closeU: true });
    faceOutward(cowl); whiteColors(cowl); shadeCreases(cowl, 10);
    parts.push({ geo: cowl, mat: 'main', cast: true });
    const bag = pose => gridGeo(24, 22, (a, b, out) => {
      const u = (a - 0.5) * 2, x = u * 0.15 * (0.78 + 0.22 * Math.sin(Math.PI * Math.min(1, b * 1.1)));
      const y = lerp(-0.07 - 0.03 * u * u, -0.4, b);
      const o = T.pointAt(pose, -1, clamp(x, -0.24, 0.24), Math.min(y, S.hsp.y - 0.03), 0);
      const sh = Math.sqrt(Math.max(0, 1 - Math.pow(Math.abs(u), 2.4))) * Math.pow(Math.sin(Math.PI * Math.pow(b, 0.6)), 0.6);
      out.p[0] = x; out.p[1] = y; out.p[2] = Math.min(o[2], -0.02) - (0.03 + 0.03 * Math.exp(-Math.pow((b - 0.22) / 0.2, 2))) * sh - 0.003;
      out.uv[0] = x; out.uv[1] = y;
    }, { flip: true });
    parts.push({ geo: twoPose(bag(0), bag(1)), mat: 'main', cast: true });
    [-1, 1].forEach(sx => {
      const path = smoothPath([[sx * 0.108, -0.11], [sx * 0.096, -0.15], [sx * 0.066, -0.198], [sx * 0.024, -0.238], [-sx * 0.014, -0.262]], 16);
      parts.push({ geo: clothBand(T, 1, path, t => lerp(0.03, 0.022, t), 0.006, sx > 0 ? 0.014 : 0.007), mat: 'main', cast: true });
    });
    // drawcords and their metal tips
    const tips = [];
    [1, -1].forEach(sx => {
      const x0 = sx * 0.03, L = sx > 0 ? 0.105 : 0.088;
      const cord = pose => { const P = []; for (let i = 0; i <= 8; i++) { const t = i / 8, o = T.pointAt(pose, 1, x0 + sx * 0.012 * t, -0.24 - L * t, 0.012 - 0.005 * t); P.push([o[0], o[1], o[2]]); } return P; };
      const c0 = cord(0), c1 = cord(1);
      parts.push({ geo: sweepTwoPose(c0, c1, false, () => ({ a: 0.0034, b: 0.0034 }), 6), mat: 'rib', cast: false });
      const e0 = c0[8], e1 = c1[8];
      tips.push({ a: Object.assign([e0[0], e0[1] - 0.009, e0[2]], { n: [0, 1, 0] }), b: Object.assign([e1[0], e1[1] - 0.009, e1[2]], { n: [0, 1, 0] }) });
    });
    const ag = new THREE.CylinderGeometry(0.004, 0.004, 0.02, 10); ag.rotateX(Math.PI / 2);
    parts.push({ geo: rigidTwoPose(ag, tips), mat: 'steel', cast: false });
    // kangaroo pocket: a raised panel with stitched edges and shaded hand openings
    const py = T.hemY + 0.135, ph = 0.2, pw = 0.172, pn = 0.118;
    parts.push({ geo: T.patch(1, 0, py, pw * 2, ph, 28, 14, 0.005, (dx, dy) => Math.abs(dx) < (dy > 0 ? lerp(pw, pn, dy / (ph / 2)) : pw)), mat: 'main', cast: false });
    parts.push({ geo: clothLine(T, 1, hline(-pn, pn, py + ph / 2, 14), 0.0016, 0.006, 0.7), mat: 'main', cast: false });
    [1, -1].forEach(sx => parts.push({ geo: clothLine(T, 1, [[sx * pn, py + ph / 2], [sx * (pn + pw) / 2, py + ph / 4], [sx * pw, py], [sx * pw, py - ph / 2]], 0.0022, 0.0062, 0.55), mat: 'main', cast: false }));
    return {
      parts, patch: T.patch, hanger: 'std', hangerLine: hangerLineFor(S),
      size: { w: 0.74, d: 0.2, top: -0.05, bottom: T.hemY - 0.11 },
      prints: { center: { side: 1, x: 0, y: -0.445, w: 0.21 }, chest: { side: 1, x: 0.115, y: -0.31, w: 0.09 }, back: { side: -1, x: 0, y: -0.52, w: 0.25 } },
      defaultPrint: 'center'
    };
  }
};

TYPES.shirt = {
  label: 'Buttoned shirt', fabric: 'oxford',
  spec() {
    const S = {
      hsp: { x: 0.08, y: -0.106 }, shoulder: { x: 0.228, y: -0.164 }, len: 0.75, neckCols: 7,
      chestHalf: 0.262, hemHalf: 0.262, armpitV: 0.7, tail: 0.05,
      neckFront: 0.046, neckBack: 0.012, neckDepthF: 0.034, neckDepthB: 0.02, neckPow: 0.8,
      rollR: 0.022, foldLen: 0.15, backFlat: 0.92, p: 2.5
    };
    S.sleeve = {
      armhole: 0.225, NA: 22, NC: 3, cuffLen: 0.12, cuffScale: 0.96, cuffSeam: 0.62, wr: 0.025, blend: 0.16, easeA: 0.02, easeL: 0.03, bend: 0.45,
      front: { theta: 1.4, bend: 0.05, len: 0.53, rIn: [0.098, 0.06], rZ: [0.04, 0.028] },
      rack: { theta: 1.42, bend: 0.05, len: 0.54, rIn: [0.036, 0.03], rZ: [0.08, 0.054] },
      column: { half: S.chestHalf + 0.008, depth: 0.095 }
    };
    return { S, poses: [
      Object.assign({ depthTop: 0.022, depthChest: 0.058, depthHem: 0.07, foldAmp: 0.005, bumpAmp: 0.002, easeX: 0.02, easeY: 0.004, bend: 0.5, gapK: 0.66, pinNeck: true, relax: 6 }, SIM),
      Object.assign({ depthTop: 0.021, depthChest: 0.038, depthHem: 0.044, foldAmp: 0.002, bumpAmp: 0.0015, easeX: 0.01, easeY: 0.002, bend: 0.55, gapK: 0.75, pinNeck: true, relax: 5 }, SIM)
    ] };
  },
  build(variant, pre) {
    const { S, poses } = this.spec(), T = makeBody(S, poses, variant, pre);
    const parts = [{ geo: T.geo, mat: ['main', 'main'], cast: true }];
    const top = S.hsp.y - S.neckFront, bottom = T.hemY + 0.012;
    // placket, its two stitch lines and the buttons
    parts.push({ geo: T.patch(1, 0, (top + bottom) / 2, 0.034, top - bottom, 4, 44, 0.0026), mat: 'main', cast: false });
    [-0.0155, 0.0155].forEach(x => parts.push({ geo: clothLine(T, 1, Array.from({ length: 31 }, (_, i) => [x, lerp(top - 0.004, bottom, i / 30)]), 0.001, 0.0034, 0.62), mat: 'main', cast: false }));
    const btn = new THREE.CylinderGeometry(0.0056, 0.0056, 0.0026, 18); btn.rotateX(Math.PI / 2);
    const spots = [];
    for (let i = 0; i < 7; i++) { const y = top - 0.05 - i * 0.094; spots.push({ a: T.pointAt(0, 1, 0, y, 0.0048), b: T.pointAt(1, 1, 0, y, 0.0048) }); }
    parts.push({ geo: rigidTwoPose(btn, spots), mat: 'button', cast: false });
    // back yoke seam and the shoulder seams it runs into
    parts.push({ geo: clothLine(T, -1, hline(-0.2, 0.2, S.shoulder.y - 0.075, 20), 0.001, 0.0008, 0.66), mat: 'main', cast: false });
    // collar: one band of cloth that stands up round the neck and folds over into two pointed leaves
    const collar = pose => {
      const loop = T.neckLoop(pose), N = loop.length, cf = S.neckCols;
      let cx = 0, cz = 0; loop.forEach(p => { cx += p[0]; cz += p[2]; }); cx /= N; cz /= N;
      return gridGeo(N + 1, 7, (a, b, out, i, j) => {
        const pt = loop[(cf + i) % N], d = Math.min(a, 1 - a) * 2, fr = 1 - smooth(0.02, 0.42, d), sx = a < 0.5 ? 1 : -1;
        const rl = Math.hypot(pt[0] - cx, pt[2] - cz) || 1e-4, ox = (pt[0] - cx) / rl, oz = (pt[2] - cz) / rl;
        const tip = Math.pow(fr, 2.2);                    // the leaf sharpens to a point right at the front
        const hs = lerp(0.032, 0.027, fr), ll = lerp(0.042, 0.094, tip);
        const row = [[-0.004, 0.0005, 0], [hs * 0.6, -0.001, 0], [hs, -0.002, 0], [hs + 0.003, 0.007, 0.1], [hs + 0.003 - ll * 0.5, 0.012 + 0.003 * fr, 0.55], [hs + 0.003 - ll, 0.016 + 0.008 * fr, 1], [hs + 0.003 - ll + 0.01, 0.004, 0.85]][j];
        const gapX = sx * 0.004 * (1 - smooth(0, 0.05, d));
        out.p[0] = pt[0] + ox * row[1] + sx * 0.04 * tip * row[2] + gapX;
        out.p[1] = pt[1] + row[0];
        out.p[2] = pt[2] + oz * row[1] + 0.003 * fr * row[2];
        out.uv[0] = a * 0.5; out.uv[1] = j * 0.02;
      });
    };
    const c0 = collar(0), c1 = collar(1);
    {
      c0.computeVertexNormals();
      const k = 4 * (c0.attributes.position.count / 7) + 2, nz = c0.attributes.normal.getZ(k);
      if (nz < 0) { flipIndex(c0); flipIndex(c1); }
    }
    const cg = twoPose(c0, c1), cc = cg.attributes.color.array, per = cg.attributes.position.count / 7;
    for (let k = 0; k < per; k++) { const u = (6 * per + k) * 3, e = (5 * per + k) * 3; cc[u] = cc[u + 1] = cc[u + 2] = 0.42; cc[e] = cc[e + 1] = cc[e + 2] = 0.86; }
    parts.push({ geo: cg, mat: 'main', cast: true });
    // chest pocket: a patch with a stitched outline
    const kx = 0.108, ky = -0.325, kw = 0.108, kh = 0.122;
    parts.push({ geo: T.patch(1, kx, ky, kw, kh, 10, 12, 0.0024, (dx, dy) => dy > -kh / 2 + 0.02 || Math.abs(dx) < (dy + kh / 2 + 0.004) * 2.6), mat: 'main', cast: false });
    parts.push({ geo: clothLine(T, 1, hline(kx - kw / 2, kx + kw / 2, ky + kh / 2 - 0.012, 8), 0.001, 0.0034, 0.6), mat: 'main', cast: false });
    parts.push({ geo: clothLine(T, 1, [[kx - kw / 2, ky + kh / 2], [kx - kw / 2, ky - kh / 2 + 0.02], [kx, ky - kh / 2], [kx + kw / 2, ky - kh / 2 + 0.02], [kx + kw / 2, ky + kh / 2]], 0.0011, 0.0032, 0.56), mat: 'main', cast: false });
    return {
      parts, patch: T.patch, hanger: 'std', hangerLine: hangerLineFor(S),
      size: { w: 0.66, d: 0.19, top: -0.06, bottom: T.hemY - 0.03 },
      prints: { chest: { side: 1, x: kx, y: ky - 0.004, w: 0.075 }, center: { side: -1, x: 0, y: -0.3, w: 0.2 }, back: { side: -1, x: 0, y: -0.3, w: 0.2 } },
      defaultPrint: 'chest'
    };
  }
};

TYPES.scarf = {
  label: 'Scarf', fabric: 'wool',
  build(variant) {
    // a wide wool scarf folded once along its length and hung over the hanger's bar, so both legs fall full and thick
    const nz = (variant % 61) * 1.9;
    const yBar = -0.2, rb = 0.03, Lf = 0.62, Lb = 0.7, arc = Math.PI * rb, L = Lf + arc + Lb, halfW0 = 0.15;
    function profile(u) {
      const d = u * L;
      if (d < Lf) return { y: yBar - (Lf - d), z: rb, ny: 0, nz: 1 };
      if (d < Lf + arc) { const t = (d - Lf) / rb; return { y: yBar + Math.sin(t) * rb, z: Math.cos(t) * rb, ny: Math.sin(t), nz: Math.cos(t) }; }
      return { y: yBar - (d - Lf - arc), z: -rb, ny: 0, nz: -1 };
    }
    function point(u, ph) {
      const pr = profile(u), c = Math.cos(ph), s = Math.sin(ph);
      const ss = Math.sign(s) * Math.pow(Math.abs(s), 0.45);
      const d = u * L, toBar = Math.min(Math.abs(d - Lf), Math.abs(d - Lf - arc)) + (d > Lf && d < Lf + arc ? -1 : 0);
      const near = 1 - smooth(0, 0.34, Math.max(0, toBar));
      const gather = lerp(1, 0.76, near);
      // soft lengthwise pleats, deepest where the scarf bunches over the bar
      const onBar = d > Lf && d < Lf + arc ? 1 : 1 - smooth(0, 0.05, Math.max(0, toBar));
      const pleat = (lerp(0.012, 0.022, near) * Math.sin(c * 4.4 + nz) * (0.6 + 0.4 * Math.sin(c * 9.1 + nz * 2 + u * 2)) + 0.004 * fbm(c * 3 + u * 9, u * 14, nz, 3)) * (1 - 0.85 * onBar);
      const th = 0.019 * ss * (0.8 + 0.3 * c) + pleat;          // the folded edge is plump, the open edge lies thinner
      const sway = 0.01 * Math.sin(u * 5 + nz) * smooth(0.15, 0.6, Math.abs(d - Lf - arc / 2));
      const back = smooth(Lf + arc, Lf + arc + 0.12, d) * 0.03;  // the back leg hangs a little to one side, so it shows
      return [halfW0 * gather * c + sway + back, pr.y + pr.ny * th, pr.z + pr.nz * th];
    }
    const g = gridGeo(48, 96, (a, b, out) => { const q = point(b, a * TAU); out.p[0] = q[0]; out.p[1] = q[1]; out.p[2] = q[2]; out.uv[0] = a * 0.62; out.uv[1] = b * L; }, { closeU: true });
    faceOutward(g); whiteColors(g); shadeCreases(g, 26);
    const parts = [{ geo: g, mat: 'main', cast: true }];
    const fr = [], R = rng(variant + 5);
    [0, 1].forEach(endU => {
      for (let i = 0; i < 34; i++) {
        const c = lerp(-0.97, 0.97, i / 33), ph = Math.acos(c), a0 = point(endU, endU ? TAU - ph : ph);
        const len = 0.058 + R() * 0.014, dx = (R() - 0.5) * 0.008, dz = (R() - 0.5) * 0.008;
        fr.push(sweep([[a0[0], a0[1] + 0.006, a0[2]], [a0[0] + dx * 0.4, a0[1] - len * 0.5, a0[2] + dz * 0.5], [a0[0] + dx, a0[1] - len, a0[2] + dz]], false, () => ({ a: 0.0021, b: 0.0021 }), 5));
      }
    });
    const fg = mergeGeos(fr); faceOutward(fg); whiteColors(fg);
    parts.push({ geo: fg, mat: 'main', cast: true });
    const patch = (side, x0, y0, w, h, nx, ny, lift) => {
      const pg = gridGeo(nx, ny, (a, b, out) => {
        const x = x0 + (a - 0.5) * w, y = y0 + (b - 0.5) * h;
        const u = clamp((y - (yBar - Lf)) / L, 0, Lf / L), q = point(u, Math.acos(clamp(x / halfW0, -1, 1)));
        out.p[0] = x; out.p[1] = y; out.p[2] = q[2] + lift + 0.003; out.uv[0] = a; out.uv[1] = b;
      });
      pg.computeVertexNormals(); return pg;
    };
    return {
      parts, patch, hanger: 'scarf',
      size: { w: 0.42, d: 0.15, top: -0.1, bottom: yBar - Lb - 0.06 },
      prints: { chest: { side: 1, x: 0, y: -0.71, w: 0.11 }, center: { side: 1, x: 0, y: -0.66, w: 0.18 }, back: { side: 1, x: 0, y: -0.66, w: 0.18 } },
      defaultPrint: 'chest'
    };
  }
};

TYPES.beanie = {
  label: 'Beanie', fabric: 'ribChunky',
  build(variant) {
    // a cuffed rib beanie, held flat by the two clips of a bar hanger
    const nz = (variant % 53) * 2.3;
    const topY = -0.215, H = 0.235, hw = 0.116, hd = 0.03, cuffH = 0.082, y0 = topY - H;
    const prof = h => {                       // width from brim (0) to crown (1): straight sides, a rounded square crown
      if (h < 0.52) return 1;
      const t = (h - 0.52) / 0.48; return Math.pow(Math.max(0, 1 - Math.pow(t, 2.9)), 0.42);
    };
    const shell = (r, hA, hB, rows, cuff) => {
      const g = gridGeo(64, rows, (a, b, out) => {
        const h = lerp(hA, hB, b), ph = a * TAU, c = Math.cos(ph), s = Math.sin(ph);
        let k = prof(h) * r;
        if (cuff) k *= 1 + 0.012 * Math.sin(b * Math.PI) - 0.03 * smooth(0.8, 1, b) - 0.05 * Math.pow(1 - smooth(0, 0.22, b), 2);
        k *= 1 + 0.01 * fbm(c * 2 + h * 3, s * 2, nz, 2);
        const flat = 0.72;                    // a pressed, slightly squared section rather than a round bell
        out.p[0] = hw * k * Math.sign(c) * Math.pow(Math.abs(c), flat); out.p[2] = hd * k * (0.55 + 0.45 * prof(h)) * Math.sign(s) * Math.pow(Math.abs(s), flat); out.p[1] = y0 + H * h + (cuff ? 0 : 0) - 0.007 * (1 - Math.pow(Math.abs(c), 3)) * (1 - smooth(0, 0.5, h));
        out.uv[0] = a * 0.6; out.uv[1] = h * H;
      }, { closeU: true });
      faceOutward(g); whiteColors(g); return g;
    };
    const parts = [{ geo: shell(1, 0.03, 1, 36), mat: 'main', cast: true }, { geo: shell(1.07, 0, cuffH / H, 10, true), mat: 'main', cast: true }];
    const patch = (side, x0, y0p, w, h, nx, ny, lift) => {
      const pg = gridGeo(nx, ny, (a, b, out) => {
        const x = x0 + (a - 0.5) * w, k = clamp(x / (hw * 1.07), -0.98, 0.98);
        const cc = Math.pow(Math.abs(k), 1 / 0.72);
        out.p[0] = x; out.p[1] = y0p + (b - 0.5) * h; out.p[2] = hd * 1.085 * Math.pow(1 - cc * cc, 0.36) + lift; out.uv[0] = a; out.uv[1] = b;
      });
      pg.computeVertexNormals(); return pg;
    };
    const py = y0 + cuffH * 0.5;
    return {
      parts, patch, hanger: 'clip', clips: { y: topY + 0.004, x: 0.055 },
      size: { w: 0.3, d: 0.12, top: -0.1, bottom: y0 },
      prints: { chest: { side: 1, x: 0, y: py, w: 0.07 }, center: { side: 1, x: 0, y: py, w: 0.07 }, back: { side: 1, x: 0, y: py, w: 0.07 } },
      defaultPrint: 'chest'
    };
  }
};

// blueprints are settled once and shared by every piece of that cut
const blueprints = {}, settled = {};
const cutVariant = type => type.length * 31 + 7;
function blueprint(type) {
  if (!blueprints[type]) blueprints[type] = TYPES[type].build(cutVariant(type), settled[type]);
  return blueprints[type];
}
// settle every cut that has a pattern, off the main thread where the browser allows it
function prepareCuts(types, onProgress) {
  const jobs = types.filter(t => TYPES[t].spec && !settled[t] && !blueprints[t]);
  if (!jobs.length) return Promise.resolve();
  let url = null;
  try { url = URL.createObjectURL(new Blob([WORKER_SRC], { type: 'text/javascript' })); } catch (e) { url = null; }
  let done = 0;
  const one = type => new Promise(res => {
    const sp = TYPES[type].spec();
    const local = () => { settled[type] = settleBody(sp.S, sp.poses, cutVariant(type)); done++; if (onProgress) onProgress(done, jobs.length); res(); };
    if (!url || typeof Worker === 'undefined') { setTimeout(local, 0); return; }
    let w;
    try { w = new Worker(url); } catch (e) { setTimeout(local, 0); return; }
    w.onmessage = ev => { settled[type] = ev.data; w.terminate(); done++; if (onProgress) onProgress(done, jobs.length); res(); };
    w.onerror = () => { w.terminate(); local(); };
    w.postMessage({ S: sp.S, poses: sp.poses, variant: cutVariant(type) });
  });
  return Promise.all(jobs.map(one)).then(() => { if (url) URL.revokeObjectURL(url); });
}

// ---------- a piece on the rack ----------
let pieceSeed = 1;
function createPiece(def) {
  const bp = blueprint(def.type), fab = TYPES[def.type].fabric;
  const seed = def.seed || (pieceSeed++ * 7919 + 13);
  const main = fabricMaterial(fab, '#ffffff', fab === 'oxford' ? { roughness: 0.86, sheen: 0.25, bump: 0.3 } : fab === 'wool' ? { bump: 0.45, sheen: 0.8 } : fab === 'ribChunky' ? { bump: 0.6, sheen: 0.7 } : {});
  const rib = fabricMaterial('rib', '#ffffff', { bump: 0.8 });
  const btn = new THREE.MeshPhysicalMaterial({ color: 0xf2efe6, roughness: 0.3, clearcoat: 0.6, envMapIntensity: 0.9 });
  const label = new THREE.MeshStandardMaterial({ map: labelTexture(), roughness: 0.9, side: THREE.DoubleSide });
  const mats = { main, rib, button: btn, label, steel: Mats.steel };
  const dark = luma(def.color) < 0.2;
  const hg = makeHanger(bp.hanger, def.type === 'tee' && dark, bp.hangerLine, bp.clips);
  const root = new THREE.Group(), body = new THREE.Group(), hookG = hg.hook;
  body.add(hg.group); root.add(hookG); root.add(body);
  const morph = [];
  bp.parts.forEach(pt => {
    const m = new THREE.Mesh(pt.geo, Array.isArray(pt.mat) ? pt.mat.map(k => mats[k]) : mats[pt.mat]);
    m.castShadow = !!pt.cast; m.receiveShadow = true;
    if (pt.geo.morphAttributes.position) morph.push(m);
    body.add(m);
  });
  // logo print: a square patch that follows the cloth; the logo is drawn "contain" into a square texture
  const decalMat = new THREE.MeshStandardMaterial({ transparent: true, roughness: 0.78, metalness: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6, envMapIntensity: 0.3 });
  let decal = null;
  const sz = bp.size, hH = sz.top - sz.bottom + 0.1;
  const hit = new THREE.Mesh(new THREE.BoxGeometry(sz.w, hH, sz.d), Mats.hit);
  hit.position.set(0, (sz.top + sz.bottom) / 2 + 0.04, 0); body.add(hit);

  const piece = {
    id: def.id, type: def.type, name: def.name, color: def.color, colorName: def.colorName,
    root, body, hook: hookG, hit, bp, decalMat, size: sz, placement: def.placement || bp.defaultPrint,
    x: { x: 0, v: 0 }, yaw: { x: 0, v: 0 }, swing: { x: 0, v: 0 }, tilt: { x: 0, v: 0 }, drop: { x: 0, v: 0 },
    open: 0, focus: 0, phase: (seed % 100) / 100 * TAU, morphT: 0, layer: 0
  };
  hit.userData.piece = piece;
  piece.setColor = (hex, name) => {
    piece.color = hex; if (name !== undefined) piece.colorName = name;
    tintFabric(main, hex); tintFabric(rib, hex, 0.94);
    btn.color.set(luma(hex) < 0.25 ? 0x2a2a2c : 0xf2efe6);
  };
  piece.setPlacement = name => {
    piece.placement = bp.prints[name] ? name : bp.defaultPrint;
    const pr = bp.prints[piece.placement];
    if (decal) { body.remove(decal); decal.geometry.dispose(); }
    decal = new THREE.Mesh(bp.patch(pr.side, pr.x, pr.y, pr.w, pr.w, 18, 18, 0.0016, null, true), decalMat);
    decal.renderOrder = 2; decal.visible = !!decalMat.map; decal.layers.set(piece.layer);
    if (decal.morphTargetInfluences) decal.morphTargetInfluences[0] = piece.morphT;
    body.add(decal);
  };
  piece.setLogo = tex => { decalMat.map = tex; decalMat.needsUpdate = true; if (decal) decal.visible = !!tex; };
  piece.setMorph = t => {
    if (Math.abs(t - piece.morphT) < 1e-4) return;
    piece.morphT = t;
    for (const m of morph) m.morphTargetInfluences[0] = t;
    if (decal && decal.morphTargetInfluences) decal.morphTargetInfluences[0] = t;
  };
  piece.dispose = () => { if (decal) decal.geometry.dispose(); main.dispose(); rib.dispose(); btn.dispose(); label.dispose(); decalMat.dispose(); };
  piece.setColor(def.color);
  piece.setPlacement(piece.placement);
  return piece;
}

// ---- 30-rack.js ----
// ---------- the rack: scene, layout, motion ----------
const SIDE_YAW = Math.PI / 2;            // how far a hanging piece is turned away from the viewer
const RAIL_HALF = 1.12, HANG_HALF = 0.98, RAIL_R = 0.016, SHADOW_Z = -0.36;
const FOV = 13;

// painted reflections for the metal: a view-based "matcap" keeps the rail and both brackets lit identically
function matcapTexture(stops, band) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 0, 128);
  stops.forEach(st => g.addColorStop(st[0], st[1]));
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  if (band) { const r = x.createRadialGradient(64, 40, 4, 64, 40, 70); r.addColorStop(0, 'rgba(255,255,255,.55)'); r.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = r; x.fillRect(0, 0, 128, 128); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function softBlobTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 6, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.45, 'rgba(255,255,255,.62)'); g.addColorStop(0.75, 'rgba(255,255,255,.18)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function createRack(stage) {
  const glCanvas = stage.querySelector('#gl'), bgCanvas = stage.querySelector('#rackblur');
  const bg2d = bgCanvas.getContext('2d');
  const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setClearColor(0x000000, 0);

  // a phone may take the graphics context away from a page left in the background. What is on the rail is already kept
  // in this browser, so say what happened and let a reload redraw it.
  glCanvas.addEventListener('webglcontextlost', () => { const h = document.getElementById('hint'); if (h) { h.textContent = 'The rail lost its picture. Reload the page to bring it back.'; h.classList.add('stay'); } });

  const scene = new THREE.Scene();
  const env = makeStudioEnv(renderer);
  scene.environment = env;
  initFabricNormals();
  initSharedMaterials();

  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 40);
  const view = { D: 8, camY: -0.44, pan: 0, panMax: 0, w: 1, h: 1, dpr: 1, lift: { x: 0, v: 0 }, liftT: 0 };

  // light: a soft key from the upper left, a cool fill, and the studio environment
  const hemi = new THREE.HemisphereLight(0xffffff, 0xb9b5ac, 0.6);
  const key = new THREE.DirectionalLight(0xfffaf2, 2.15);
  key.position.set(-1.6, 2.2, 4.4);
  const fill = new THREE.DirectionalLight(0xeef2ff, 0.38); fill.position.set(2.6, 0.2, 2.4);
  [hemi, key, fill].forEach(l => { l.layers.enableAll(); scene.add(l); });
  scene.add(key.target);

  // shadows on the wall are painted: a soft pool behind each piece and a line under the rail
  const blobTex = softBlobTexture();
  const blobGeo = new THREE.PlaneGeometry(1, 1);
  const makeBlob = () => new THREE.Mesh(blobGeo, new THREE.MeshBasicMaterial({ map: blobTex, color: 0x14161b, transparent: true, opacity: 0, depthWrite: false }));
  const railShadow = makeBlob();
  railShadow.scale.set(RAIL_HALF * 2 + 0.3, 0.11, 1); railShadow.position.set(0.01, -0.05, SHADOW_Z); railShadow.material.opacity = 0.16; railShadow.renderOrder = -2;
  scene.add(railShadow);

  // rail + wall brackets
  const chromeCap = matcapTexture([[0, '#ffffff'], [0.3, '#f4f5f6'], [0.47, '#b9bcbf'], [0.52, '#3a3c40'], [0.6, '#56595d'], [0.68, '#c9ccce'], [0.86, '#e9eaeb'], [1, '#8f9296']]);
  const steelCap = matcapTexture([[0, '#f6f6f6'], [0.45, '#d9dadb'], [0.75, '#b4b6b9'], [1, '#8b8e92']], true);
  const railMat = new THREE.MeshMatcapMaterial({ matcap: chromeCap, vertexColors: true });
  const chromeMat = new THREE.MeshMatcapMaterial({ matcap: chromeCap });
  const steelMat = new THREE.MeshMatcapMaterial({ matcap: steelCap });
  const railG = new THREE.Group(); scene.add(railG);
  const railGeo = new THREE.CylinderGeometry(RAIL_R, RAIL_R, RAIL_HALF * 2, 32, 96);
  {
    // a long dark reflection runs along part of the tube, as it does on real chrome under a studio flag
    const P = railGeo.attributes.position, col = new Float32Array(P.count * 3);
    for (let i = 0; i < P.count; i++) {
      const u = P.getY(i) / RAIL_HALF;          // -1..1 along the rail (the cylinder's own axis before it is turned)
      const dark = smooth(-0.42, -0.2, u) * (1 - smooth(0.28, 0.62, u));
      const v = 1 - 0.7 * dark + 0.05 * Math.sin(u * 9);
      col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = v;
    }
    railGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  }
  const rail = new THREE.Mesh(railGeo, railMat);
  rail.rotation.z = Math.PI / 2; railG.add(rail);
  [1, -1].forEach(sx => {
    const b = new THREE.Group(); b.position.set(sx * (RAIL_HALF + 0.006), 0, 0);
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.066, 0.132, 0.008), steelMat);
    plate.position.set(sx * 0.012, 0, -0.03); b.add(plate);
    const sock = new THREE.Mesh(new THREE.CylinderGeometry(RAIL_R * 1.42, RAIL_R * 1.42, 0.056, 32), chromeMat);
    sock.rotation.z = Math.PI / 2; sock.position.x = sx * 0.004; b.add(sock);
    const lip = new THREE.Mesh(new THREE.CylinderGeometry(RAIL_R * 1.62, RAIL_R * 1.62, 0.009, 32), chromeMat);
    lip.rotation.z = Math.PI / 2; lip.position.x = -sx * 0.026; b.add(lip);
    [0.048, -0.048].forEach(y => {
      const head = new THREE.Mesh(new THREE.CylinderGeometry(0.0068, 0.0068, 0.004, 18), chromeMat);
      head.rotation.x = Math.PI / 2; head.position.set(sx * 0.012, y, -0.024); b.add(head);
      const slot = new THREE.Mesh(new THREE.BoxGeometry(0.011, 0.0016, 0.001), new THREE.MeshBasicMaterial({ color: 0x4a4d52 }));
      slot.position.set(sx * 0.012, y, -0.0215); slot.rotation.z = 0.5; b.add(slot);
    });
    const ps = makeBlob(); ps.scale.set(0.14, 0.2, 1); ps.position.set(sx * 0.016, -0.012, -0.036); ps.material.opacity = 0.2; ps.renderOrder = -2; b.add(ps);
    railG.add(b);
  });

  const pieces = [];        // order along the rail
  const leaving = [];       // pieces falling away to storage
  const st = {
    hover: null, focus: null, drag: null, mode: 'rack',      // rack | detail
    focusAmt: 0, focusT: 0, detailYaw: { x: 0, v: 0 }, detailYawT: 0,
    time: 0, pointer: { x: -1, y: -1, wx: 0, wy: 0, inside: false, vx: 0 }, lastWx: 0,
    listeners: {}
  };
  const emit = (name, arg) => (st.listeners[name] || []).forEach(f => f(arg));
  const on = (name, f) => { (st.listeners[name] = st.listeners[name] || []).push(f); };

  // ----- camera fit -----
  function resize() {
    const r = stage.getBoundingClientRect();
    const w = Math.max(2, Math.round(r.width)), h = Math.max(2, Math.round(r.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    view.w = w; view.h = h; view.dpr = dpr;
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false);
    bgCanvas.width = Math.round(w * dpr); bgCanvas.height = Math.round(h * dpr);
    camera.aspect = w / h;
    const t = Math.tan(FOV * Math.PI / 360);
    // the rail takes about three quarters of the width; a garment fills a little under half the height
    const needW = RAIL_HALF * 2 / 0.75, needH = 1.66;
    const Dh = needH / 2 / t, Dw = needW / 2 / t / camera.aspect;
    view.D0 = Math.min(Math.max(Dh, Dw), Dh * 1.3);
    view.needW = needW;
    camera.updateProjectionMatrix();
    placeCamera();
  }
  // view.lift (0..1) makes room below the rail for the storage drawer by stepping back and looking lower
  function placeCamera() {
    const t = Math.tan(FOV * Math.PI / 360), k = 1 + view.lift.x * 0.72;
    view.D = view.D0 * k;
    const visH = 2 * view.D * t, visW = visH * camera.aspect;
    view.panMax = Math.max(0, (view.needW - visW) / 2);
    view.pan = clamp(view.pan, -view.panMax, view.panMax);
    view.camY = -(0.5 - lerp(0.25, 0.16, view.lift.x)) * visH;
    camera.position.set(view.pan, view.camY, view.D);
    camera.lookAt(view.pan, view.camY, 0);
  }

  // ----- layout along the rail -----
  // At rest the pieces hang shoulder to shoulder. When one turns to face, its nearest neighbours are shoved aside
  // and the push dies away along the rail, so the far pieces stay where they were.
  const sideNeed = p => p.size.d + 0.03, frontNeed = p => p.size.w + 0.03;
  const FALLOFF = [1, 0.56, 0.28, 0.12, 0.04], MIN_GAP = 0.05;
  function layout() {
    const list = pieces.filter(p => !p.lifted);
    const n = list.length; if (!n) return;
    const open = st.drag && !st.drag.lifted ? st.drag.piece : (st.mode === 'rack' ? st.hover : null);
    const total = list.reduce((s, p) => s + sideNeed(p), 0);
    const k0 = Math.min(HANG_HALF * 2 / total, 1.12);
    let c = -total * k0 / 2;
    const closed = list.map(p => { const w = sideNeed(p) * k0; const x = c + w / 2; c += w; return x; });
    list.forEach((p, i) => { p.tx = closed[i]; p.need = sideNeed(p) * k0; });
    const o = open ? list.indexOf(open) : -1;
    if (o < 0) return;
    const fn = frontNeed(open), lim = HANG_HALF + 0.07;
    const solve = xo => {
      const out = [0, 0];
      [-1, 1].forEach((sd, si) => {
        const ids = []; for (let i = o + sd; i >= 0 && i < n; i += sd) ids.push(i);
        if (!ids.length) return;
        const u = ids.map(i => sd * (closed[i] - xo));
        const req = fn / 2 + list[ids[0]].size.d * 0.3;
        const push = Math.max(0, req - u[0]);
        const v = u.map((d, k) => d + push * (FALLOFF[k] || 0));
        for (let k = 1; k < v.length; k++) v[k] = Math.max(v[k], v[k - 1] + MIN_GAP);
        const cap = lim - sd * xo;             // outward room to the end of the rail
        if (v[v.length - 1] > cap) { v[v.length - 1] = cap; for (let k = v.length - 2; k >= 0; k--) v[k] = Math.min(v[k], v[k + 1] - MIN_GAP); }
        out[si] = Math.max(0, req - v[0]);
        ids.forEach((i, k) => { list[i].tx = xo + sd * v[k]; });
      });
      return out;
    };
    let xo = st.drag ? clamp(st.drag.x, -lim, lim) : closed[o];
    const lack = solve(xo);
    if (lack[0] || lack[1]) { xo += lack[0] - lack[1]; solve(xo); }
    open.tx = xo; open.need = fn;
  }

  // ----- pointer -> world -----
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), hitV = new THREE.Vector3();
  function pointerWorld(px, py) {
    ndc.set(px / view.w * 2 - 1, -(py / view.h) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    ray.ray.intersectPlane(plane, hitV);
    return hitV;
  }
  function project(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(camera);
    return { x: (v.x * 0.5 + 0.5) * view.w, y: (-v.y * 0.5 + 0.5) * view.h };
  }
  function pick(px, py) {
    if (!pieces.length) return null;
    const w = pointerWorld(px, py);
    st.pointer.wx = w.x; st.pointer.wy = w.y;
    if (w.y > 0.09 || w.y < -1.04) return null;
    const cur = st.hover;
    if (cur && !cur.lifted && Math.abs(w.x - cur.tx) < cur.need / 2 && w.y > cur.size.bottom - 0.12) return cur;
    let best = null, bd = 1e9;
    for (const p of pieces) {
      if (p.lifted) continue;
      const d = Math.abs(w.x - p.tx) - p.need / 2;
      if (d < bd) { bd = d; best = p; }
    }
    if (bd > 0.04) return null;
    if (best && w.y < best.size.bottom - 0.1) return null;
    return best;
  }
  function setHover(p) {
    if (st.hover === p) return;
    st.hover = p;
    if (p) { p.tilt.v += 0.55; }
    emit('hover', p);
  }

  // ----- add / remove -----
  function hang(def, index, opts) {
    const p = createPiece(def);
    p.def = def;
    p.tx = 0; p.need = sideNeed(p);
    if (index == null || index > pieces.length) index = pieces.length;
    pieces.splice(index, 0, p);
    scene.add(p.root);
    p.shadow = makeBlob(); p.shadow.renderOrder = -1; scene.add(p.shadow);
    layout();
    p.x.x = opts && opts.fromX != null ? opts.fromX : p.tx;
    p.yaw.x = SIDE_YAW;
    if (!opts || !opts.instant) { p.drop.x = 1.7; p.swing.v = (Math.random() - 0.5) * 1.2; p.wait = (opts && opts.delay) || 0; }
    emit('change');
    return p;
  }
  function store(p) {
    const i = pieces.indexOf(p); if (i < 0) return;
    pieces.splice(i, 1);
    if (st.hover === p) setHover(null);
    if (st.focus === p) { st.focus = null; }
    p.leavingT = 0; leaving.push(p);
    layout(); emit('change');
  }
  function clearAll() {
    pieces.concat(leaving).forEach(p => { scene.remove(p.root); scene.remove(p.shadow); p.shadow.material.dispose(); p.dispose(); });
    pieces.length = 0; leaving.length = 0; st.hover = null; st.focus = null;
  }

  // ----- detail -----
  function openDetail(p) {
    if (!p) return;
    st.mode = 'detail'; st.prevFocus = st.focus && st.focus !== p ? st.focus : null;
    st.focus = p; p.slide = p.slide || 0;
    st.detailYaw.x = 0; st.detailYaw.v = 0; st.detailYawT = 0;
    setHover(null); layout();
    emit('detail', p);
  }
  function stepDetail(dir) {
    if (st.mode !== 'detail' || pieces.length < 2) return;
    const i = pieces.indexOf(st.focus), nx = pieces[(i + dir + pieces.length) % pieces.length];
    const old = st.focus;
    old.exitDir = -dir; old.exiting = true;
    nx.slide = dir * 1.0; nx.exiting = false; nx.focus = Math.max(nx.focus, 0.999); nx.enter = true;
    st.focus = nx; st.detailYaw.x = 0; st.detailYaw.v = 0; st.detailYawT = 0;
    emit('detail', nx);
  }
  function closeDetail() {
    if (st.mode !== 'detail') return;
    st.mode = 'rack';
    // unwind any spin to the nearest front-facing turn
    st.detailYawT = Math.round(st.detailYaw.x / TAU) * TAU;
    // the piece turns side-on on its way back, so it lands on the rail in one move
    if (st.focus) { st.focus.yaw.x = SIDE_YAW; st.focus.yaw.v = 0; st.focus.x.x = st.focus.tx; st.focus.x.v = 0; }
    layout(); emit('detail', null);
  }

  // ----- frame -----
  const FOCUS_IN = 1 / 0.46, FOCUS_OUT = 1 / 0.42;
  function step(dt) {
    st.time += dt;
    layout();
    const inDetail = st.mode === 'detail';
    st.focusAmt += clamp((inDetail ? 1 : 0) - st.focusAmt, -dt * FOCUS_OUT, dt * FOCUS_IN);
    springStep(st.detailYaw, st.detailYawT, 60, 13, dt);
    const tHalf = Math.tan(FOV * Math.PI / 360);

    for (const p of pieces) {
      const isOpen = (st.mode === 'rack' && st.hover === p) || (st.drag && st.drag.piece === p);
      const dragging = st.drag && st.drag.piece === p;
      // slide along the rail
      const prevV = p.x.v;
      if (dragging) { const nx = st.drag.x; p.x.v = (nx - p.x.x) / Math.max(dt, 1e-3); p.x.x = nx; }
      else springStep(p.x, p.tx, isOpen ? 110 : 64, isOpen ? 19 : 14.5, dt);
      const ax = (p.x.v - prevV) / Math.max(dt, 1e-3);
      // turn to face / turn away
      springStep(p.yaw, isOpen ? 0 : SIDE_YAW, isOpen ? 34 : 30, isOpen ? 8.6 : 7.8, dt);
      p.open = clamp(1 - Math.abs(p.yaw.x) / SIDE_YAW, 0, 1);
      // pendulum about the rail, pushed by acceleration along it
      p.swing.v += (-70 * p.swing.x - 6.2 * p.swing.v + clamp(ax, -40, 40) * 0.42) * dt; p.swing.x += p.swing.v * dt;
      p.swing.x = clamp(p.swing.x, -0.5, 0.5);
      springStep(p.tilt, 0, 90, 7.5, dt);
      // dropping onto the rail
      const dropT = dragging && st.drag.lifted ? st.drag.y : 0;
      if (dragging && st.drag.lifted) { p.drop.x = dropT; p.drop.v = 0; }
      else if (p.wait > 0) { p.wait -= dt; p.drop.x = 1.7; p.drop.v = 0; }       // waiting above the frame for its turn to drop in
      else springStep(p.drop, 0, 170, 15, dt);

      // focus pose
      const want = (inDetail && st.focus === p && !p.exiting) ? 1 : 0;
      p.focus += clamp(want - p.focus, -dt * FOCUS_OUT, dt * FOCUS_IN);
      if (p.exiting) {       // carousel: leave sideways while still in the focus layer
        p.slide = (p.slide || 0) + p.exitDir * dt * 3.2;
        if (Math.abs(p.slide) > 1.15) { p.exiting = false; p.focus = 0; p.slide = 0; p.x.x = p.tx; p.yaw.x = SIDE_YAW; p.yaw.v = 0; }
        else p.focus = Math.max(p.focus, 0.999);
      } else if (p.slide) {
        p.slide += clamp(0 - p.slide, -dt * 3.2, dt * 3.2);
      }
      const e = easeInOut(clamp(p.focus, 0, 1));
      const idle = 0.0045 * Math.sin(st.time * 0.8 + p.phase) + 0.002 * Math.sin(st.time * 1.7 + p.phase * 2);
      const cy = (p.size.top + p.size.bottom) / 2 + 0.05, ph = p.size.top - p.size.bottom + 0.2;
      const fitH = view.h < 620 ? 0.5 : 0.66, fitW = view.w < 700 ? 0.84 : 0.5;
      const dist = clamp(Math.max(ph / fitH, (p.size.w + 0.06) / fitW / camera.aspect) / (2 * tHalf), view.D * 0.34, view.D);
      const fz = view.D - dist;
      const visHf = 2 * dist * tHalf, visWf = visHf * camera.aspect;
      const fx = view.pan + (p.slide || 0) * visWf * 0.9;
      const fy = view.camY + visHf * 0.095 - cy;
      // a piece lifted off the rail comes a little toward the viewer, so it passes in front of its neighbours and not through them
      p.fwd = (p.fwd || 0) + ((dragging && st.drag.lifted ? 0.46 : 0) - (p.fwd || 0)) * Math.min(1, dt * 14);
      p.root.position.set(lerp(p.x.x, fx, e), lerp(p.drop.x, fy, e), lerp(p.fwd, fz, e));
      p.root.rotation.z = (p.swing.x + idle) * (1 - e);
      p.root.rotation.x = p.tilt.x * 0.06 * (1 - e);
      const yawNow = lerp(p.yaw.x, st.focus === p ? st.detailYaw.x : 0, e);
      p.body.rotation.y = yawNow;
      p.hook.rotation.y = lerp(Math.PI / 2, yawNow, e);
      p.setMorph(Math.max(p.open, e));
      if (p.dbg) { p.body.rotation.y = p.dbg.yaw; p.setMorph(p.dbg.morph); }
      // painted wall shadow: narrow behind a side-on piece, a wider soft halo when it faces
      {
        const sh = p.shadow, o = p.open, hgt = p.size.top - p.size.bottom;
        sh.scale.set(lerp(p.size.d * 1.25 + 0.16, p.size.w * 1.02 + 0.2, o), hgt * 1.12 + 0.16, 1);
        sh.position.set(p.x.x + 0.035, (p.size.top + p.size.bottom) / 2 - 0.045 + p.drop.x, SHADOW_Z);
        sh.material.opacity = lerp(0.2, 0.17, o) * (1 - e) * clamp(1 - Math.abs(p.drop.x) * 2.2, 0, 1);
      }
      const layer = p.focus > 0.001 ? 1 : 0;
      if (p.layer !== layer) { p.layer = layer; p.root.traverse(o => o.layers.set(layer)); }
    }
    // pieces sent to storage fall away
    for (let i = leaving.length - 1; i >= 0; i--) {
      const p = leaving[i]; p.leavingT += dt;
      p.drop.v -= 9.5 * dt; p.drop.x += p.drop.v * dt;
      p.root.position.y = p.drop.x; p.root.rotation.z += dt * 0.9 * (p.phase > Math.PI ? 1 : -1);
      p.shadow.material.opacity *= 0.8;
      if (p.leavingT > 0.9) { scene.remove(p.root); scene.remove(p.shadow); p.shadow.material.dispose(); p.dispose(); leaving.splice(i, 1); }
    }
    springStep(view.lift, view.liftT, 60, 15, dt);
    placeCamera();
  }

  function render() {
    const f = st.focusAmt;
    const anyFocus = pieces.some(p => p.focus > 0.001);
    if (f > 0.001 || anyFocus) {
      camera.layers.set(0);
      renderer.render(scene, camera);
      bg2d.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
      bg2d.drawImage(glCanvas, 0, 0, bgCanvas.width, bgCanvas.height);
      camera.layers.set(1);
      renderer.render(scene, camera);
      camera.layers.set(0);
      if (!st.blurOn) { st.blurOn = true; bgCanvas.style.visibility = 'visible'; }
      const e = easeInOut(clamp(f, 0, 1));
      bgCanvas.style.filter = 'blur(' + (e * 18).toFixed(1) + 'px) saturate(' + (1 - 0.55 * e).toFixed(2) + ')';
      bgCanvas.style.opacity = (1 - 0.955 * e).toFixed(3);
    } else {
      if (st.blurOn) { st.blurOn = false; bgCanvas.style.visibility = 'hidden'; bg2d.clearRect(0, 0, bgCanvas.width, bgCanvas.height); }
      camera.layers.set(0);
      renderer.render(scene, camera);
    }
    emit('frame');
  }

  // thumbnails for storage and the bag
  const thumbRT = new THREE.WebGLRenderTarget(300, 360, { samples: 4 });
  thumbRT.texture.colorSpace = THREE.SRGBColorSpace;
  const thumbCam = new THREE.PerspectiveCamera(18, 300 / 360, 0.1, 20);
  const thumbScene = new THREE.Scene(); thumbScene.environment = env;
  {
    const h2 = hemi.clone(), k2 = new THREE.DirectionalLight(0xfffaf2, 2.05), f2 = fill.clone();
    k2.position.copy(key.position); thumbScene.add(h2, k2, f2);
  }
  function thumbnail(def, dress) {
    const p = createPiece(def);
    if (dress) dress(p);
    p.setMorph(1); p.hook.rotation.y = 0;
    thumbScene.add(p.root);
    const cy = (p.size.top + p.size.bottom) / 2 + 0.03, ph = Math.max(p.size.top - p.size.bottom + 0.2, (p.size.w + 0.08) * 1.2);
    const d = ph / 2 / Math.tan(9 * Math.PI / 180);
    thumbCam.position.set(0, cy, d); thumbCam.lookAt(0, cy, 0);
    const old = renderer.getRenderTarget();
    renderer.setRenderTarget(thumbRT); renderer.setClearColor(0x000000, 0); renderer.clear();
    renderer.render(thumbScene, thumbCam);
    const W = 300, H = 360, buf = new Uint8Array(W * H * 4);
    renderer.readRenderTargetPixels(thumbRT, 0, 0, W, H, buf);
    renderer.setRenderTarget(old);
    thumbScene.remove(p.root); p.dispose();
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const cx = cv.getContext('2d'), img = cx.createImageData(W, H);
    for (let y = 0; y < H; y++) img.data.set(buf.subarray((H - 1 - y) * W * 4, (H - y) * W * 4), y * W * 4);
    cx.putImageData(img, 0, 0);
    return cv.toDataURL('image/png');
  }

  return {
    renderer, scene, camera, view, pieces, st, on, resize, step, render, layout, pick, setHover, hang, store, clearAll,
    openDetail, closeDetail, stepDetail, project, pointerWorld, thumbnail, sideNeed, frontNeed
  };
}

// ---- 40-data.js ----
// ---------- catalogue, colours, logo handling ----------
const COLORS = [
  ['Chalk', '#F1EFE9'], ['Bone', '#E2DBCB'], ['Oat', '#CBBDA4'], ['Camel', '#B3885A'],
  ['Clay', '#A7573B'], ['Rust', '#7C3421'], ['Plum', '#46283A'], ['Forest', '#1F3E32'],
  ['Sage', '#8A9A83'], ['Sky', '#B5C8DD'], ['Cobalt', '#2440B8'], ['Navy', '#1B2740'],
  ['Slate', '#59616B'], ['Heather', '#9C9EA1'], ['Washed black', '#2D2D30'], ['Black', '#151516']
];
const colorHex = name => (COLORS.find(c => c[0] === name) || COLORS[0])[1];
function colorNameFor(hex) {
  const f = COLORS.find(c => c[1].toLowerCase() === hex.toLowerCase());
  return f ? f[0] : 'Custom ' + hex.toUpperCase();
}
const PIECE_NAMES = { tee: 'Heavy tee', hoodie: 'Pullover hoodie', shirt: 'Oxford shirt', scarf: 'Wool scarf', beanie: 'Rib beanie' };
const TYPE_ORDER = ['shirt', 'tee', 'hoodie', 'scarf', 'beanie'];

let uid = 1;
function makeDef(type, colorName, extra) {
  const hex = colorName[0] === '#' ? colorName : colorHex(colorName);
  return Object.assign({ id: 'p' + (uid++), type, name: PIECE_NAMES[type], color: hex, colorName: colorName[0] === '#' ? colorNameFor(hex) : colorName, seed: uid * 7919 + 17 }, extra || {});
}
const DEFAULT_RACK = [['tee', 'Bone'], ['hoodie', 'Forest'], ['shirt', 'Sky'], ['tee', 'Black'], ['scarf', 'Camel'],
  ['hoodie', 'Washed black'], ['shirt', 'Chalk'], ['tee', 'Heather'], ['scarf', 'Navy'], ['beanie', 'Rust']];
const DEFAULT_STORAGE = [['hoodie', 'Bone'], ['tee', 'Navy'], ['shirt', 'Black'], ['beanie', 'Black'], ['beanie', 'Chalk'], ['scarf', 'Slate']];

const PALETTES = {
  Studio: ['Bone', 'Forest', 'Sky', 'Black', 'Camel', 'Washed black', 'Rust', 'Chalk', 'Heather', 'Navy'],
  Mono: ['Chalk', 'Black', 'Heather', 'Washed black', 'Bone', 'Slate'],
  Earth: ['Oat', 'Clay', 'Forest', 'Bone', 'Rust', 'Sage', 'Camel'],
  Deep: ['Navy', 'Plum', 'Forest', 'Black', 'Cobalt', 'Slate']
};

// ---- logo: any image in, a square "contain" texture out, plus a white mask for single-ink prints ----
const Logo = { ver: 0, src: null, name: '', original: null, mask: null, luma: 0, colors: [], isDefault: true };

function drawDefaultLogo() {
  const c = document.createElement('canvas'); c.width = 900; c.height = 300;
  const x = c.getContext('2d');
  x.fillStyle = '#111'; x.strokeStyle = '#111';
  // a plain placeholder mark: an empty label outline and the words
  x.lineWidth = 16; x.lineJoin = 'round';
  x.strokeRect(34, 70, 200, 160);
  x.beginPath(); x.arc(84, 120, 16, 0, TAU); x.fill();
  x.font = '700 150px Archivo, "Helvetica Neue", Arial, sans-serif'; x.textBaseline = 'middle';
  x.fillText('your logo', 280, 156, 600);
  return c;
}

function processLogo(source) {
  // source: canvas or image
  const sw = source.naturalWidth || source.width, sh = source.naturalHeight || source.height;
  const k = Math.min(1, 900 / Math.max(sw, sh));
  const w = Math.max(1, Math.round(sw * k)), h = Math.max(1, Math.round(sh * k));
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(source, 0, 0, w, h);
  const img = x.getImageData(0, 0, w, h), d = img.data;
  // does the file carry its own transparency?
  let clear = 0;
  for (let i = 3; i < d.length; i += 4 * 7) if (d[i] < 250) clear++;
  const hasAlpha = clear > (d.length / 28) * 0.02;
  if (!hasAlpha) {
    // key out the flat background, sampled from the corners
    const cs = [[0, 0], [w - 1, 0], [0, h - 1], [w - 1, h - 1], [w >> 1, 0], [0, h >> 1]];
    let br = 0, bgc = 0, bb = 0;
    cs.forEach(p => { const i = (p[1] * w + p[0]) * 4; br += d[i]; bgc += d[i + 1]; bb += d[i + 2]; });
    br /= cs.length; bgc /= cs.length; bb /= cs.length;
    for (let i = 0; i < d.length; i += 4) {
      const dist = Math.hypot(d[i] - br, d[i + 1] - bgc, d[i + 2] - bb) / 441;
      d[i + 3] = Math.round(255 * smooth(0.05, 0.2, dist));
    }
  }
  // trim to the artwork
  let x0 = w, y0 = h, x1 = 0, y1 = 0;
  for (let y = 0; y < h; y++) for (let xx = 0; xx < w; xx++) if (d[(y * w + xx) * 4 + 3] > 12) { if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  if (x1 <= x0 || y1 <= y0) { x0 = 0; y0 = 0; x1 = w - 1; y1 = h - 1; }
  x.putImageData(img, 0, 0);
  const tw = x1 - x0 + 1, th = y1 - y0 + 1;
  // average ink colour + dominant brand colours
  let lr = 0, lg = 0, lb = 0, la = 0; const bins = new Map();
  for (let y = y0; y <= y1; y += 2) for (let xx = x0; xx <= x1; xx += 2) {
    const i = (y * w + xx) * 4, a = d[i + 3] / 255; if (a < 0.96) continue;
    lr += d[i] * a; lg += d[i + 1] * a; lb += d[i + 2] * a; la += a;
    const key = (d[i] >> 5) << 6 | (d[i + 1] >> 5) << 3 | (d[i + 2] >> 5);
    const b = bins.get(key) || [0, 0, 0, 0]; b[0] += d[i]; b[1] += d[i + 1]; b[2] += d[i + 2]; b[3]++; bins.set(key, b);
  }
  la = la || 1;
  const avg = [lr / la / 255, lg / la / 255, lb / la / 255];
  const cols = [...bins.values()].sort((a, b) => b[3] - a[3]).slice(0, 6).map(b => {
    const r = b[0] / b[3], g = b[1] / b[3], bl = b[2] / b[3];
    const mx = Math.max(r, g, bl), mn = Math.min(r, g, bl);
    return { hex: '#' + [r, g, bl].map(v => Math.round(v).toString(16).padStart(2, '0')).join(''), sat: mx ? (mx - mn) / mx : 0, share: b[3] };
  }).filter(o => o.sat > 0.28);
  const S = 1024, pad = 0.04;
  const fit = Math.min(S * (1 - 2 * pad) / tw, S * (1 - 2 * pad) / th);
  const dw = tw * fit, dh = th * fit;
  const mkSquare = () => { const q = document.createElement('canvas'); q.width = q.height = S; return q; };
  const orig = mkSquare(), ox = orig.getContext('2d');
  ox.imageSmoothingQuality = 'high';
  ox.drawImage(c, x0, y0, tw, th, (S - dw) / 2, (S - dh) / 2, dw, dh);
  const mask = mkSquare(), mx2 = mask.getContext('2d');
  mx2.drawImage(orig, 0, 0);
  mx2.globalCompositeOperation = 'source-in'; mx2.fillStyle = '#fff'; mx2.fillRect(0, 0, S, S);
  return { original: orig, mask, luma: 0.2126 * avg[0] + 0.7152 * avg[1] + 0.0722 * avg[2], colors: cols.map(o => o.hex), aspect: tw / th, trimmed: { c, x0, y0, tw, th } };
}
function logoTexture(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.generateMipmaps = true;
  return t;
}
// small transport copy of the logo for links
function logoDataUrl(maxSide) {
  const tr = Logo.proc.trimmed, k = Math.min(1, (maxSide || 220) / Math.max(tr.tw, tr.th));
  const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(tr.tw * k)); c.height = Math.max(1, Math.round(tr.th * k));
  const x = c.getContext('2d'); x.imageSmoothingQuality = 'high';
  x.drawImage(tr.c, tr.x0, tr.y0, tr.tw, tr.th, 0, 0, c.width, c.height);
  let url = c.toDataURL('image/webp', 0.82);
  if (url.indexOf('data:image/webp') !== 0) url = c.toDataURL('image/png');
  return url;
}

// ---- link codec: JSON -> deflate -> base64url (letters, digits, - and _ only) ----
const b64u = {
  enc(bytes) { let s = ''; for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); },
  dec(str) { const s = atob(str.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((str.length + 3) % 4)); const b = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return b; }
};
async function pack(obj) {
  const raw = new TextEncoder().encode(JSON.stringify(obj));
  if (typeof CompressionStream === 'undefined') return 'j' + b64u.enc(raw);
  const cs = new Blob([raw]).stream().pipeThrough(new CompressionStream('deflate-raw'));
  return 'z' + b64u.enc(new Uint8Array(await new Response(cs).arrayBuffer()));
}
async function unpack(tok) {
  const kind = tok[0], bytes = b64u.dec(tok.slice(1));
  if (kind === 'j') return JSON.parse(new TextDecoder().decode(bytes));
  const ds = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return JSON.parse(new TextDecoder().decode(await new Response(ds).arrayBuffer()));
}

// ---- 50-app.js ----
// ---------- app: state, interface, pointer ----------
// links are built from wherever this page is really being served: any host, sub-folder or path prefix
const shareBase = () => location.href.split('#')[0];
const STORE_KEY = 'blank.rack.v1';
const MAX_RAIL = 12;
const $ = s => document.querySelector(s);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function boot() {
  const app = $('#app'), stage = $('#stage');
  const rack = createRack(stage);
  const state = { storage: [], bag: [], ink: 'auto', placement: 'default', palette: 'Studio', forName: '', touched: false };
  const queue = [];   // timed actions run on simulation time
  let simT = 0;

  // ----- logo -----
  function setLogoFromSource(src, isDefault, name) {
    const proc = processLogo(src);
    if (Logo.texOriginal) { Logo.texOriginal.dispose(); Logo.texMask.dispose(); }
    Logo.proc = proc; Logo.luma = proc.luma; Logo.colors = proc.colors; Logo.isDefault = !!isDefault; Logo.name = name || '';
    Logo.texOriginal = logoTexture(proc.original); Logo.texMask = logoTexture(proc.mask);
    Logo.ver++;
    const thumbUrl = logoDataUrl(160);
    document.querySelectorAll('.logo-thumb').forEach(i => { i.src = thumbUrl; i.parentElement.classList.toggle('dark', proc.luma > 0.72); });
    $('#logo-pick').textContent = isDefault ? 'Upload a logo' : 'Replace the logo';
    applyLogoAll(); buildPalettes(); thumbs.clear(); refreshOpenPanels();
  }
  function inkFor(hex) {
    const fab = luma(hex);
    let mode = state.ink;
    if (mode === 'auto') mode = Math.abs(Logo.luma - fab) < 0.3 ? 'mono' : 'original';
    if (mode === 'original') return { tex: Logo.texOriginal, color: 0xffffff };
    if (mode === 'mono') return { tex: Logo.texMask, color: fab > 0.45 ? 0x17181a : 0xf2f0ea };
    const c = new THREE.Color(hex); const hsl = {}; c.getHSL(hsl);
    c.setHSL(hsl.h, hsl.s * 0.9, clamp(hsl.l + (hsl.l > 0.5 ? -0.16 : 0.15), 0.04, 0.96));
    return { tex: Logo.texMask, color: c.getHex() };
  }
  function dressPiece(p) {
    const ink = inkFor(p.color);
    p.decalMat.color.set(ink.color);
    p.setLogo(ink.tex);
    p.setPlacement(state.placement === 'default' ? p.bp.defaultPrint : state.placement);
  }
  function applyLogoAll() { rack.pieces.forEach(dressPiece); }

  function readImageFile(file) {
    return new Promise((res, rej) => {
      const url = URL.createObjectURL(file), img = new Image();
      img.onload = () => { res(img); setTimeout(() => URL.revokeObjectURL(url), 4000); };
      img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('That file is not an image this browser can open.')); };
      img.src = url;
    });
  }
  async function useLogoFile(file) {
    try {
      const img = await readImageFile(file);
      setLogoFromSource(img, false, file.name);
      toast('Logo printed on every piece');
      touch(); save();
    } catch (e) { toast(e.message); }
  }

  // ----- thumbnails -----
  const thumbs = new Map();
  function thumbFor(def) {
    const key = [def.type, def.color, Logo.ver, state.ink, state.placement].join('|');
    let t = thumbs.get(key);
    if (!t) {
      t = rack.thumbnail(def, p => dressPiece(p));
      thumbs.set(key, t);
    }
    return t;
  }

  // ----- rail <-> storage -----
  function hangDef(def, index, opts) {
    const p = rack.hang(def, index, opts);
    dressPiece(p);
    return p;
  }
  function takeOff(p) {
    const def = p.def; def.color = p.color; def.colorName = p.colorName;
    rack.store(p);
    state.storage.unshift(def);
    counts(); refreshOpenPanels(); save();
  }
  function hangFromStorage(def) {
    if (rack.pieces.length >= MAX_RAIL) { toast('The rail holds ' + MAX_RAIL + ' pieces. Take one off first.'); return; }
    state.storage = state.storage.filter(d => d !== def);
    hangDef(def);
    counts(); refreshOpenPanels(); save();
  }

  // ----- colours -----
  function setPieceColor(p, hex, name) {
    p.setColor(hex, name || colorNameFor(hex));
    p.def.color = hex; p.def.colorName = p.colorName;
    dressPiece(p); save();
  }
  function buildPalettes() {
    const seg = $('#seg-pal'); seg.textContent = '';
    const names = Object.keys(PALETTES).concat(Logo.colors.length && !Logo.isDefault ? ['From logo'] : []);
    names.forEach(n => {
      const b = el('button', '', n); b.type = 'button'; b.dataset.v = n;
      b.setAttribute('aria-pressed', String(state.palette === n));
      b.addEventListener('click', () => applyPalette(n));
      seg.appendChild(b);
    });
  }
  function applyPalette(name) {
    state.palette = name;
    let list;
    if (name === 'From logo') {
      const brand = Logo.colors.slice(0, 3);
      list = [];
      brand.forEach(h => { list.push(['Logo colour', h]); });
      list.splice(1, 0, ['Black', colorHex('Black')]); list.push(['Chalk', colorHex('Chalk')], ['Washed black', colorHex('Washed black')], ['Bone', colorHex('Bone')]);
    } else list = PALETTES[name].map(n => [n, colorHex(n)]);
    rack.pieces.forEach((p, i) => { const c = list[i % list.length]; setPieceColor(p, c[1], c[0]); p.tilt.v += 0.25 + 0.04 * i; });
    buildPalettes(); thumbs.clear(); refreshOpenPanels(); touch();
  }

  // ----- interface bits -----
  let toastT = 0;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2600); }
  function touch() { if (!state.touched) { state.touched = true; $('#hint').classList.add('off'); } }
  function counts() {
    $('#n-storage').textContent = state.storage.length;
    const units = state.bag.reduce((s, b) => s + b.qty, 0);
    const nb = $('#n-bag'); nb.textContent = state.bag.length; nb.classList.toggle('hot', state.bag.length > 0);
    $('#bag-total').textContent = units + ' units';
    const list = $('#sr-list'); list.textContent = '';
    rack.pieces.forEach(p => {
      const li = el('li'), b = el('button', '', p.name + ', ' + p.colorName); b.type = 'button';
      b.addEventListener('focus', () => { if (rack.st.mode === 'rack') rack.setHover(p); });
      b.addEventListener('click', () => rack.openDetail(p));
      li.appendChild(b); list.appendChild(li);
    });
  }
  function segBind(sel, cb) {
    const seg = $(sel);
    seg.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      seg.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      cb(b.dataset.v);
    });
  }
  $('#sel-place').addEventListener('change', e => { state.placement = e.target.value; applyLogoAll(); thumbs.clear(); refreshOpenPanels(); touch(); save(); });
  $('#sel-ink').addEventListener('change', e => { state.ink = e.target.value; applyLogoAll(); thumbs.clear(); refreshOpenPanels(); touch(); save(); });

  $('#logo-well').addEventListener('click', () => $('#logo-file').click());
  $('#logo-pick').addEventListener('click', () => $('#logo-file').click());
  $('#logo-file').addEventListener('change', e => { const f = e.target.files[0]; if (f) useLogoFile(f); e.target.value = ''; });

  // ----- panels -----
  let panel = null;
  function openPanel(name) {
    closePanel();
    panel = name;
    const p = $('#' + name); p.classList.add('on'); p.setAttribute('aria-hidden', 'false');
    $('#scrim').classList.toggle('on', name !== 'storage');
    rack.view.liftT = name === 'storage' ? 1 : 0;
    app.classList.toggle('storing', name === 'storage');
    if (name === 'storage') renderStorage();
    if (name === 'bag') renderBag();
    rack.setHover(null);
  }
  function closePanel() {
    if (!panel) return;
    const p = $('#' + panel); p.classList.remove('on'); p.setAttribute('aria-hidden', 'true');
    $('#scrim').classList.remove('on'); panel = null; rack.view.liftT = 0; app.classList.remove('storing');
    $('#btn-custom').setAttribute('aria-expanded', 'false');
  }
  function refreshOpenPanels() { if (panel === 'storage') renderStorage(); if (panel === 'bag') renderBag(); }
  $('#scrim').addEventListener('click', closePanel);
  $('#btn-storage').addEventListener('click', () => panel === 'storage' ? closePanel() : openPanel('storage'));
  $('#btn-custom').addEventListener('click', e => { if (panel === 'custom') closePanel(); else { openPanel('custom'); e.currentTarget.setAttribute('aria-expanded', 'true'); } });
  $('#btn-bag').addEventListener('click', () => openPanel('bag'));
  $('#st-close').addEventListener('click', closePanel);
  $('#bag-close').addEventListener('click', closePanel);
  $('#sh-close').addEventListener('click', closePanel);

  function renderStorage() {
    const shelf = $('#shelf'); shelf.textContent = '';
    state.storage.forEach(def => {
      const card = el('div', 'card');
      const ph = el('div', 'ph'), img = el('img'); img.alt = ''; ph.appendChild(img);
      const nm = el('div', 'nm', def.name), cl = el('div', 'cl'), dot = el('span', 'dot'); dot.style.background = def.color;
      cl.append(dot, document.createTextNode(def.colorName));
      const row = el('div', 'row'), hang = el('button', 'txt', 'Hang on the rail'); hang.type = 'button';
      hang.addEventListener('click', () => hangFromStorage(def));
      row.appendChild(hang);
      let cut = null;
      if (def.src) {
        const s = el('img', 'src'); s.src = def.src; s.alt = 'Source picture'; card.appendChild(s);
        cut = el('button', 'chip cut', 'Cut: ' + TYPES[def.type].label); cut.type = 'button'; cut.title = 'Change the cut';
        cut.addEventListener('click', () => { def.type = TYPE_ORDER[(TYPE_ORDER.indexOf(def.type) + 1) % TYPE_ORDER.length]; def.name = PIECE_NAMES[def.type]; renderStorage(); save(); });
      }
      const x = el('button', 'x', '×'); x.type = 'button'; x.setAttribute('aria-label', 'Delete ' + def.name + ' from storage');
      x.addEventListener('click', () => { state.storage = state.storage.filter(d => d !== def); counts(); renderStorage(); save(); });
      // the cut chip goes under the colour, so the source picture and the delete button keep the top corners to themselves
      card.append(ph, nm, cl); if (cut) card.appendChild(cut); card.append(row, x);
      shelf.appendChild(card);
      queue.push({ at: simT + 0.01, run: () => { if (img.isConnected) img.src = thumbFor(def); } });
    });
    // add new
    const add = el('div', 'card add');
    add.appendChild(el('div', '', 'Add a blank piece'));
    const types = el('div', 'types');
    TYPE_ORDER.forEach(t => {
      const b = el('button', 'chip', TYPES[t].label); b.type = 'button';
      b.addEventListener('click', () => { state.storage.unshift(makeDef(t, 'Bone')); counts(); renderStorage(); save(); });
      types.appendChild(b);
    });
    const pic = el('button', 'txt', 'Or add from pictures'); pic.type = 'button';
    pic.addEventListener('click', () => $('#pic-file').click());
    add.append(types, pic);
    shelf.appendChild(add);
  }
  $('#pic-file').addEventListener('change', e => { addPictures([...e.target.files]); e.target.value = ''; });

  // a picture of a garment becomes a blank piece in the same colour; its own graphics are left behind
  async function addPictures(files) {
    let n = 0;
    for (const f of files) {
      if (!/^image\//.test(f.type)) continue;
      try {
        const img = await readImageFile(f);
        const info = readGarmentPicture(img, f.name);
        state.storage.unshift(makeDef(info.type, info.hex, { src: info.thumb, from: f.name }));
        n++;
      } catch (e) { /* skip unreadable files */ }
    }
    if (n) { toast(n === 1 ? 'Added 1 piece to storage' : 'Added ' + n + ' pieces to storage'); counts(); if (panel !== 'storage') openPanel('storage'); else renderStorage(); save(); }
    else toast('No pictures could be read');
  }
  function readGarmentPicture(img, name) {
    const W = 96, H = Math.max(8, Math.round(96 * img.naturalHeight / img.naturalWidth));
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0, W, H);
    const d = x.getImageData(0, 0, W, H).data;
    const px = (X, Y) => { const i = (Y * W + X) * 4; return [d[i], d[i + 1], d[i + 2], d[i + 3]]; };
    const corners = [px(1, 1), px(W - 2, 1), px(1, H - 2), px(W - 2, H - 2)];
    const bgc = [0, 1, 2].map(k => corners.reduce((s, q) => s + q[k], 0) / 4);
    // garment = pixels unlike the background; take the most common colour among them
    const bins = new Map(); let minX = W, maxX = 0, minY = H, maxY = 0, cnt = 0;
    const rowW = new Array(H).fill(0);
    for (let Y = 0; Y < H; Y++) for (let X = 0; X < W; X++) {
      const q = px(X, Y); if (q[3] < 40) continue;
      if (Math.hypot(q[0] - bgc[0], q[1] - bgc[1], q[2] - bgc[2]) < 38 && corners[0][3] > 200) continue;
      cnt++; rowW[Y]++; if (X < minX) minX = X; if (X > maxX) maxX = X; if (Y < minY) minY = Y; if (Y > maxY) maxY = Y;
      const key = (q[0] >> 4) << 8 | (q[1] >> 4) << 4 | (q[2] >> 4);
      const b = bins.get(key) || [0, 0, 0, 0]; b[0] += q[0]; b[1] += q[1]; b[2] += q[2]; b[3]++; bins.set(key, b);
    }
    let best = [...bins.values()].sort((a, b) => b[3] - a[3])[0] || [200, 200, 200, 1];
    const hex = '#' + [0, 1, 2].map(k => Math.round(best[k] / best[3]).toString(16).padStart(2, '0')).join('');
    // guess the cut from the file name, then from the outline
    const nm = (name || '').toLowerCase();
    let type = /hood|sweat|crew/.test(nm) ? 'hoodie' : /scarf|shawl/.test(nm) ? 'scarf' : /bean|hat|cap/.test(nm) ? 'beanie' : /button|oxford|shirt(?!.*t-?shirt)/.test(nm) && !/t-?shirt|tee/.test(nm) ? 'shirt' : /tee|t-?shirt/.test(nm) ? 'tee' : null;
    if (!type) {
      const bw = maxX - minX + 1, bh = maxY - minY + 1, ar = bw / Math.max(1, bh), fillK = cnt / Math.max(1, bw * bh);
      if (ar < 0.5) type = 'scarf';
      else if (ar > 0.85 && bh < H * 0.62 && fillK > 0.62) type = 'beanie';
      else { const top = rowW[Math.round(minY + bh * 0.22)] || 0, low = rowW[Math.round(minY + bh * 0.72)] || 1; type = top / low > 1.28 ? 'tee' : 'hoodie'; }
    }
    const t = document.createElement('canvas'); t.width = t.height = 72;
    const tx = t.getContext('2d'); const s = Math.min(img.naturalWidth, img.naturalHeight);
    tx.drawImage(img, (img.naturalWidth - s) / 2, (img.naturalHeight - s) / 2, s, s, 0, 0, 72, 72);
    return { type, hex, thumb: t.toDataURL('image/jpeg', 0.7) };
  }

  // ----- bag -----
  function addToBag(p) {
    const key = p.type + '|' + p.color;
    let it = state.bag.find(b => b.key === key);
    if (it) it.qty += 25; else state.bag.push(it = { key, type: p.type, name: p.name, color: p.color, colorName: p.colorName, qty: 25 });
    counts(); save();
    toast(p.name + ', ' + p.colorName.toLowerCase() + ' added to the bag');
  }
  function renderBag() {
    const list = $('#bag-list'); list.textContent = '';
    if (!state.bag.length) { list.appendChild(el('p', 'empty', 'Nothing in the bag yet. Open a piece on the rail and add it.')); }
    state.bag.forEach(it => {
      const row = el('div', 'bag-item'), ph = el('div', 'ph'), img = el('img'); img.alt = ''; ph.appendChild(img);
      queue.push({ at: simT + 0.01, run: () => { if (img.isConnected) img.src = thumbFor({ type: it.type, color: it.color, name: it.name, colorName: it.colorName, seed: 4242 }); } });
      const mid = el('div', 'stack'); mid.append(el('div', 'nm', it.name));
      const cl = el('div', 'cl'), dot = el('span', 'dot'); dot.style.background = it.color; cl.append(dot, document.createTextNode(it.colorName)); mid.appendChild(cl);
      const q = el('div', 'qty'), minus = el('button', '', '−'), num = el('span', '', String(it.qty)), plus = el('button', '', '+');
      minus.type = plus.type = 'button'; minus.setAttribute('aria-label', 'Fewer units'); plus.setAttribute('aria-label', 'More units');
      minus.addEventListener('click', () => { it.qty -= 5; if (it.qty < 10) state.bag = state.bag.filter(b => b !== it); counts(); renderBag(); save(); });
      plus.addEventListener('click', () => { it.qty += 5; counts(); renderBag(); save(); });
      q.append(minus, num, plus);
      row.append(ph, mid, q); list.appendChild(row);
    });
    $('#bag-copy').disabled = !state.bag.length;
    $('#bag-text').hidden = true;
    $('#bag-note').textContent = state.bag.length ? 'Units per piece. The smallest batch is 10.' : '';
  }
  $('#bag-copy').addEventListener('click', () => {
    const lines = state.bag.map(b => b.qty + ' × ' + b.name + ', ' + b.colorName);
    const head = 'Batch request' + (state.forName ? ' for ' + state.forName : '') + '\n' + lines.join('\n') + '\nLogo: ' + (Logo.isDefault ? 'to be supplied' : (Logo.name || 'as shown')) + '\n';
    copyText(shareLink().then(link => head + link), $('#bag-note'), 'Request copied. Paste it into an email or a message.', $('#bag-text'));
  });
  // txt is a string, or a promise of one. Handing the promise to the clipboard keeps the copy inside the tap that asked
  // for it, which Safari insists on. If every way of copying is refused, the text is shown so it can be copied by hand.
  function copyText(txt, noteEl, okMsg, showEl) {
    const done = () => { noteEl.textContent = okMsg; };
    const byHand = t => {
      const ta = el('textarea'); ta.value = t; ta.readOnly = true; ta.style.cssText = 'position:fixed;opacity:0;left:0;top:0'; document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      ta.remove();
      if (ok) { done(); return; }
      noteEl.textContent = 'Copying is blocked here. Select the text and copy it by hand.';
      if (showEl) { showEl.value = t; showEl.hidden = false; showEl.focus(); showEl.select(); }
    };
    const plain = t => { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, () => byHand(t)); else byHand(t); };
    if (typeof txt === 'string') { plain(txt); return; }
    if (navigator.clipboard && navigator.clipboard.write && typeof ClipboardItem !== 'undefined') {
      let item = null;
      try { item = new ClipboardItem({ 'text/plain': txt.then(t => new Blob([t], { type: 'text/plain' })) }); } catch (e) { item = null; }
      if (item) { navigator.clipboard.write([item]).then(done, () => txt.then(plain)); return; }
    }
    txt.then(plain);
  }

  // ----- share link -----
  function snapshot(withLogo) {
    return {
      v: 1, n: state.forName, i: state.ink, pl: state.placement, pa: state.palette,
      r: rack.pieces.map(p => [p.type, p.color]), s: state.storage.map(d => [d.type, d.color]),
      b: state.bag.map(b => [b.type, b.color, b.qty]),
      l: withLogo && !Logo.isDefault ? logoDataUrl(withLogo) : null, ln: Logo.isDefault ? '' : Logo.name
    };
  }
  async function shareLink() {
    const tok = await pack(snapshot(200));
    return shareBase() + '#c-' + tok;
  }
  // links are made off the main thread and can finish out of order; only the newest one is shown, and it is what gets copied
  let linkTurn = 0;
  function showLink() { const turn = ++linkTurn; return shareLink().then(link => { if (turn === linkTurn) $('#sh-link').value = link; return link; }); }
  function openShare() {
    openPanel('share');
    $('#sh-name').value = state.forName;
    $('#sh-note').textContent = '';
    showLink();
  }
  $('#btn-send').addEventListener('click', openShare);
  $('#sh-name').addEventListener('input', e => {
    state.forName = e.target.value.trim(); forLine(); save();
    $('#sh-note').textContent = '';
    showLink();
  });
  $('#sh-copy').addEventListener('click', () => copyText(showLink(), $('#sh-note'), 'Link copied.'));
  $('#sh-link').addEventListener('focus', e => e.target.select());
  function forLine() { $('#forline').textContent = state.forName ? 'A collection for ' + state.forName : ''; }

  // ----- persistence (this browser only) -----
  let saveT = 0;
  function save() {
    clearTimeout(saveT);
    saveT = setTimeout(() => {
      let kept = false;
      try { localStorage.setItem(STORE_KEY, JSON.stringify(snapshot(420))); kept = true; } catch (e) { /* storage may be unavailable */ }
      // a rail opened from a link and then changed is no longer what the link describes: once the change is kept here,
      // take the link out of the address so that reloading shows the changed rail and not the one that was sent
      if (kept && /^#c-/.test(location.hash)) { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* leave the address alone */ } }
    }, 400);
  }
  // a different collection link opened in this same tab only changes the part after #, so load it properly
  window.addEventListener('hashchange', () => { if (/^#c-/.test(location.hash)) location.reload(); });
  async function loadSaved() {
    const h = (location.hash || '').replace(/^#/, '');
    if (h.indexOf('c-') === 0) { try { return { data: await unpack(h.slice(2)), shared: true }; } catch (e) { /* fall through */ } }
    try { const s = localStorage.getItem(STORE_KEY); if (s) return { data: JSON.parse(s), shared: false }; } catch (e) { /* ignore */ }
    return null;
  }
  function loadImage(url) { return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; }); }

  // ----- detail view -----
  const dSw = $('#d-swatches');
  COLORS.forEach(c => {
    const b = el('button', 'sw'); b.type = 'button'; b.style.background = c[1]; b.title = c[0]; b.setAttribute('aria-label', c[0]); b.dataset.hex = c[1];
    b.addEventListener('click', () => { if (rack.st.focus) { setPieceColor(rack.st.focus, c[1], c[0]); fillDetail(rack.st.focus); thumbs.clear(); } });
    dSw.appendChild(b);
  });
  {
    const b = el('label', 'sw custom', '+'); b.title = 'Any colour';
    const inp = el('input'); inp.type = 'color'; inp.id = 'd-custom'; inp.setAttribute('aria-label', 'Any colour');
    inp.addEventListener('input', () => { if (rack.st.focus) { setPieceColor(rack.st.focus, inp.value); fillDetail(rack.st.focus); thumbs.clear(); } });
    b.appendChild(inp); dSw.appendChild(b);
  }
  function fillDetail(p) {
    $('#d-count').textContent = String(rack.pieces.indexOf(p) + 1).padStart(2, '0') + ' / ' + String(rack.pieces.length).padStart(2, '0');
    $('#d-name').textContent = p.name;
    $('#d-meta').textContent = p.colorName;
    dSw.querySelectorAll('button.sw').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.hex.toLowerCase() === p.color.toLowerCase())));
  }
  rack.on('detail', p => {
    const d = $('#detail');
    app.classList.toggle('detail', !!p); d.classList.toggle('on', !!p); d.setAttribute('aria-hidden', String(!p));
    if (p) { fillDetail(p); touch(); }
  });
  $('#d-close').addEventListener('click', () => rack.closeDetail());
  $('#d-prev').addEventListener('click', () => rack.stepDetail(-1));
  $('#d-next').addEventListener('click', () => rack.stepDetail(1));
  $('#d-add').addEventListener('click', () => { if (rack.st.focus) addToBag(rack.st.focus); });
  $('#d-store').addEventListener('click', () => { const p = rack.st.focus; if (!p) return; rack.closeDetail(); queue.push({ at: simT + 0.7, run: () => takeOff(p) }); toast(p.name + ' moved to storage'); });

  // ----- hover tag -----
  const tag = $('#tag');
  rack.on('hover', p => {
    stage.classList.toggle('pointing', !!p);
    if (p) { $('#tag-1').textContent = p.name; $('#tag-2').textContent = panel === 'storage' ? 'Take it off the rail' : p.colorName; tag.classList.add('on'); touch(); }
    else tag.classList.remove('on');
  });
  function placeTag() {
    const p = rack.st.hover; if (!p) return;
    const s = rack.project(p.root.position.x, p.size.bottom - 0.05, 0);
    tag.style.transform = 'translate(' + s.x.toFixed(1) + 'px,' + s.y.toFixed(1) + 'px) translate(-50%, 0)';
  }

  // ----- pointer on the stage -----
  const ptr = { down: false, id: 0, sx: 0, sy: 0, cand: null, wasOpen: false, moved: false, mode: null, lastX: 0, panStart: 0, touch: false };
  const local = e => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  stage.addEventListener('pointerdown', e => {
    if (e.button && e.button !== 0) return;
    const m = local(e);
    ptr.down = true; ptr.id = e.pointerId; ptr.sx = m.x; ptr.sy = m.y; ptr.lastX = m.x; ptr.moved = false; ptr.mode = null; ptr.touch = e.pointerType !== 'mouse';
    try { stage.setPointerCapture(e.pointerId); } catch (err) { /* not capturable */ }
    if (rack.st.mode === 'detail') { ptr.mode = 'spin'; stage.classList.add('spinning'); return; }
    ptr.cand = rack.pick(m.x, m.y);
    ptr.wasOpen = rack.st.hover === ptr.cand;
    if (ptr.touch) rack.setHover(ptr.cand);
    ptr.panStart = rack.view.pan;
    const w = rack.pointerWorld(m.x, m.y); ptr.wx0 = w.x; ptr.wy0 = w.y;
    if (ptr.cand) ptr.grab = w.x - ptr.cand.x.x;
  });
  stage.addEventListener('pointermove', e => {
    const m = local(e);
    if (!ptr.down) { if (rack.st.mode === 'rack' && (!panel || panel === 'storage') && e.pointerType === 'mouse') rack.setHover(rack.pick(m.x, m.y)); return; }
    const dx = m.x - ptr.sx, dy = m.y - ptr.sy;
    if (!ptr.moved && Math.hypot(dx, dy) > 7) {
      ptr.moved = true;
      if (ptr.mode !== 'spin') {
        if (ptr.cand && (ptr.wasOpen || !ptr.touch || Math.abs(dy) > Math.abs(dx))) {
          ptr.mode = 'drag'; rack.st.drag = { piece: ptr.cand, x: ptr.cand.x.x, y: 0, lifted: false };
          rack.setHover(ptr.cand); stage.classList.add('grabbing'); touch();
        } else if (rack.view.panMax > 0) ptr.mode = 'pan';
      }
    }
    if (ptr.mode === 'spin') { rack.st.detailYawT += (m.x - ptr.lastX) * 0.011; ptr.lastX = m.x; }
    else if (ptr.mode === 'pan') {
      const w0 = rack.pointerWorld(ptr.sx, ptr.sy).x, w1 = rack.pointerWorld(m.x, m.y).x;
      rack.view.pan = clamp(ptr.panStart - (w1 - w0), -rack.view.panMax, rack.view.panMax); ptr.panStart = rack.view.pan; ptr.sx = m.x;
    } else if (ptr.mode === 'drag') {
      const d = rack.st.drag, w = rack.pointerWorld(m.x, m.y), pull = w.y - ptr.wy0;
      d.x = clamp(w.x - ptr.grab, -HANG_HALF - 0.25, HANG_HALF + 0.25);
      const was = d.lifted;
      d.lifted = pull < -0.2 || (was && pull < -0.1);
      d.y = d.lifted ? pull + 0.06 : 0;
      d.piece.lifted = d.lifted;
      if (d.lifted !== was) { $('#dropzone').classList.toggle('on', d.lifted); tag.classList.toggle('on', !d.lifted); if (!d.lifted) reinsert(d.piece, d.x); }
      if (!d.lifted) reorder(d.piece, d.x);
      $('#dropzone').classList.toggle('over', d.lifted && m.y > rack.view.h * 0.74);
    }
  });
  // while a piece is dragged along the rail it takes the slot nearest the pointer and the others close up around it
  function reorder(p, x) {
    const arr = rack.pieces, i = arr.indexOf(p), n = arr.length;
    const k = clamp(Math.round((x + HANG_HALF) / (2 * HANG_HALF) * (n - 1)), 0, n - 1);
    if (k !== i) { arr.splice(i, 1); arr.splice(k, 0, p); }
  }
  function reinsert(p, x) {
    const arr = rack.pieces; arr.splice(arr.indexOf(p), 1);
    let k = 0; while (k < arr.length && arr[k].x.x < x) k++;
    arr.splice(k, 0, p);
  }
  function endPointer(e, cancelled) {
    if (!ptr.down) return;
    ptr.down = false;
    const m = local(e);
    if (ptr.mode === 'drag') {
      const d = rack.st.drag, p = d.piece;
      stage.classList.remove('grabbing'); $('#dropzone').classList.remove('on', 'over');
      rack.st.drag = null;
      if (d.lifted) {
        p.lifted = false;
        if (!cancelled && m.y > rack.view.h * 0.74) { p.drop.v = -1.2; takeOff(p); toast(p.name + ' moved to storage'); }
        else { reinsert(p, d.x); p.drop.v = 0; save(); }
      } else { counts(); save(); }
      if (ptr.touch) rack.setHover(null);
    } else if (!ptr.moved && !cancelled && rack.st.mode === 'rack' && ptr.cand) {
      if (panel === 'storage') { const p = ptr.cand; p.drop.v = -1.2; takeOff(p); }
      else if (!ptr.touch || ptr.wasOpen) rack.openDetail(ptr.cand);
    } else if (!ptr.moved && rack.st.mode === 'rack' && !ptr.cand && ptr.touch) rack.setHover(null);
    ptr.mode = null; ptr.cand = null; stage.classList.remove('spinning');
  }
  stage.addEventListener('pointerup', e => endPointer(e, false));
  stage.addEventListener('pointercancel', e => endPointer(e, true));
  stage.addEventListener('pointerleave', e => { if (!ptr.down && e.pointerType === 'mouse') rack.setHover(null); });
  stage.addEventListener('wheel', e => {
    if (rack.view.panMax <= 0 || rack.st.mode !== 'rack') return;
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : 0; if (!d) return;
    e.preventDefault(); rack.view.pan = clamp(rack.view.pan + d * 0.002, -rack.view.panMax, rack.view.panMax);
  }, { passive: false });
  stage.addEventListener('dblclick', () => { if (rack.st.mode === 'detail') rack.st.detailYawT = Math.round(rack.st.detailYawT / TAU) * TAU; });

  window.addEventListener('keydown', e => {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) { if (e.key === 'Escape') closePanel(); return; }
    if (e.key === 'Escape') { if (panel) closePanel(); else if (rack.st.mode === 'detail') rack.closeDetail(); else rack.setHover(null); }
    else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      if (panel) return;
      if (rack.st.mode === 'detail') rack.stepDetail(dir);
      else { const a = rack.pieces, i = a.indexOf(rack.st.hover); rack.setHover(a[i < 0 ? (dir > 0 ? 0 : a.length - 1) : clamp(i + dir, 0, a.length - 1)]); }
    } else if (e.key === 'Enter' && rack.st.mode === 'rack' && rack.st.hover && !panel && document.activeElement === document.body) rack.openDetail(rack.st.hover);
  });

  // ----- dropping files anywhere -----
  let dragDepth = 0;
  window.addEventListener('dragenter', e => { if (e.dataTransfer && [...e.dataTransfer.types].indexOf('Files') >= 0) { dragDepth++; const fd = $('#filedrop'); fd.textContent = panel === 'storage' ? 'Drop clothing pictures to add them to storage' : 'Drop a logo to print it on every piece'; fd.classList.add('on'); e.preventDefault(); } });
  window.addEventListener('dragover', e => { if (dragDepth) e.preventDefault(); });
  window.addEventListener('dragleave', () => { dragDepth = Math.max(0, dragDepth - 1); if (!dragDepth) $('#filedrop').classList.remove('on'); });
  window.addEventListener('drop', e => {
    if (!e.dataTransfer || !e.dataTransfer.files.length) return;
    e.preventDefault(); dragDepth = 0; $('#filedrop').classList.remove('on');
    const files = [...e.dataTransfer.files].filter(f => /^image\//.test(f.type));
    if (!files.length) { toast('Only pictures can be dropped here'); return; }
    if (panel === 'storage') addPictures(files); else if (files.length === 1) useLogoFile(files[0]); else addPictures(files);
  });
  window.addEventListener('paste', e => { const f = e.clipboardData && [...e.clipboardData.files].find(x => /^image\//.test(x.type)); if (f) useLogoFile(f); });

  rack.on('change', counts);
  let lastF = -1;
  rack.on('frame', () => {
    const f = easeInOut(clamp(rack.st.focusAmt, 0, 1));
    if (Math.abs(f - lastF) < 0.004) return;
    lastF = f; app.style.setProperty('--f', f.toFixed(3));
  });

  // ----- loop -----
  function advance(dt) {
    simT += dt;
    for (let i = queue.length - 1; i >= 0; i--) if (queue[i].at <= simT) { const q = queue[i]; queue.splice(i, 1); q.run(); }
    const n = Math.max(1, Math.ceil(dt / (1 / 120)));
    for (let i = 0; i < n; i++) rack.step(dt / n);
    placeTag();
  }
  let last = performance.now();
  function frame(now) {
    if (!window.__manual) { const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000)); last = now; advance(dt); rack.render(); }
    else last = now;
    requestAnimationFrame(frame);
  }
  const ro = new ResizeObserver(() => { rack.resize(); if (window.__manual) { advance(0.0001); rack.render(); } });
  ro.observe(stage);
  rack.resize();

  // ----- start: saved or shared state, else the first batch -----
  const coarse = window.matchMedia && window.matchMedia('(hover: none)').matches;
  const HINT = coarse ? 'Tap a piece to turn it, tap again to open it' : 'Point at a piece to turn it, click to open it';
  (async function start() {
    requestAnimationFrame(frame);
    // the neck label and the placeholder logo are lettered on a canvas once, so give the type a moment to arrive first
    const lettering = document.fonts && document.fonts.load
      ? Promise.race([Promise.all([document.fonts.load('700 58px Archivo'), document.fonts.load('500 20px Archivo')]), new Promise(r => setTimeout(r, 1500))]).catch(() => {})
      : Promise.resolve();
    await Promise.all([prepareCuts(Object.keys(TYPES)), lettering]);
    $('#hint').textContent = HINT;
    queue.push({ at: simT + 6, run: () => $('#hint').classList.add('off') });
    setLogoFromSource(drawDefaultLogo(), true);
    const saved = await loadSaved();
    let rail = DEFAULT_RACK, stor = DEFAULT_STORAGE;
    if (saved && saved.data && Array.isArray(saved.data.r)) {
      const d = saved.data;
      rail = d.r.filter(x => TYPES[x[0]]).slice(0, MAX_RAIL); stor = (d.s || []).filter(x => TYPES[x[0]]);
      state.ink = d.i || 'auto'; state.placement = d.pl || 'default'; state.palette = d.pa || 'Studio'; state.forName = d.n || '';
      state.bag = (d.b || []).filter(x => TYPES[x[0]]).map(x => ({ key: x[0] + '|' + x[1], type: x[0], name: PIECE_NAMES[x[0]], color: x[1], colorName: colorNameFor(x[1]), qty: x[2] }));
      $('#sel-place').value = state.placement; $('#sel-ink').value = state.ink;
      if (d.l) { try { setLogoFromSource(await loadImage(d.l), false, d.ln || 'logo'); } catch (e) { /* keep the placeholder */ } }
    }
    state.storage = stor.map(x => makeDef(x[0], x[1]));
    forLine(); buildPalettes();
    const defs = rail.map(x => makeDef(x[0], x[1]));
    if (reduceMotion || window.__instant) defs.forEach(d => hangDef(d, null, { instant: true }));
    else defs.forEach((d, i) => hangDef(d, null, { delay: 0.12 + i * 0.075 }));
    // repaint the placeholder and labels once the type has loaded
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (Logo.isDefault) setLogoFromSource(drawDefaultLogo(), true); });
    counts();
    window.__blank = {
      rack, state, advance, ready: true,
      run(sec, fps) { const n = Math.round(sec * (fps || 60)); for (let i = 0; i < n; i++) advance(1 / (fps || 60)); rack.render(); },
      screenOf(i) { const p = rack.pieces[i]; return rack.project(p.root.position.x, (p.size.top + p.size.bottom) / 2, 0); },
      hover(i) { rack.setHover(i == null || i < 0 ? null : rack.pieces[i]); },
      open(i) { rack.openDetail(rack.pieces[i]); }, close() { rack.closeDetail(); }, next(d) { rack.stepDetail(d || 1); },
      openPanel, closePanel, takeOff: i => takeOff(rack.pieces[i]), hangFirst: () => hangFromStorage(state.storage[0]), applyPalette, shareLink,
      setLogoFromSource, addToBag: i => addToBag(rack.pieces[i])
    };
  })();
}

// three.js is a file next to this one and has already run by now. If it is missing, or the browser will not
// give the page a WebGL context, say so on the wall instead of waiting for a rail that will never arrive.
function cannotStart(why) { const h = document.getElementById('hint'); if (h) { h.textContent = why; h.classList.add('stay'); } }
function begin() {
  if (!window.THREE) { cannotStart('The rail could not load. Reload the page to try again.'); return; }
  try { boot(); } catch (e) { cannotStart('This rail is drawn with WebGL, and this browser could not start it.'); throw e; }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', begin); else begin();

})();
