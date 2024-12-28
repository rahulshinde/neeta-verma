// https://nuxt.com/docs/api/configuration/nuxt-config

let meta = [
  { name: 'format-detection', content: 'telephone=no' },
  { name: 'format-detection', content: 'address=no' },
  { name: 'format-detection', content: 'email=no' },
  { name: 'format-detection', content: 'date=no' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1' },
]

export default defineNuxtConfig({
  compatibilityDate: "2024-11-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/sanity", "@nuxtjs/tailwindcss"],
  // 👇 Add these lines
  app: {
    head: {
      title: 'Neeta Verma',
      htmlAttrs: { lang: 'en' },
      meta: meta,
      link: [
        // { rel: 'stylesheet', href: 'https://use.typekit.net/uwv0htd.css' }
        { rel:"preconnect", href: "https://fonts.googleapis.com" },
        { rel:"preconnect", href: "https://fonts.googleapis.com", crossorigin: '' },
        {
          href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=IBM+Plex+Sans:wght@500;600;700&display=swap",
          rel: "stylesheet"
        }
      ]
    }
  },
  sanity: {
    projectId: "n1y1jiwk",
    dataset: "production",
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
   }
});