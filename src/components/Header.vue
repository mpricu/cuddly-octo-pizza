<template>
  <header>
    <nav class="site-nav">
      <div class="logo">
        <a href="/" class="item">Cuddly Octo Pizza Store</a>
      </div>
      <ul>
        <li>
          <a class="item">Home</a>
        </li>
        <li>
          <a class="item">Menu</a>
        </li>
      </ul>
    </nav>
    <div class="actions">
      <a class="signIn-link">{{userName}}</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userName: "Anonymous",
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

header > nav > .actions {
}

.site-nav {
  display: flex;
  margin: 0;
  padding: 0;
}
.actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.signIn-link {
  color: #bb4a4a;
  font-size: 0.8rem;
  text-transform: uppercase;

  padding: 0 10px;
}
</style>