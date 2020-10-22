<template>
    <div id="app">
        <div v-if="cartItems.length > 0">
            <div class="title">Shopping Cart</div>

            <v-data-table
                style="position: relative;"
                :headers="headers"
                :items="cartItems"
                :items-per-page="5"
                class="elevation-1"
            >
                <template v-slot:item.actions="{ item }">
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="deep-orange darken-2"
                        @click="decreaseNumber(item)"
                    >
                        <v-icon dark>
                            mdi-minus
                        </v-icon>
                    </v-btn>
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="green"
                        @click="increaseNumber(item)"
                    >
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                    <!-- <v-icon style="color:red;" @click="decreaseNumber(item)">
                        mdi-minus-circle
                    </v-icon>
                    <v-icon style="color:green;" @click="increaseNumber(item)">
                        mdi-plus-circle
                    </v-icon> -->
                </template>
                <template #item.price="{item}">
                    {{ item.price | currency }}
                </template>
                <template #item.cost="{item}">
                    {{ (item.quantity * item.price) | currency }}
                </template>
                <template slot="footer">
                    <v-btn
                        color="red darken-1"
                        style="position: absolute; left: 10px; bottom: 10px; color:white"
                        @click="deleteCart()"
                    >
                        <v-icon left>
                            mdi-delete
                        </v-icon>
                        Clear cart
                    </v-btn>
                </template>
            </v-data-table>

            <div>
                <div class="order pink--text">
                    <p>Order total: {{ total | currency }}</p>
                </div>

                <div>
                    <v-btn color="primary" @click="placeOrder"
                        >Place Order</v-btn
                    >
                </div>
            </div>
        </div>
        <div class="title" v-else>
            <p>{{ cartEmptyText }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            cartEmptyText: 'Your shopping cart is empty!',
            // pagination: {},
            // selected: [],
            headers: [
                {
                    text: 'Pizza Name',
                    value: 'name',
                    align: 'center',
                    class: 'primary--text subtitle-1'
                },
                {
                    text: 'Size',
                    value: 'size',
                    align: 'center',
                    class: 'primary--text subtitle-1'
                },
                {
                    text: 'Quantity',
                    value: 'quantity',
                    align: 'center',
                    class: 'primary--text subtitle-1'
                },
                {
                    text: 'Modify quantity',
                    value: 'actions',
                    align: 'center',
                    class: 'primary--text subtitle-1'
                },
                {
                    text: 'Price',
                    value: 'price',
                    align: 'center',
                    class: 'primary--text subtitle-1'
                },
                {
                    text: 'Total',
                    value: 'cost',
                    align: 'center',
                    class: 'primary--text subtitle-1'
                }
            ]
        };
    },
    computed: {
        total() {
            let totalCost = 0;
            for (let item in this.cartItems) {
                let individualItem = this.cartItems[item];
                totalCost += individualItem.quantity * individualItem.price;
            }
            return totalCost;
        },
        ...mapState('menuModule', ['cartItems']),
        pages() {
            if (
                this.pagination.rowsPerPage == null ||
                this.pagination.totalItems == null
            )
                return 0;

            return Math.ceil(
                this.pagination.totalItems / this.pagination.rowsPerPage
            );
        }
    },
    methods: {
        ...mapActions('menuModule', [
            'increaseQuantity',
            'decreaseQuantity',
            'resetCartState'
        ]),

        placeOrder() {
            this.cartItems = [];
            this.cartEmptyText = 'Thank you for your order!';
        },
        increaseNumber(item) {
            this.increaseQuantity(item);
        },

        decreaseNumber(item) {
            this.decreaseQuantity({ item });
        },
        deleteCart() {
            this.resetCartState();
        }
    }
};
</script>

<style>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    /* font-weight: bold !important; */
    font-size: 16px !important;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    font-size: 18px !important;
}

.table-container {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 90%;
    border-radius: 5px;
    padding: 1em;
    width: 90%;
}
.table {
    display: flex;
    flex-flow: row wrap;
}

.row {
    width: calc(100% / 6);
    text-align: center;
    padding: 1%;
}
.warning {
    color: #9f6000;
    background-color: #feefb3;
}
.title {
    border-bottom: 1px solid #e1e8ee;
    padding: 1%;
    /* margin: 2%; */
    color: #5e6977;
    font-size: 18px;
    font-weight: 400;
}
.button {
    cursor: pointer;
    border: solid 1px solid green;
    width: 26px;
    text-align: center;
    color: white;
    margin: 2px;
    display: inline-block;
}

.order {
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
}
</style>
