<template>
	<div class="wrap-all">
		<navbar></navbar>
		<div class="container">

			<div class="row">
				<div class="col-8 text-center">
					<h3>I want...</h3>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<router-link to="/new/that">
						<h2 v-if="!img_that"><strong>that</strong></h2>
						<img :src="img_that" v-if="img_that">
					</router-link>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<router-link to="/new/where">
						<h2 v-if="!img_where"><strong>where</strong></h2>
					</router-link>
				</div>
				<div class="col">
					<h2>
						{{ preposition }}
					</h2>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<router-link to="/new/where">
						<img :src="img_where" v-if="img_where">
					</router-link>
				</div>
			</div>


		</div>
	</div>

</template>

<script>
import navbar from "./navbar.vue"
import Vue from "vue"

Vue.component("navbar",navbar)
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
			console.log(this.img_that != "" && this.img_where != "")
			if (this.img_that != "" && this.img_where != "") this.run()
		},
		mounted() {
			this.canvas = this.$refs.canvas
			this.context = this.canvas.getContext("2d")
			if (this.img_that != "" && this.img_where != "") this.run(this.that,this.where,this.size,this.preposition)
		},
		methods: {
			run: function(){
				this.$router.push("/result").catch(err => {})
			//	switch (preposition) {
			//		case "in":
			//			this.draw_x(100,100,500,this.img_where)
			//			this.draw_x(200,250,200,this.img_that)
			//			break
			//		case "on":
			//			this.draw_y(200,100,150,this.img_that)
			//			this.draw_y(100,250,250,this.img_where)
			//			break

				//}
			},
			draw_x: function(x,y,xsize,path){
				let ctx = this.context.canvas.getContext("2d");
				let img = new Image()
				img.src = path
				let ysize = img.height * xsize / img.width
				ctx.drawImage(img,x,y,xsize,ysize)
			},
			draw_y: function(x,y,ysize,path){
				let ctx = this.context.canvas.getContext("2d");
				let img = new Image()
				img.src = path
				let xsize = img.width * ysize / img.height
				ctx.drawImage(img,x,y,xsize,ysize)
			}
		},
		computed: {
		}
	})
</script>

<style>
	img {
		max-height: 100%;
		width: auto;
	}
	.col{
		height: 20vh;
	}
</style>
