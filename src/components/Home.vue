<template>
        <div id="home" >
             <div class="centered">
                <h2>Welcome to our website! We want you to have the best exprience possible</h2>
                <h3>ARE YOU READY TO PIZZA?</h3>
                <!-- <h4>{{'Try not to get too attached ' + userName}}</h4> -->
                <h4>{{'Try not to get too attached ' + (userName != '' ? userName : '')}}</h4> <!-- fara () -->
                <!-- <h4>Try not to get too attached</h4> -->
                    <button class="button" @click="goToMenu">Let's order!</button>
            </div>
        </div>
</template>


<script>
export default {
    data(){
        return {
            userName: "Arabela"
        }
    },   
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
    height: 400px;
    padding: 10%;
    }    
    .centered {    
    background: #eee;
    opacity: 0.7;    
    padding: 20px 0; 
    position: absolute;
    top: 50%; /*afecteaza potizia verticala */
    left:50%;
    transform: translate(-50%, -50%);
    }
    .button {
    zoom: 2;
    cursor: pointer;
    border: 1px solid #bbb;
    font: bold;
    text-decoration: none;
    white-space: nowrap;
    color: #555;
    }
</style>