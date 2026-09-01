export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  devtools: { enabled: true },

  app: {
    // pageTransition supprimé : appliquait opacity:0+blur au premier rendu (site 1 page = pas de navigation inter-pages)
    head: {
      htmlAttrs: { lang: 'fr' },
      link: [
        // Preload de la police du H1 hero (LCP) : démarre le téléchargement avant même le parsing du CSS
        { rel: 'preload', as: 'font', type: 'font/woff', href: '/fonts/arkipelago.woff', crossorigin: 'anonymous' },
      ],
    },
  },

  css: ['~/assets/scss/main.scss'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  nitro: {
    preset: 'static',
  },

  fonts: {
    // font-display:optional = le navigateur ne bloque pas le rendu pour attendre la police.
    // Premier chargement : polices système (fallback). Visites suivantes : polices custom depuis le cache.
    // Évite que les 6 fichiers woff2 retardent FCP/LCP sur connexion lente.
    families: [
      { name: 'Open Sans', weights: [400], styles: ['normal'], display: 'optional' },
      { name: 'Roboto', weights: [400], styles: ['normal'], display: 'optional' },
      { name: 'Lato', weights: [400, 700], styles: ['normal'], display: 'optional' },
      { name: 'Arvo', weights: [400], styles: ['normal'], display: 'optional' },
      { name: 'Yellowtail', weights: [400], styles: ['normal'], display: 'optional' },
    ],
  },
})
