<template>
  <div id="app">
    <div class="header">
      <Header :userName="userName" />
    </div>
    <div class="container" v-if="!showMenu">
      <Home @goToMenuPage="goToMenu" />
    </div>
    <div class="container" v-else>
      <Menu class="item" />
      <Cart class="item" />
    </div>
  </div>
</template>

<script>
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/ShoppingCart';

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Menu,
    Cart
  },
  data() {
    return {
      showMenu: false,
      userName: 'Spartacus Demo'
    };
  },
  methods: {
    goToMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
* {
  font-family: 'Nunito', sans-serif;
}
#app {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  flex: 0 0 60px;
}
.container {
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  overflow-y: auto;
  margin-top: 3%;
}
.item {
  font-weight: bold;
  text-align: center;
}
</style>
