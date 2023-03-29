<template>
	<div :class="classes" :style="varStyle">
    <div></div>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Styles } from './types';

	const props = defineProps<{
		color: String,
		size: String,
		style: String,
		className: String
	}>()


</script>

<style>
@import './circle.css'

</style>
