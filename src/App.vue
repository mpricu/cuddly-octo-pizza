<template>
  <div id="app">   
    <div>      
      <Header :userName ="userName"/> 
    </div>
    <div v-if="!showMenu">      
      <Home @goToMenuAction="goToMenu"/>
    </div>
      <div class="container">        
         <Menu class="item"/>
         <ShoppingBasket class="item"/>
      </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import ShoppingBasket from './components/ShoppingBasket'

export default {
  name: 'App',
  components: {
     Header, Home, Menu, ShoppingBasket
  },
  data(){
    return {
      showMenu: false,
      userName: 'Arabela'
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
  /* font-family: arial, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container { 
  padding: 0;
  padding-top: 3%;
  margin-top: 2%;
  /* margin: 0; */
  list-style: none;
  /*display: -webkit-box;
   display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex; 
  display: -webkit-flex;*/
  display: flex;
  justify-content: flex-start;
}
.item {
  font-weight: bold;
  text-align: center;
}
</style>
