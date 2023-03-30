<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div :class="classes" :style="varStyle">
		<div></div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, type CSSProperties } from 'vue'

export interface Props {
	class?: string
	color?: string
	size?: number
	style?: CSSProperties
}

interface Styles extends CSSProperties {
	'--vcs-circle-color'?: string
	'--vcs-circle-size'?: string
}

const props = defineProps<Props>()

const varStyle = ref<Styles>({
	...props.style,
	'--vcs-circle-color': props.color || undefined,
	'--vcs-circle-size': props.size ? `${props.size}px` : undefined,
})

const clsx = (...classes: (string | undefined)[]): string =>
	classes.filter(Boolean).join(' ')

const baseClasses = 'vcs-circle'

const classes = computed(() => clsx(baseClasses, props.class))
</script>

<style>
@import './circle.css';
</style>
