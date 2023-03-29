<template>
	<h1>This is your component!</h1>
	<div>
		<p>Did it work {{ message }} !!</p>
	</div>
</template>

<script setup lang="ts">
// import {  } from 'vue;
	defineProps<{
		message: String
	}>()
	

</script>

<style lang="postcss"></style>
