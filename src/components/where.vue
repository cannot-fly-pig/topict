<template>
	<div class="container">

		<div class="row">
			<div class="col-8">
				<h2>where</h2>
			</div>
		</div>

		<div class="row from-group">
			<div class="col-8">
				<input class="from-control" type="text" v-model="where">
			</div>
		</div>

		<div class="row from-group">
			<div class="col-8">
				<select class="from-control" type="text" v-model="preposition">
					<option value="on">on</option>
					<option value="in">in</option>
					<option value="under">under</option>
					<option value="by">by</option>
				</select>
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
				where: "",
				preposition: "",
				search_list: [],
				seen: false,
				suggest_flag: "",
				isOpened: false,
			}
		},
		created: function(){
			this.where = this.$parent.where
			this.preposition = this.$parent.preposition
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
				this.$parent.where = this.where
				this.$parent.preposition = this.preposition
				this.search_img(this.where)
			},
			suggest_hide: function(){
				this.seen = false
			},
			choice_img: function(item){
				console.log(item.image_url)
				this.$parent.img_where = item.image_url
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
