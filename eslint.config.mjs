// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // Vue 3 supporte les fragments (plusieurs éléments racines) nativement
      'vue/no-multiple-template-root': 'off',
    },
  }
)
