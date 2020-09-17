<template>
  <div id="app">
    <div class="header">
      <Header :userName="userName" />
    </div>
    <div v-if="!showMenu" class="container">
      <Home @goToMenuAction="goToMenu" />
    </div>
    <div v-else>
      <div class="container">
        <Menu class="item" />
        <ShoppingBasket class="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import ShoppingBasket from "./components/ShoppingBasket";
export default {
  name: "App",
  components: {
    Header,
    Home,
    Menu,
    ShoppingBasket,
  },
  data() {
    return {
      showMenu: false,
      userName: "Arabela",
    };
  },
  methods: {
    goToMenu() {
      this.showMenu = !this.showMenu;
    },
  },
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
  font-family: "Nunito", sans-serif;
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