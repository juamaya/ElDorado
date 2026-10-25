// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const baseURL =  (globalThis as typeof globalThis & {
      process?: { env?: Record<string, string | undefined> };
    } ).process?.env?.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    baseURL,

    head: {
      title: "El Dorado | Cerveceria",
      meta: [
        {
          name: "description",
          content:
            "Disfruta de la mejor cerveza, tapas y buenos momentos en La Cerveceria - Bar.",
        },
      ],
    },
  },
});
