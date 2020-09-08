<template>
        <div class="">
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
</template>

<script>
export default {
    data(){
        return {
            basketText : 'Your basket is empty!',
            basket: []
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
    // mounted() {

    // }
    mounted : function(){
        this.$root.$on('addToBasket', (item, option) => {
            console.log('listen event')
             this.basket.push({
                    name: item.name,
                    size: option.size,
                    price: option.price,
                    quantity: 1
                })
        })
         // Code that will run only after the
        // entire view has been rendered
    }
    
}
</script>