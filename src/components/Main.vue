<template>
	<div class="vue-main-bottom" :style="{ width: mainWidth+'px'}">
		<ul class="clearfix ">
			<li  v-for="title in titles">
				<a class="vue-main-a" v-bind:class="{'vue-main-a-hover':title.status}" href="">{{title.item}}</a>
			</li>
		</ul>
	</div>
	<div>
		<ul class="clearfix vue-main-search-ul">
			<li class="clearfix" v-for="search in searchs">
				<a href="" class="vue-main-search" v-bind:class="{'vue-main-search-hover':search.status}">{{ search.item }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import EventListener from '../assets/js/EventListener.js'
	export default{
		data(){
          return {
          	 titles:[
          	 	{item:"发现",status:true},
          	 	{item:"2015年精选"}          	
          	],
          	searchs:[
          		{item:"热门",status:true},
          		{item:"新上榜"},
          		{item:"日报"},
          		{item:"七日热门"},
          		{item:"三十日热门"},
          		{item:"有奖活动"},
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
	}
	.vue-main-a{
		float: left;
		padding:15px;
		&:hover{
			background: #eee;
		};
	}
	.vue-main-a-hover{
		border-bottom: 2px solid #555555;
		margin-bottom: -2px;
	}
	.vue-main-search-ul{
		margin-top:45px;
		padding:15px 0 0 20px;
		& li{
			float: left;
			margin:10px 15px 10px 0;
			& a.vue-main-search{
				border:1px solid #d9d9d9;
				padding: 5px 10px;
				border-radius:13px;
			}
			& a.vue-main-search-hover{
				background: #e78170;
				color:#fff;
				border-color: #e78170;
			}
		}
	}
</style>