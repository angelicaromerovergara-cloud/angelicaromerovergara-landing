import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://angelicaromero.cl",
  // Redirects 301 del renombre de servicios confirmado 1-sep-2026
  // (ver Memoria_ARV.md). Los dos slugs viejos del Taller apuntan directo
  // al final, sin encadenar saltos.
  redirects: {
    "/servicios/diagnostico-estrategico-comercial": "/servicios/claridad-estrategica",
    "/servicios/consultoria-estrategica-canvas": "/servicios/evolucion-estrategica-del-negocio",
    "/servicios/revision-rendicion-cuentas-resolucion-2-2026": "/servicios/rendicion-segura-fondos-publicos-resolucion-2-2026",
    "/servicios/taller-financiero-equipos-directivos": "/servicios/taller-finanzas-para-tomar-decisiones",
    "/servicios/taller-financiero-para-quienes-deciden": "/servicios/taller-finanzas-para-tomar-decisiones",
  },
});
