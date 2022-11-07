import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'

export default defineConfig({
	plugins: [vue()],
	css: {
		postcss: {
			plugins: [postcssImport, autoprefixer]
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'~@': resolve(__dirname, './src'),
			components: resolve(__dirname, './src/components')
		}
	}
})
