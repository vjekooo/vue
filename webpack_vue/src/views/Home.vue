
<template>
	<div class="home">
		<div class="text">
			<h3>Title</h3>
			<p>
				How much sand will the hand hold?
			</p>
		</div>
		<img src="../assets/images/dune.jpg" />
	</div>
</template>

<script>
	export default {
		name: "Home",
	};
</script>

<style scoped>
	.home {
		height: 100%;
		background-color: #FFC300;
		padding-top: 1rem;
		position: relative;
	}
	.text {
		position: absolute;
		top: 20px;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
	}
	h3 {
		margin-bottom: 2rem;
	}
	img {
		width: 100%;
		opacity: .4;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: 100vh;
	}
</style>
