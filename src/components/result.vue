<template>
	<div class="container">
		<div class="result" ref="result">
			<img :src="img_that" class="img_that">
			<img :src="img_where" class="img_where">
		</div>

		<div class="row">
			<div class="col-6">
				<button id="edit" class="btn btn-primary edit" @click="edit">編集</button>
			</div>
			<div class="col-6">
				<button id="done" class="btn btn-primary done">完了</button>
			</div>
		</div>
	</div>
</template>

<script>
import interact from 'interactjs'

	export default({
		data(){
			return{
				img_that: "",
				img_whare: "",
				size: "",
				preposition: "",
				img_that: "",
				img_where: "",
				result_height: 0,
				result_width: 0
			}
		},
		created: function(){
			this.img_that = this.$parent.img_that
			this.img_where = this.$parent.img_where
		},
		mounted: function(){
			this.result_width = window.innerWidth * 0.5
			this.result_height = this.result_width * 5 / 7
			this.$refs.result.style.width = String(this.result_width) + "px"
			this.$refs.result.style.height = String(this.result_height) + "px"
			console.log(this.$refs.result.style)
		},
		methods: {
			drug_init: function(element){
				interact(element)
					.draggable({
						inertia: false,
						restrict: {
							restriction: ".result",
							endOnly: false,
							elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
						},
						onmove: function(event){
      // dragされている要素
							var target = event.target;
							// data属性から今の位置を取得して、移動分を足す
							var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
							var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
							// 位置を変更
							target.style.webkitTransform =
								target.style.transform =
									'translate(' + x + 'px, ' + y + 'px)';
							// 位置をdata属性に保持
							target.setAttribute('data-x', x);
							target.setAttribute('data-y', y);
						},
						// call this function on every dragend event
						onend: function (event) {
				　　　　　　　　　　// 終了したときの処理
						}
					})
			},
			edit: function(){
				this.drug_init(".img_that")
				this.drug_init(".img_where")
			}
		}
	})
</script>

<style>
	.result {
		border: dotted 1px black;
	}
	.img_that {
		height: 50%;
		z-index: 1;
	}
	.img_where {
		height: 50%;
		z-index: 0;
	}
</style>
