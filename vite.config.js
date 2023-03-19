import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import pxtovw from 'postcss-px-to-viewport'

const load_pxtovw = pxtovw({
	viewportWidth: 1920,
	viewportUnit: 'vw',
	selectorBlackList: ['home', 'nav-header', 'login'],
	include: /mobile/g,
	exclude: undefined
})

export default defineConfig({
	base: './',
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/assets/scss/var.scss";'
			}
		},
		postcss: {
			plugins: [
				postcssImport(),
				autoprefixer({
					overrideBrowserslist: [
						'last 4 Chrome versions',
						'last 4 Firefox versions',
						'last 4 Edge versions',
						'last 4 Safari versions',
						'last 4 Android versions',
						'last 4 ChromeAndroid versions',
						'last 4 FirefoxAndroid versions',
						'last 4 iOS versions'
					]
				}),
				load_pxtovw
			]
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~@': fileURLToPath(new URL('./src', import.meta.url)),
			'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			components: fileURLToPath(new URL('./src/components', import.meta.url))
		}
	},
	server: '0.0.0.0'
})
