// import plugin from 'portal-vue'
import DefaultTheme from 'vitepress/theme'
import { install } from '@peoray/lib'
export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.use(install)
	},
}
