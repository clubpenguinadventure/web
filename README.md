# web

Club Penguin Adventure's website

## To run a development server

Ensure a fairly recent version of node is installed, then

```
npm install
```

```
npm run dev
```

## To build HTML pages for use on a different web server

Run

```
npm run build
```

then copy the dist/ folder to your web server.

## Notes

The cdn/ folder is gitignored so we don't keep duplicate versions of old files, which could get confusing. This is exactly the same as the contents of the [assets](https://github.com/clubpenguinadventure/assets) repo, and `/cdn/` urls will be replaced with `https://media.cpadventure.net/assets/` on build.
