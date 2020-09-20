<template>
  <div class="table-container">
    <div v-if="cartItems.length > 0">
      <div class="title">Shopping Cart</div>
      <div class="table">
        <div class="row">Quantity</div>
        <div class="row">Pizza Name</div>
        <div class="row">Total</div>
      </div>
      <div class="table" v-for="item in cartItems" :key="item.id">
        <div class="row">
          <button class="button" @click="decreaseQuantity(item)">-</button>
          <span>{{item.quantity}}</span>
          <button class="button" @click="increaseQuantity(item)">+</button>
        </div>
        <div class="row">{{item.size}}</div>
        <div class="row">{{item.quantity * item.price |currency}}</div>
      </div>
      <div class="class">
        <p>Order total: {{total | currency}}</p>
      </div>
      <div class="orderButton">
        <button class="button" @click="placeOrder">Place Order</button>
      </div>
    </div>
    <div class="title" v-else>
      <p>{{cartEmptyText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartEmptyText: 'Your shopping cart is empty!',
      cartItems: []
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
    }
  },
  methods: {
    placeOrder() {
      this.cartItems = [];
      this.cartEmptyText = 'Thank you for your order!';
    },

    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity == 0) {
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
    }
  },
  mounted: function() {
    this.$root.$on('itemAddedToCart', (item, option) => {
      console.log('itemAddedToCart event listen');
      console.log(item.name);
      this.cartItems.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      });
      // [

      //   ...this.cartItems,
      //   {
      //     name: item.name,
      //     size: option.size,
      //     price: option.price,
      //     quantity: 1
      //   }
      // ];
    });
  }
};
</script>

<style scoped>
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
  padding: 3%;
  margin: 2%;
  color: #5e6977;
  font-size: 18px;
  font-weight: 400;
}
.button {
  cursor: pointer;
  border: solid 1px solid green;
  width: 26px;
  text-align: center;
  color: green;
  margin: 2px;
  display: inline-block;
}
.orderButton {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
}
</style>
