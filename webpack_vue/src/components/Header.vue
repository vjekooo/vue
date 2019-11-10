<template>
	<header>
		<h1>This is header</h1>
		<nav class="nav">
            <router-link to="/" exact >Home</router-link> |
            <router-link to="/contact" exact >Contact</router-link>
        </nav>
	</header>
</template>

<script>
	export default {
		name: 'Header',
	}
</script>

<style scoped>
	header {
		padding: 2rem;
		background-color: #FF5733
	}
	a {
		text-decoration: none;
		color: #2c3e50;
	}
	.router-active {
		color: beige;
	}
</style>
