<template>
   <header class="site-header">  
    <nav class="site-nav">
      <ul>
      <a href="/" class="item">Cuddly Octo Pizza Store</a>
      <a class="item"> Home</a>
      <a class="item"> Menu</a>
      </ul>
    </nav>  
    <div class="actions">    
      <a  class="signIn-link">{{userName}}</a>
    </div>
</header>    
</template>

<script>
export default {
  data(){
    return {
      userName: 'Anonymous'
    }
  }
}
</script>

<style scoped>

  a {
    text-decoration: none;
    cursor: pointer;
  }
 .site-header {
  background: none;
  background: #ECEEEF;
  display: flex;
  font-size: 1em;
  padding: 40px 0; 

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
  margin-right: 10px;
}

.signIn-link {
  color: #62DEBE;
  font-size: 0.8rem;
  margin-left: 10px;
  text-transform: uppercase;
}


  /*
a {
  text-decoration: none;
  cursor: pointer;
}
 .header, .footer {
        background: #ECEEEF;
         padding: 40px 0; 
        font-size: 1em;
    } 
    */
</style>