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
				<a class="vue-main-search" v-bind:class="{'vue-main-search-hover':search.status}">{{ search.item }}</a>
			</li>
		</ul>
		<ul class="clearfix vue-main-body-ul">
			<li class="clearfix" v-for="body in bodys">
				<img v-bind:src="body.link" alt="">
				<div style="padding-right:110px;">
					<p>
						<a href="" class="vue-body-li-author">{{ body.author }}</a> -
						<span class="vue-body-li-time">大约<span v-if="body.time>24">{{ Math.floor(body.time/24) }}天</span><span v-else> {{ body.time }}小时</span>之前</span>
					</p>
					<p>
						<a href="" class="vue-body-li-title">{{ body.item }}</a>
					</p>
					<p class="vue-body-li-foot">
						<span v-show="body.read != ''">阅读 {{ body.read}}</span><span v-show="body.comment != ''"> - 评论 {{ body.comment }}</span><span v-show="body.like != ''"> - 喜欢 {{ body.like}}</span><span v-show="body.spare != ''"> - 打赏 {{ body.spare }}</span>
					</p>
				</div>
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
          	bodys:[
          		{item:"当哈佛凌晨四点半是个谎言，我们的努力还有什么意义？",
          		link:require('src/assets/body01.jpg'),
          		author:"斜杠少年白",
          		time:"12",
          		read:"7477",
          		comment:"55",
          		like:"295",
          		spare:"2"
          		},
          		{item:"不成遍体鳞伤，怎么内心强大？",
          		link:require('src/assets/body02.jpg'),
          		author:"十两",
          		time:"9",
          		read:"6518",
          		comment:"78",
          		like:"677",
          		spare:"",
          		},
          		{item:"我心里，挥之不去的灵魂",
          		link:require('src/assets/body03.jpg'),
          		author:"冷眼",
          		time:"8",
          		read:"4274",
          		comment:"65",
          		like:"221",
          		spare:"1",
          		},
          		{item:"蝉的风",
          		link:require('src/assets/body04.jpg'),
          		author:"十二君子",
          		time:"3",
          		read:"894",
          		comment:"12",
          		like:"50",
          		spare:"2",
          		},
          		{item:"荒诞故事——狗邻居",
          		link:require('src/assets/body05.jpg'),
          		author:"路人",
          		time:"54",
          		read:"7958",
          		comment:"34",
          		like:"93",
          		spare:"",
          		},
          	{item:"当哈佛凌晨四点半是个谎言，我们的努力还有什么意义？",
          		link:require('src/assets/body01.jpg'),
          		author:"斜杠少年白",
          		time:"12",
          		read:"7477",
          		comment:"55",
          		like:"295",
          		spare:"2"
          		},
          		{item:"不成遍体鳞伤，怎么内心强大？",
          		link:require('src/assets/body02.jpg'),
          		author:"十两",
          		time:"9",
          		read:"6518",
          		comment:"78",
          		like:"677",
          		spare:"",
          		},
          		{item:"我心里，挥之不去的灵魂",
          		link:require('src/assets/body03.jpg'),
          		author:"冷眼",
          		time:"8",
          		read:"4274",
          		comment:"65",
          		like:"221",
          		spare:"1",
          		},
          		{item:"蝉的风",
          		link:require('src/assets/body04.jpg'),
          		author:"十二君子",
          		time:"3",
          		read:"894",
          		comment:"12",
          		like:"50",
          		spare:"2",
          		},
          		{item:"荒诞故事——狗邻居",
          		link:require('src/assets/body05.jpg'),
          		author:"路人",
          		time:"54",
          		read:"7958",
          		comment:"34",
          		like:"93",
          		spare:"",
          		},
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
		background: #fff;
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
	.vue-main-body-ul{
		margin-top: 20px;
		padding:15px 0 0 20px;
		& li{
			padding-bottom: 15px;
			margin-bottom: 15px;
			border-bottom:1px dashed #d9d9d9;
			& p{
				margin:8px 0;
			}
			& a.vue-body-li-author{
				color:#4094c7;
				&:hover{
					color:#075b8d;
				}
			}
			& span.vue-body-li-time{
				color:#717171;
			}
			& a.vue-body-li-title{
				font-size: 18px;
				font-weight: 600;
				line-height: 1.5;
			}
			& img{
				float: right;
				width: 100px;
				height: 100px;
				border-radius: 4px;
			}
			& p.vue-body-li-foot span{
				color:#999999;
			}
		}
		& li:last-child{
			border:none;
		}
	}
</style>