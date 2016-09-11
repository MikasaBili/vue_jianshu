<template>
	<div class="vue-navbar-top">
		<a href="" @mouseleave="evtSideLeave" @mouseenter="evtSideEnter($index,item.title)" class="vnt-a" v-bind:class="{'vnt-a-hover': item.title === '首页' }" v-for="item in items">{{ item.title }}</a>
		<div class="vue-navbar-right" :style="{top: Top + 'px'}" v-show="Status" transition="expand">
			<div class="tooltip"></div>
			<div class="inner">{{ Title }}</div>
		</div>
	</div>
	<div class="vue-navbar-down">
		&nbsp;
	</div>
</template>
<script>
	export default{
		data(){
			return {
				Status:false,
				Top:'',
				Title:'',
				items:[
				{title:'首页'},
				{title:'专题'},
				{title:'Demo'},
				{title:'正在施工...'},
				],
			}
		},
		methods: {
           evtSideLeave:function () {
           	 this.Status = false;
           },
           evtSideEnter:function (e,title) {
             this.Top = e*45+8;
             this.Title = title;
           	 this.Status = true;
           }
        }

	}
</script>
<style lang='less'>
 .vue-navbar-w{
	width: 170px;
	background: #2a2a2a;
	position: fixed;
	z-index: 1000;
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
.vue-navbar-right{
	position: absolute;
	left: 175px;
	opacity: 0.8;
	padding-left: 5px;
	& .tooltip{
		top:50%;
		left: 0;
		margin-top: -5px;
		border-width: 5px 5px 5px 0;
		border-right-color: #000;
		position: absolute;;
		width: 0;
		height: 0;
		border-left-color: transparent;
		border-top-color: transparent;
		border-bottom-color: transparent;
		border-style: solid;	
	}
	& .inner{
		color:#fff;
		padding: 8px;
		text-align: center;
		border-radius: 4px;
		white-space:nowrap;
		background-color: #000;
	}
}

.expand-transition{
	transition:all .3s ease;
	left: 175px;
}
.expand-enter, .expand-leave{
    opacity: 0;
    left: 170px;
}
</style>