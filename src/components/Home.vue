<template>
        <div id="home">
             <div class="centered">
                <h2>Welcome to our website! We want you to have the best exprience possible</h2>
                <h3>ARE YOU READY TO PIZZA?</h3>
                <h4>Try not to get too attached</h4>
                    <button class="button" @click="goToMenu">Let's order!</button>
            </div>
        </div>
</template>


<script>
export default {
    
    methods: {
        goToMenu() {
            this.$emit('goToMenuAction');
        }
    }
    
}
</script>


<style scoped>
   #home {
    background: url("../assets/home.jpg");
    padding: 50%;
    background-repeat: no-repeat;
    background-size: contain;
      }
    .background {
    background: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0; 
    }
    .centered {    
    background: #eee;
    opacity: 0.7;    
    padding: 20px 0; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    .button {
    display: inline-block;
    zoom: 2;
    cursor: pointer;
    border: 1px solid #bbb;
    font: bold 13px arial, helvetica, sans-serif;
    text-decoration: none;
    white-space: nowrap;
    color: #555;
    }
</style>