<template>
	<div class="container" @click="suggest_hide">

		<div class="row form-group">
			<label class="col-2 when" for="when">いつ？: </label>
			<select id="when" class="when form-control col-4" v-model="when">
				<option>指定なし</option>
				<option>朝</option>
				<option>昼</option>
				<option>夜</option>
			</select>
			<div class="img-wrapper col-4">
				<img :src="img_when">
			</div>
		</div>

		<div class="row form-group">
			<label class="col-2 where" for="when">どこで？: </label>
			<input id="where" class="where form-control col-4" type="text" v-model="where" @keydown.enter="img_where">
			<div class="img-wrapper col-4">
				<img :src="img_where_src">
			</div>
		</div>

		<div class="row">
			<div class="col-6">
				<div class="row form-group">
					<label class="col-2 who" for="who">だれが?: </label>
					<input id="who" class="who form-control col-4" type="text" v-model="who" @keydown.enter="img_whowhat">
				</div>

				<div class="row form-group">
					<label class="col-2 what" for="what">なにを?: </label>
					<input id="what" class="what form-control col-4" type="text" v-model="what" @keydown.enter="img_whowhat">
				</div>
			</div>
			<div class="col-4">
				<img :src="img_whowhat_src">
			</div>
		</div>


		<div class="show row" id="show">
			<p class="text-center mx-auto">
				<span v-if="when != '指定なし'">	{{ when }}に <br> </span>
				<span>	{{ where }}で </span> <br>
				<span>	{{ who }}が </span> <br>
				<span>	{{ what }}した </span>
			</p>
		</div>

		<button id="run" class="btn btn-primary" @click="run()">実行</button>

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
		data() {
			return {
				who: "女性",
				when: "昼",
				where: "スーパーマーケット",
				what: "買い物",
				img_whowhat_src: "https://2.bp.blogspot.com/-hJ37sqD_zEc/WUdZDngUgsI/AAAAAAABFCI/3AtpDARtoqk_j7bh9RNec0wGa8mqsu6SgCLcBGAs/s800/shopping_supermarket_woman.png",
				img_where_src: "https://1.bp.blogspot.com/-ShmtBFzbO4w/XIJBQ4ZJnYI/AAAAAAABRzI/MDjiyrGETJkhLeXT7beqEu7U9k8_BBPTgCLcBGAs/s800/building_shoping_supermarket.png",
				search_list: [],
				seen: false,
				suggest_flag: "",
			}
		},
		methods: {
			run: function(){
				alert("眠たいから明日実装するぜ")
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
			img_where: function(event){
				console.log(event)
				if(event.keyCode != 13) return
				this.suggest_flag = "where"
				return this.search_img(this.where)
			},
			img_whowhat: function(event){
				if(event.keyCode != 13) return
				if(this.who == "" || this.what == "") return
				this.suggest_flag = "whowhat"
				return this.search_img(this.who,this.what)
			},
			suggest_hide: function(){
				this.seen = false
			},
			choice_img: function(item){
				console.log(item.image_url)
				if (this.suggest_flag == "whowhat") this.img_whowhat_src = item.image_url
				else this.img_where_src = item.image_url
			}

		},
		computed: {
			img_when: function() {
					switch(this.when) {
						case "昼":
							return "https://4.bp.blogspot.com/-6zjo3kUu7ko/VJ6XK2pggVI/AAAAAAAAqGg/skf8wO3bD_w/s800/time2_hiru.png"
							break
						case "夜":
							return "https://2.bp.blogspot.com/-BPXRyPZGjrA/VJ6XMHPQHXI/AAAAAAAAqG4/FosuyD-hKOQ/s800/time4_yoru.png"
							break
						case "朝":
							return "https://1.bp.blogspot.com/-aUcDO0aDnJE/VJ6XKq39VYI/AAAAAAAAqGc/Er8Qx7cAdZc/s800/time1_asa.png"
							break
					}
			},
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
