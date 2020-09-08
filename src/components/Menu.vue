<template>
<div class="flex-container">
    <div class="flex-item">
        <div class="">
            <table class="">
                <thead class="">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                    </tr>
                </thead>
                <tbody v-for="item in menuItems" :key="item['.key']">
                    <tr>
                        <td><strong>{{ item.name }}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option['.key']">
                        <td>{{ option.size }}</td>
                        <td>{{ option.price | currency}}</td>
                        <td><button class="" 
                                    type="button"
                                    @click="addToBasket(item, option)">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>      
    </div>  
      <div class="flex-item">
            <div v-if="basket.length > 0">
                <table class="">
                    <thead class="">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in basket" :key="item['.key']">
                        <tr>
                            <td>
                                <button class="" 
                                        type="button"
                                        @click="decreaseQuantity(item)">-</button>
                                <span>{{ item.quantity }}</span>
                                <button class="" 
                                        type="button"
                                        @click="increaseQuantity(item)">+</button>
                            </td>
                            <td>{{item.name}} {{item.size}}</td>
                            <td>{{ item.price * item.quantity | currency }}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: {{ total | currency }}</p>
                <button class="" @click="addNewOrder">Place Order</button>
            </div>
            <div v-else>
                <p>{{ basketText }}</p> 
            </div>  
        </div>

    </div>
</template>

<script>
export default {
     data(){
        return {
            basketText : 'Your basket is empty!',
            basket: [],
            menuItems: []
        }
    },
    computed: {
        total() {
                var totalCost = 0;
                for( var item in this.basket) {
                    var individualItem = this.basket[item];
                    totalCost += individualItem.quantity * individualItem.price;
                }
                return totalCost;
            }

    },
    methods : {
         addToBasket(item, option){
                this.basket.push({
                    name: item.name,
                    size: option.size,
                    price: option.price,
                    quantity: 1
                })
            },
            removeFromBasket(item){
                this.basket.splice(this.basket.indexOf(item), 1);
            },
            decreaseQuantity(item) {
                item.quantity--;
                if (item.quantity == 0) {
                    this.removeFromBasket(item);
                }
            },
            increaseQuantity(item) {
                item.quantity++;
            },
            addNewOrder() {
                this.basket = []
                this.basketText = "Thank you, your order has been placed ! :)"
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
    .flex-container {
        display: flex;
        flex-direction:row;
}
    .flex-item {
        padding: 1%;
        font-weight: bold;
        text-align: center;
        }
</style>