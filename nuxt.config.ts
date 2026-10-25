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
    baseURL: import.meta.env.PROD ? "/ElDorado/" : "/",

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

  nitro: {
    preset: "github-pages",
  },
});
