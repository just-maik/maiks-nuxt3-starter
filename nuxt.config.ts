// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        'nuxt-seo-kit'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device',
        '@nuxt/image',
        '@vueuse/nuxt',
        'nuxt-umami',
        'nuxt-svgo'
    ],
    app: {
        head: {
            titleTemplate: '%pageTitle %titleSeparator %siteName'
        }
    },
    unhead: {
        ogTitleTemplate: "%s | Maik's Starter",
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://localhoost:3000',
            siteName: 'Maiks Starter',
            siteDescription: 'Welcome to maiks starter!',
            language: 'en',
            titleSeparator: '|'
        }
    },
    umami: {
        enable: false,
        autoTrack: true,
        doNotTrack: false,
        cache: false,
        domains: 'mywebsite.com,mywebsite2.com',
        websiteId: 'your-website-id',
        scriptUrl: 'https://path.to.umami.js',
      }
})
