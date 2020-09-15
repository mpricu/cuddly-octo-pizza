<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div v-if="!showMenu" class="container">
      <Home @goToMenuAction="goToMenu" />
    </div>
    <div v-else class="container">
      <Menu class="item" />
      <ShoppingBasket class="item" />
      <Recipe />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import ShoppingBasket from "./components/ShoppingBasket";
import Recipe from "./components/Recipe";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Menu,
    ShoppingBasket,
    Recipe,
  },
  data() {
    return {
      showMenu: false,
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
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: arial, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}
.item {
  font-weight: bold;
  text-align: center;
}
</style>
