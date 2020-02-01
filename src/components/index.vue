<template>
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<h2>topict</h2>
			</div>
		</div>

		<div class="row">
			<div class="col-12 text-center">
				<button class="make_new btn" @click="new_topi">新規作成</button>
			</div>
		</div>

		<div class="row">
			<div class="col-12 text-center">
				<button class="make_new btn" @click="gallery">ギャラリー</button>
			</div>
		</div>
	</div>

</template>

<script>
	import irasutoya from "../assets/irasutoya.json"
	export default({
		methods: {
			new_topi: function(){
				this.$router.push("/new")
			},
			gallery: function(){
				this.$router.push("/gallery")
			}

		},
	})
</script>

<style>
</style>
