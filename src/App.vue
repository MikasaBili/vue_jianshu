<style>
  @import './assets/style/main.less';
</style>
<template>
  <div class="vue-navbar-w vue-height">
    <navbar></navbar>
  </div>
   <div class="vue-g vue-m-l">
  <div class="vue-grow-1 vue-height">
    <print></print>
  </div>
  <div class="vue-grow-4 vue-height">
    <main></main>
  </div>
   </div>
    <router-view></router-view>
</template>

<script>
   import navbar from './components/navbar'
   import main from './components/main'
   import print from './components/print'
   export default{
     components: {
      navbar,
      main,
      print
     }
   }
</script>
