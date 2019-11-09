<template>
	<div id="app">
		<Header />
		<router-view/>
	</div>
</template>

<script>
	import Header from './components/Header.vue'

	export default {
	name: 'app',
		components: {
			Header
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body {
		background-color: #f7f7f7;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		width: 50%;
		margin: 0 auto;
		height: 100vh;
	}
	@media only screen and (max-width: 600px) {
		#app {
			width: 80%;
		}
	}
</style>
