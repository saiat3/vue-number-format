const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue Number Format',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'google-site-verification', content: 'Tf6UVeu-ZmZtGqB5tdcYymZ79101gyGKcpzqwWhDb1U' }]
  ],

  // Specify the port to use for the dev server.
  port: 8081,

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  // base: '/vue-number-format/',
  themeConfig: {
    editLinks: true,
    repo: 'coders-tm/vue-number-format',
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: true,
    sidebar: [
      {
        text: 'Guide',
        link: '/guide'
      },
      {
        text: 'Config Reference',
        link: '/config'
      },
      {
        text: 'Examples',
        link: '/examples'
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/register-components',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-76508942-4'
      }
    ],
  ]
}