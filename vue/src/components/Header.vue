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
	.header {
		padding: 2rem;
		background-color: #FF5733
	}
	a {
		text-decoration: none;
		color: #2c3e50;
	}
	.router-link-active {
		color: beige;
	}
</style>
