<template>
  <div id="app">   
      <Header/> 
      <Home/>
      <Menu/>
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Header, Home, Menu
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: arial, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid silver;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}
.item {
  padding: 1%;
  font-weight: bold;
  text-align: center;
}
</style>
