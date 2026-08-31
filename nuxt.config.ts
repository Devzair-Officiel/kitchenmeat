// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate gèle les comportements Nitro/h3 à une date donnée.
  // Utile pour éviter des changements de comportement lors des mises à jour
  // de dépendances Nitro. Valeur : date de la dernière révision du projet.
  compatibilityDate: '2025-01-01',

  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'fr' },
    },
  },

  css: ['~/assets/scss/main.scss'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  // Génération statique : aucune fonctionnalité serveur requise
  nitro: {
    preset: 'static',
  },

  fonts: {
    families: [
      { name: 'Open Sans', weights: [400], styles: ['normal'] },
      { name: 'Roboto', weights: [400], styles: ['normal'] },
      { name: 'Lato', weights: [400, 700], styles: ['normal'] },
      { name: 'Arvo', weights: [400], styles: ['normal'] },
      { name: 'Yellowtail', weights: [400], styles: ['normal'] },
    ],
  },
})
