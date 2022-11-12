export default {
	install(app) {
		const modules = import.meta.glob('./*.vue', { eager: true })
		Object.keys(modules).forEach((key) => {
			const name = key.replace(/(\.\/|\.vue)/g, '')
			app.component(name, modules[key].default)
		})
	}
}
