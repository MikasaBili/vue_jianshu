<template>
	<div class="vue-navbar-top">
		<a href="" class="vnt-a" v-bind:class="{'vnt-a-hover': item.title === '首页' }" v-for="item in items">{{ item.title }}</a>
	</div>
	<div class="vue-navbar-down">
		&nbsp;
	</div>
</template>
<script>
	export default{
		data(){
			return {
				items:[
				{title:'首页'},
				{title:'专题'},
				{title:'Demo'},
				{title:'正在施工...'},
				],
				
			}
		},
		methods: {
           
        }

	}
</script>
<style>
.vue-navbar-w{
	width: 170px;
	background: #2a2a2a;
	position: fixed;
}
.vnt-a{
	padding: 10px 15px;
	text-align: left;
	color:#999999;
	display: block;
	font-size:14px;
	line-height: 25px;
}
.vnt-a-hover{
	background: #e78170;
	text-shadow:0 1px 0 #de533a;
	color:#fff;
}
.vue-navbar-down{
	position: absolute;
	bottom: 0;
}
.vnt-a:hover{
	background: #f49484;
	color:#fff;
}
</style>