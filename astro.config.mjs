import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.angelicaromero.cl",
  redirects: {
    "/servicios/taller-financiero-equipos-directivos": "/servicios/taller-financiero-para-quienes-deciden",
  },
});
