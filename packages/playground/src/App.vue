<template>
	<MyComponent color="#d36ac2" size="200" className="mt-12 bg-slate-600" />
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
