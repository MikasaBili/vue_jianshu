<style>
  @import './assets/style/main.less';
</style>
<template>
  <div class="vue-navbar-w vue-height">
    <navbar></navbar>
  </div>
   <div class="vue-m-l clearfix">
  <div class="vue-print-fiexd vue-height">
    <print></print>
  </div>
  <div class="vue-height vue-main-left clearfix">
    <main></main>
  </div>
   </div>
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
