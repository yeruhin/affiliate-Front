<template>
  <div id="app">
    <home-page/>
  </div>
</template>

<script>
import HomePage from './pages/HomePage'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F2f2f2;
  min-height: 100vh;
  width: 100%;
  padding-top: 100px;
}
</style>
