// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

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
    head: {
      title: "El Dorado | Cerveceria",
      meta: [
        {
          name: "description",
          content:
            "Disfruta del mejor café, tapas y buenos momentos en La Taza Café-Bar.",
        },
      ],
    },
  },
});
