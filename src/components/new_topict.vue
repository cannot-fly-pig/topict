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

		<canvas height="500px" width="700px" class="canvas" id="canvas" ref="canvas"></canvas>

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
	.canvas {
		display: none;
	}
</style>
