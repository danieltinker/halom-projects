# Halom — project previews

Static builds served at `halom.io/projects/…`. GitHub Pages hosts the files, and the halom.io
Vercel project proxies the paths to them, so a preview can be updated by pushing here
without redeploying the main site.

- `projects/selva-resort/landing/` — Selva Resort 3D site (concept preview by Halom)

## One-time setup

1. **GitHub Pages**: Settings → Pages → Build and deployment → Source: *Deploy from a branch* →
   Branch `main`, folder `/ (root)` → Save.
2. **halom.io `vercel.json`** (in the Halom site on the Mac, so later deploys keep it): add the
   redirect to the existing `redirects` list and a new `rewrites` list, then deploy the Halom site as usual:

```json
"redirects": [
  { "source": "/projects/selva-resort/landing", "destination": "/projects/selva-resort/landing/", "permanent": false }
],
"rewrites": [
  { "source": "/projects/selva-resort/landing/(.*)", "destination": "https://danieltinker.github.io/halom-projects/projects/selva-resort/landing/$1" }
]
```

The builds use relative asset paths, so each preview also works directly on GitHub Pages
(e.g. `https://danieltinker.github.io/halom-projects/projects/selva-resort/landing/`). The redirect
adds the trailing slash that relative paths need; Vercel matches sources strictly, so it can't loop.

## Updating a preview

Build with the default relative base (`npm run build`), replace the folder with `dist/`, and push.
