<template>
	<div class="container">

		<div class="row">
			<div class="col-8 text-center">
				<h3>I want...</h3>
			</div>
		</div>

		<div class="row">
			<div class="col-4 text-center">
				<router-link to="/new/that">
					<h2><strong>that</strong></h2>
				</router-link>
			</div>
			<div class="col4 text-center">
				<h2 class="col-12">
					{{ that }}
				</h2>
			</div>
			<div class="col-4">
				<img :src="img_that">
			</div>
		</div>

		<div class="row text-center">
			<h2 class="col-12">
				{{ preposition }}
			</h2>
		</div>

		<div class="row">
			<div class="col-4 text-center">
				<router-link to="/new/where">
					<h2><strong>where</strong></h2>
				</router-link>
			</div>
			<div class="col4 text-center">
				<h2 class="col-12">
					{{ where }}
				</h2>
			</div>
			<div class="col-4">
				<img :src="img_where">
			</div>
		</div>

		<div class="row">
			<button @click="run(that,where,size)" class="btn btn-primary" type="button">run</button>
		</div>

	</div>
</template>

<script>
	export default({
		data(){
			return{
				img_that: "",
				img_whare: "",
				that: "",
				where: "",
				size: "",
				preposition: ""
			}
		},
		created:function(){
			this.img_that = this.$parent.img_that
			this.img_where = this.$parent.img_where
			this.where = this.$parent.where
			this.that = this.$parent.that
			this.size = this.$parent.size
			this.preposition = this.$parent.preposition
		},
		methods: {
			run: function(that,where,size){
				alert(that+where+size)
			}
		},
		computed: {
		}
	})
</script>
