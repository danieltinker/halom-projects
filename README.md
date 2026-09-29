# Halom — project previews

Static builds served at `halom.io/projects/…`. GitHub Pages hosts the files, and the halom.io
Vercel project proxies the paths to them, so a preview can be updated by pushing here
without redeploying the main site.

- `projects/selva-resort/landing/` — Selva Resort 3D site (concept preview by Halom)

## One-time setup

1. **GitHub Pages**: Settings → Pages → Build and deployment → Source: *Deploy from a branch* →
   Branch `main`, folder `/ (root)` → Save.
2. **halom.io `vercel.json`**: add these rewrites, then deploy the Halom site as usual:

```json
"rewrites": [
  { "source": "/projects/selva-resort/landing", "destination": "https://danieltinker.github.io/halom-projects/projects/selva-resort/landing/" },
  { "source": "/projects/selva-resort/landing/(.*)", "destination": "https://danieltinker.github.io/halom-projects/projects/selva-resort/landing/$1" }
]
```

Both rules are needed: Vercel matches sources strictly, so a `:path*` rule on its own would not
match the trailing-slash URL.

The builds use absolute asset paths (`/projects/selva-resort/landing/…`), so they work only
when served through halom.io, not directly at `danieltinker.github.io/halom-projects/…`.

## Updating a preview

Rebuild with the subpath as the base, then replace the folder and push:

```sh
SELVA_BASE=/projects/selva-resort/landing/ npm run build
```
