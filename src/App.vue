<template>
  <div id="app">
    hello
    <router-link :to="{name:'Home',params:{key:1}}">home</router-link>
    <router-link :to="{name:'page',params:{key:2}}">page</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
