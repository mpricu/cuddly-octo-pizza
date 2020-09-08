<template>
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in basket" :key="item['.key']">
                        <tr>
                            <td>
                                <button class="btn btn-sm btn-outline-success" 
                                        type="button"
                                        @click="decreaseQuantity(item)">-</button>
                                <span>{{ item.quantity }}</span>
                                <button class="btn btn-sm btn-outline-success" 
                                        type="button"
                                        @click="increaseQuantity(item)">+</button>
                            </td>
                            <td>{{item.name}} {{item.size}}</td>
                            <td>{{ item.price * item.quantity | currency }}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: {{ total | currency }}</p>
                <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
            </div>
            <div v-else>
                <p>{{ basketText }}</p> 
            </div>  
        </div>
</template>