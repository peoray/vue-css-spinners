<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div :class="[classes, props.className]" :style="varStyle" id="dd">
		<div></div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, type CSSProperties } from 'vue'

export interface Props {
	className?: string
	color?: string
	size?: number
	style?: CSSProperties
}

interface Styles extends CSSProperties {
	'--rcs-circle-color'?: string
	'--rcs-circle-size'?: string
}

const props = defineProps<Props>()

const varStyle = ref<Styles>({
	...props.style,
	'--rcs-circle-color': props.color ? props.color : undefined,
	'--rcs-circle-size': props.size ? `${props.size}px` : undefined,
})

const baseClasses = 'rcs-circle'

const classes = computed(() => {
	const modifierClasses = []
	if (props.className) {
		modifierClasses.push(props.className)
	}
	return [baseClasses, modifierClasses]
})
// console.log(varStyle.value)
</script>

<style>
@import './circle.css';
</style>
