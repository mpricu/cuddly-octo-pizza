<template>
  <header>
    <nav class="site-nav">
      <div class="logo">
        <a href="/" class="item">Cuddly Octo Pizza Store</a>
      </div>
      <ul>
        <li>
          <a class="item" v-bind:href="homeLink">Home</a>
        </li>
        <li>
          <a class="item">Menu</a>
        </li>
      </ul>
    </nav>
    <div class="actions" v-bind:title="title">
      <!-- <a class="signIn-link" v-if="!isLoggedIn">Log in</a> 
      <a class="signIn-link" v-if="isLoggedIn">Log out {{userName}}</a>-->

      <!-- <a class="signIn-link" v-if="!isLoggedIn">Log in</a> 
      <a class="signIn-link" v-else>Log out {{userName}}</a>-->

      <a class="signIn-link" v-if="isLoggedIn && numberOfOrders > 10">Log out Master {{userName}}</a>
      <a class="signIn-link" v-else-if="isLoggedIn && numberOfOrders <= 10">Log out {{userName}}</a>
      <a class="signIn-link" v-else>Log in</a>

      <!-- <a class="signIn-link" v-show="!isLoggedIn">Log in</a>
      <a class="signIn-link" v-show="isLoggedIn">Log out {{userName}}</a>-->
    </div>
  </header>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
      default: "Anonymous",
      /* este recomandat la declararea props sa folosim built-in prots validations,  */
    },
  },
  data() {
    return {
      title: "User's actions",
      isLoggedIn: true,
      numberOfOrders: 10,
      homeLink: "www.jerryspizza.ro",
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 10px 3px rgb(156, 156, 156);
}
header > nav {
  display: flex;
  flex-direction: row;
}
header > nav > .logo {
  font-size: 1.4rem;
  place-self: center;
  padding: 10px 20px;
}
header > nav > ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
}
header > nav > ul > li:not(:first-of-type)::before {
  content: "|";
  opacity: 0.4;
  padding-right: 10px;
}
.site-nav {
  display: flex;
  margin: 0;
  padding: 0;
}
.actions {
  margin-left: auto;
  display: flex;
  margin-right: 10px;
}
.signIn-link {
  color: #bb4a4a;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 0 10px;
}
</style>

