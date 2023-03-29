<template>
	<div :class="[classes, props.className]" :style="varStyle">
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
	'--rcs-circle-color': props.color || undefined,
	'--rcs-circle-size': props.size ? `${props.size}px` : undefined,
	...props.style,
})

const baseClasses = 'rcs-circle'

const classes = computed(() => {
	const modifierClasses = []
	if (props.className) {
		modifierClasses.push(props.className)
	}
	return [baseClasses, modifierClasses]
})
</script>

<style>
@import './circle.css';
</style>
