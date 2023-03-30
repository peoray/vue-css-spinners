<template>
	<MyComponent
		color="red"
		className="tt ss"
		style="border: 20px solid yellow"
		size="200"
	/>
	<h1>Hello</h1>
</template>

<script>
// import { MyComponent } from 'vue-monorepo-lib' // -> registered via plugin in main.js

export default {
	name: 'App',
}
</script>

<style>
body {
	background-color: lightblue;
}
</style>
