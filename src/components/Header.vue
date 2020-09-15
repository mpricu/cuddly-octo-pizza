<template>
   <header class="site-header">  
    <nav class="site-nav">
      <ul>
      <a href="/" class="item">Cuddly Octo Pizza Store</a>
      <a class="item"> Home</a>
      <a class="item"> Menu</a>
      </ul>
    </nav>  
    <div class="actions" v-bind:title="title">    

      <!-- <a class="signIn-link" v-if="!isLoggedIn">Log in</a> 
      <a class="signIn-link" v-if="isLoggedIn">Log out {{userName}}</a> -->

      <!-- <a class="signIn-link" v-if="!isLoggedIn">Log in</a> 
      <a class="signIn-link" v-else>Log out {{userName}}</a> -->

      <!-- <a class="signIn-link" v-if="isLoggedIn && numberOfOrders > 10">Log out Master {{userName}}</a>
      <a class="signIn-link" v-else-if="isLoggedIn && numberOfOrders <= 10">Log out {{userName}}</a>      
      <a class="signIn-link" v-else>Log in</a>  -->

      <a class="signIn-link" v-show="!isLoggedIn">Log in</a> 
      <a class="signIn-link" v-show="isLoggedIn">Log out {{userName}}</a>

    </div>
</header>    
</template>

<script>
export default {
   props: {
        userName: {
            type: String,
            required: true,
            default: 'Anonymous'
            /* este recomandat la declararea props sa folosim built-in prots validations,  */
        }
            
    },
  data(){
    return {
      title: "User's actions",
      isLoggedIn: true,
      numberOfOrders: 10
    }
  }
}
</script>

<style scoped>

  a {
    text-decoration: none;
    cursor: pointer;
    color: green;
  }  
 .site-header {
  background: #ECEEEF;
  display: flex;
  padding: 30px 0; 
  align-items: center;
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
  /*default alignment for items inside the flexible container.*/ 
  margin-right: 10px;
}

.signIn-link {
  color: #62DEBE;
  font-size: 0.8em;
  margin-left: 10px;
  text-transform: uppercase;
}
</style>