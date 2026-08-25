# Angelica Romero Vergara — Landing

Sitio estático (Astro) de la landing de consultoría estratégica y comercial.

## Desarrollo

```bash
npm install
npm run dev       # servidor local con recarga
npm run build     # genera dist/ para producción
npm run preview   # sirve dist/ localmente
```

## Estructura

```
src/
  data/site.js          # enlaces y datos compartidos (Cal.com, correo, LinkedIn)
  layouts/BaseLayout.astro   # <head>, meta tags, JSON-LD, estilos globales
  components/            # una sección por archivo
  pages/index.astro      # arma la página y define sus meta tags + JSON-LD
public/assets/           # fotografía
```

Cada página nueva en `src/pages/` define su propio título, descripción y JSON-LD a través de `BaseLayout`, sin duplicar el `<head>`.

## Deploy

Listo para Netlify (o cualquier host estático): `npm run build` y se sube `dist/`.
