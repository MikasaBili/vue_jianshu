<template>
	<div class="vue-navbar-img" :style="{backgroundImage:'url('+img+')'}"></div>
</template>

<script>
	export default{
		data(){
          return {
          	img: require('../assets/jianshu01.jpg')
          }
		}
	}
</script>

<style lang='less'>
	.vue-navbar-img{
		position: absolute;
		width: 100%;
		height:100%;
		background-position: center;
		background-size: cover;
	}
</style>