import type { App } from 'vue'
import MyComponent from './Circle.vue'

function install(app: App) {
	app.component('MyComponent', MyComponent)
}

export { MyComponent, install }
