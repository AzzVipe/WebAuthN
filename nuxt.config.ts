// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],
	devtools: { enabled: false },
	runtimeConfig: {
		public: {
			appId: "application-0-ggxan",
			serverApiKey:
				"vEvBuBGRdKQFJdzuzJlncTzT2Ro9kLt1QZB6u4DfnpNGgWgKQFMSOe5XuZTnaV3a",
			rpId: "localhost",
			rpName: "abcd",
			rpProtocol: "http",
			db: "db1",
		},
	},
});
