import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Circle from '../Circle.vue'

describe('Ring Component Test Suites', async () => {
	it('mounts', () => {
		const wrapper = mount(Circle)

		expect(wrapper.exists()).toBe(true)
	})

	describe('props', () => {
		it('should have default props', () => {
			const wrapper = mount(Circle)
			const props = {
				className: undefined,
				color: undefined,
				size: undefined,
				style: undefined,
			}

			expect(wrapper.props()).toEqual(props)
			expect(wrapper.classes()).toContain('vcs-circle')
		})

		it('should accept custom className', async () => {
			const customClass = 'custom-class'
			const wrapper = mount(Circle, {
				props: {
					className: customClass,
				},
			})

			expect(wrapper.classes()).toContain(customClass)
		})

		it('should accept custom color', async () => {
			const customColor = 'red'
			const wrapper = mount(Circle, {
				props: {
					color: customColor,
				},
			})
			const style = await wrapper.attributes('style')

			expect(wrapper.html()).toContain('vcs-circle-color')
			expect(style).toContain(`--vcs-circle-color: ${customColor}`)
		})

		it('should accept custom size', async () => {
			const customSize = 64
			const wrapper = mount(Circle, {
				props: {
					size: customSize,
				},
			})
			const style = await wrapper.attributes('style')

			expect(wrapper.html()).toContain('vcs-circle-size')
			expect(style).toContain(`--vcs-circle-size: ${customSize}px`)
		})

		it('should accept custom styles', async () => {
			const customStyles = { backgroundColor: 'green', borderRadius: '50%' }
			const wrapper = mount(Circle, {
				props: {
					style: customStyles,
				},
			})
			const style = await wrapper.attributes('style')

			expect(style).toContain('background-color: green;')
			expect(style).toContain('border-radius: 50%;')
		})
	})

	describe('rendering', () => {
		it('should render a div with the correct default class', () => {
			const wrapper = mount(Circle)

			expect(wrapper.get('div').classes()).toContain('vcs-circle')
		})

		it('should render a div with custom class', async () => {
			const customClass = 'custom-class'
			const wrapper = mount(Circle, {
				props: {
					className: customClass,
				},
			})

			expect(wrapper.get('div').classes()).toContain(customClass)
		})

		it('should render a div with custom size', async () => {
			const customSize = 64
			const wrapper = mount(Circle, {
				props: {
					size: customSize,
				},
			})

			expect(wrapper.get('div').attributes('style')).toContain(
				`--vcs-circle-size: ${customSize}px`
			)
		})

		it('should render a div with custom color', async () => {
			const customColor = 'red'
			const wrapper = mount(Circle, {
				props: {
					color: customColor,
				},
			})

			expect(wrapper.get('div').attributes('style')).toContain(
				`--vcs-circle-color: ${customColor}`
			)
		})
	})
})
