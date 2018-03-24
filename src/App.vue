<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Pad from './components/Pad'

export default {
  name: 'App',
  components: {
    Pad
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Arial', 'Tahoma', sans-serif;
 /*  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #ffffff;
}
</style>
