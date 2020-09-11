<template>
  <div id="app">   
    <div>      
      <Header/> 
    </div>
    <div v-if="!showMenu">      
      <Home @goToMenuAction="goToMenu"/>
    </div>
      <div class="container">        
         <Menu class="item"/>
         <ShoppingBasket class="item"/>
      </div>
      <Recipe/>
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import ShoppingBasket from './components/ShoppingBasket'
import Recipe from './components/Recipe'

export default {
  name: 'App',
  components: {
    Header, Home, Menu, ShoppingBasket, Recipe
  },
  data(){
    return {
      showMenu: false
    }

  },
  methods: {
      goToMenu(){
        this.showMenu = !this.showMenu

      }

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
  justify-content: flex-start;
}
.item {
  font-weight: bold;
  text-align: center;
}
</style>
