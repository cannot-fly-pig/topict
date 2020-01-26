<template>
	<div class="container">

		<div class="row">
			<div class="col-8">
				<h2>That</h2>
			</div>
		</div>

		<div class="row from-group">
			<div class="col-8">
				<input class="from-control" type="text" v-model="that">
			</div>
		</div>

		<div class="row text-center">
			<button class="btn btn-primary" :class="{'open': isOpened}" @click="accordingToggle()">🔻options</button>
		</div>

		<div class="from-control" :class="{'open': isOpened}" v-show="isOpened" v-cloak>

			<div class="row">
				<label class="col-2" for="size">size: </label>
				<select id="size" class="col-4" type="text" v-model="size">
					<option value="指定なし">指定なし</option>
					<option value="大">大</option>
					<option value="中">中</option>
					<option value="小">小</option>
				</select>
			</div>

			<div class="row">
				<label class="col-2" for="shape">shape: </label>
				<input id="shape" class="col-4" type="text" v-model="shape">
			</div>

			<div class="row">
				<label class="col-2" for="color">color: </label>
				<input id="color" class="col-4" type="text" v-model="color">
			</div>

		</div>

		<div class="row">
			<button id="run" class="btn btn-primary" @click="run">run</button>
		</div>

	<div class="suggest-wrapper" v-if="seen">
			<div class="suggest" v-for="item in search_list" @click="choice_img(item)">
				<img :src="item.image_url" class="suggest_img">
				{{ item.name }}
			</div>
		</div>
	</div>

</template>

<script>
import irasutoya from "../assets/irasutoya.json"

	export default({
		data(){
			return {
				that: "",
				size: "",
				shape: "",
				color: "",
				search_list: [],
				seen: false,
				suggest_flag: "",
				isOpened: false,
			}
		},
		created: function(){
			this.that = this.$parent.that
			this.size = this.$parent.size
			this.shape = this.$parent.shape
			this.color = this.$parent.color
		},
		methods: {
			accordingToggle: function(){
				this.isOpened = !this.isOpened
			},
			search_img: function(a,b){
				let kouho = irasutoya.filter(function(item,index){
					if (b){
						if ((item.name).indexOf(a) >= 0 && (item.name).indexOf(b) >= 0) return true;
					}else{
						if ((item.name).indexOf(a) >= 0 ) return true;
					}
				})
				this.seen = true
				console.log(kouho)
				return this.search_list = kouho
			},
			run: function(){
				this.$parent.that = this.that
				this.$parent.size = this.size
				this.$parent.shape = this.shape
				this.$parent.color = this.color
				this.search_img(this.that)
			},
			suggest_hide: function(){
				this.seen = false
			},
			choice_img: function(item){
				console.log(item.image_url)
				this.$parent.img_that = item.image_url
				this.$router.push("/new")
			}
		}
	})
</script>

<style>
	.row {
			margin-bottom: 15px;
		}
	.where, .who, .when, .what {
			margin-top: auto;
			margin-bottom: auto;
		}
	
		div.col-4 > img {
			max-width: 60%;
			margin-top: auto;
			margin-bottom: auto;
		}
	
	.suggest-wrapper {
		width: 70%;
		height: 70%;
		position: absolute;
		top: 10%;
		left: 15%;
		z-index: 1;
		background-color: white;
		border: 1px black solid;
		overflow: scroll;
	}
	.suggest {
		height: 15%;
		border: 1px black solid;
	}
	.suggest_img {
		max-height: 100%;
	}
</style>
