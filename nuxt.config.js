export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: "bags-shops",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css", "~/assets/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios.js", // Register the plugin
    "~/plugins/end-points.js", // Register the plugin
    "~/plugins/presist-state.js",
  ],

  // Environment variables
  env: {
    baseUrl: process.env.API_BASE_URL || "http://localhost:4000",
  },
  router: {
    middleware: ["auth"],
    base: "/",
  },
  // Authentication
  auth: {
    strategies: {
      local: {
        token: {
          property: "data.data.token",
          required: true,
          type: "Bearer",
          global: true,
          // maxAge: 60 * 60 * 24 * 15, // 15 days
          // autoExtend: false, // Disable auto extension
        },
        user: {
          property: "data",
        },
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "data.data.token",
          },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/me", method: "get" },
        },
      },
      // cookie: {
      //   /* Other options */
      //   cookie: {
      //     name: "XSRF-TOKEN",
      //   },
      //   endpoints: {
      //     csrf: {
      //       url: "/csrf-token",
      //       method: "get",
      //     },
      //     login: { url: "/auth/login", method: "post" },
      //     logout: { url: "/auth/logout", method: "post" },
      //     user: { url: "/auth/me", method: "get", propertyName: false },
      //   },
      // },
    },
    redirect: {
      login: "/auth/login",
      logout: "/auth/login",
      callback: "/auth/login",
      home: "/",
    },
  },
  // Axios configuration
  axios: {
    baseURL: process.env.API_BASE_URL || "http://localhost:4000", // Correctly reference the environment variable
    // withCredentials: true,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios", // Ensure Axios module is loaded
    "@nuxtjs/dotenv", // Make sure dotenv is loaded to use environment variables
    "@nuxtjs/auth-next",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
