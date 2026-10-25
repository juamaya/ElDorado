import tailwindcss from "@tailwindcss/vite";

const env = (
  globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }
).process?.env;

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
    baseURL: env?.NUXT_APP_BASE_URL || "/",

    head: {
      title: "El Dorado | Cerveceria",
      meta: [
        {
          name: "description",
          content:
            "Disfruta de la mejor cerveza, tapas y buenos momentos en La Cerveceria - Bar.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "favicon.ico",
        },
      ],
    },
  },
});
