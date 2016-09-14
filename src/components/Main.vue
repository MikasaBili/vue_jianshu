<template>
	<div class="vue-main-bottom" :style="{ width: mainWidth+'px'}">
		<ul class="clearfix ">
			<li  v-for="title in titles">
				<a v-link="{name:title.link}" @click="changeLink(title.item)" class="vue-main-a" v-bind:class="{'vue-main-a-hover':title.item == Status}">{{title.item}}</a>
			</li>
		</ul>
	</div>
	<router-view>
	</router-view>
</template>

<script>
	import EventListener from '../assets/js/EventListener.js'
	export default{
		data(){
          return {
          	Status:"发现",
          	titles:[
          	 	{item:"发现",link:"mainfind"},
          	 	{item:"2015年精选",link:"mainchoice"}          	
          	],
          	mainWidth: (document.body.clientWidth - 170)*0.75 <= 1000 ? (document.body.clientWidth - 170)*0.75:1000
          }
		},
		methods:{
			changeWidth:function () {
				let clientWidth = (document.body.clientWidth - 170)*0.75;
				if (clientWidth > 1000) {
				this.mainWidth = 1000;
				}else{
				this.mainWidth = clientWidth;	
				}
			},
			changeLink:function	(title){
				this.Status = title
			}
		},
		ready() {
     		EventListener.listen(window, 'resize', this.changeWidth)
    	}
	}
</script>

<style lang='less'>
	.vue-main-bottom{
		border-bottom: 2px solid #d9d9d9;
		padding-left: 20px;
		position:fixed;
		background: #fff;
	}
	.vue-main-a{
		float: left;
		padding:15px;
		&:hover{
			background: #eee;
		}
	}
	.vue-main-a-hover{
		border-bottom: 2px solid #555555;
		margin-bottom: -2px;
	}
</style>