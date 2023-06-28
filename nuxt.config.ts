// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: ["nuxt-seo-kit"],
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/device",
		"@vueuse/nuxt",
		"nuxt-svgo",
	],

	app: {
		head: {
			titleTemplate: "%pageTitle %titleSeparator %siteName",
		},
	},
	runtimeConfig: {
		public: {
			siteUrl:
				process.env.NUXT_PUBLIC_SITE_URL || "https://localhoost:3000",
			siteName: "Maiks Starter",
			siteDescription: "Welcome to maiks starter!",
			language: "en",
			titleSeparator: "|",
		},
	},
	telemetry: false,
	devtools: true,
});
