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
    baseURL:"/jamaya.github.io/",

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
