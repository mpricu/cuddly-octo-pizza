<template>
<div>
  <h1>Add to the menu your own pizza</h1>
<div class="table-container">
  <div class="flex-table" >
  <div class="flex-row">Topping</div>
  <div class="flex-row" >Quantity</div>
  <div class="flex-row" >Price</div>
  <div class="flex-row">Add</div>
  </div>
<div class="flex-table"  v-for="topping in toppings" :key="topping['.key']">
  <div class="flex-row" >{{topping.name}}</div>
  <div class="flex-row" >
    <button class="" 
      type="button"
       @click="decreaseQuantity(topping)">-</button>
       <span>{{ topping.quantity }}</span>
        <button class="" 
          type="button"
        @click="increaseQuantity(topping)">+</button>
  </div>
  <div class="flex-row" >{{topping.price | currency}}</div>
  <div class="flex-row" >
    <button class="" 
          type="button"
        @click="addTopping(topping)">{{topping.quantity * topping.price |currency}}</button>
     </div>
</div>
</div>
<button class="" 
          type="button"
        >Add to Menu</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            toppings: [],
            errorMessage : '',
            quantity: 0,
            selectedToppings: []
        }
    }, 
    
    methods: {
        decreaseQuantity(item) {
                if (item.quantity > 1) {
                  item.quantity--;
                }
            },
            increaseQuantity(item) {
                item.quantity++;
            },

            addTopping(topping){
                this.selectedToppings.push({
                  price: topping.price * topping.quantity,
                  name: topping.name
                })
            },

            //addCustomPizza(){
            //   let customPizza = {
            //     name : 'Custom pizza',
            //     description: 'My precious and taste pizza',
            //     options: [
            //       {
            //         size: "20 cm",
            //         price: 30
            //     },
            //     {
            //         size: "40 cm",
            //         price: 50
            //     }
            //     ]

            //   }
            //   const requestOptions = {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(customPizza)   /* { title: "Vue POST Request Example" }*/
            //   };
            // fetch("http://localhost:3000/menuItems", requestOptions)
            //   .then(response => response.json())
            //  /* .then(data => (this.postId = data.id)); */
         //}
    },
    created() {
         fetch("http://localhost:3000/toppings")
            .then(response => response.json())
            .then(data => ( this.toppings = data))
            .catch(error => {
              this.errorMessage = error;
              console.error("There was an error!", error);
              });
    }
    
}
</script>

<style scoped>
div {
  box-sizing: border-box;
}

.table-container {
  display: block;
  margin: 2em auto;
  width: 90%;
  max-width: 600px;
}

.flex-table {
  display: flex;
  flex-flow: row wrap;
  /*border-left: solid 1px  #1976D2 ; */
  transition: 0.5s;
}
.flex-row {
    /* background: #1976D2; */
    color: black;
    /* border-color: #1565C0; */
  }

  .flex-row {
  width: calc(100% / 4);
  text-align: center;
  padding: 0.5em 0.5em;
  /* border-right: solid 1px #1976D2;
  border-bottom: solid 1px  #1976D2; */
}
</style>