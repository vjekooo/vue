<template>
	<div class="header">
		<h1>This is header</h1>
		<nav class="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/contact">Contact</router-link>
        </nav>
	</div>
</template>

<script>
	export default {
		name: 'Header',
	}
</script>

<style scoped>
</style>
