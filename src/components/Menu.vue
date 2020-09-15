<template>
    <div class="card-container">
        <div>
           <h3><strong> Please choose from our delicios menu! </strong> </h3>
        </div>
        <div class="table">
            <div class="row">Size</div>
            <div class="row">Price</div>
            <div class="row">Add to basket</div>
        </div>
        <!-- <tbody v-for="item in menuItems" :key="item['.key']"> -->       
        <div v-for="item in menuItems" :key="item.id">
            <div class="leaf" v-show="item.vegan"></div>
            <div class="row" :class="{ veganFood : item.vegan}">
                <strong>{{ item.name }}</strong>
            </div>
            <div class="table" v-for="option in item.options" v-bind:key ="option.id">
                <div class="row">
                    {{ option.size }}
                </div>
                <div class="row">
                    {{ option.price | currency}}
                </div>
                <div class="row">
                    <button type="button"
                       @click="addToBasket(item, option)"> +</button>
                   <!-- <button type="button"
                       @click="addToBasket(item, option)" class="button"> Add to basket</button>
                       <button type="button" class="button">Rate</button> -->
                </div>
            </div>
        </div> 
    </div> 
</template>

<script>        
// import Review from './Review'

export default {
    components:{
    },
     data(){
        return {
            basketText : 'Your basket is empty!',
            menuItems: [],
            leafClass: 'leaf'
        }
    },
    methods : {
         addToBasket(item, option){
             this.$root.$emit("addToBasket", item, option)
             console.log('emitted event')              
            },

         addReview(item){
             item.reviews.push(item)
         }   

    },
    created: function() {
        fetch("http://localhost:3000/menuItems")
            .then(response => response.json())
            .then(data => (this.menuItems = data));
    }
}
</script>

<style scoped>
.card-container {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  /* transition: 0.3s; */
  width: 90%;
  border-radius: 5px;
  padding: 1em;
   /* Relative to the font-size of the element (2em means 2 times the size of the current font) */
}
.table {
  display: flex;
  flex-flow: row wrap;   /* flex-direction and flex-wrap */
}
 .row {
  width: calc(100% / 3);
  text-align: center;
  padding-top: 3%;
 }
  .veganFood {
    margin: 1em;
    padding: .5em;
    border: 1px dotted green;    
    color: green;
}
.leaf { 
  width: 20px; height: 20px;
  background-color: #A0DE21; 
  /* -moz-border-radius: 20px 0px;
  -webkit-border-radius: 20px 0px; */
  border-radius: 20px 0px;
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding:  3px 10px;
    text-align: center;
    text-decoration: none;
	cursor: pointer;
    font-size: 13px;
    margin-right: 0.5em;
    }
   .review {
    background: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0; 
    } 
</style>
