<template>
  <div class="table-container">
    <div v-if="basket.length > 0">
      <div class="title">Shopping Bag</div>
      <div class="table">
        <div class="row">Quantity</div>
        <div class="row">Item</div>
        <div class="row">Total</div>
      </div>
      <div class="table" v-for="item in basket" :key="item['.key']">
        <div class="row">
          <!-- &nbsp; -->
          <button type="button" class="button" @click="decreaseQuantity(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button type="button" class="button" @click="increaseQuantity(item)">+</button>
        </div>
        <div class="row">{{item.name}} {{item.size}}</div>
        <div class="row">{{ item.price * item.quantity | currency }}</div>
      </div>
      <div class="table">
        <p>Order total: {{ total | currency }}</p>
      </div>
      <div></div>
      <button class="orderButton" @click="addNewOrder">Place Order</button>
    </div>
    <div class="title" v-else>
      <p>{{ basketText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basketText: "Your basket is empty!",
      basket: [],
    };
  },
  computed: {
    total() {
      var totalCost = 0;
      for (let item in this.basket) {
        let individualItem = this.basket[item];
        totalCost += individualItem.quantity * individualItem.price;
      }
      return totalCost;
    },
  },
  methods: {
    addToBasket(item, option) {
      this.basket.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1,
      });
    },
    removeFromBasket(item) {
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
      this.basket = [];
      this.basketText = "Thank you, your order has been placed ! :)";
    },
  },
  // mounted() {

  // }
  mounted: function () {
    this.$root.$on("addToBasket", (item, option) => {
      console.log("listen event");
      this.basket.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1,
      });
    });
    // Code that will run only after the
    // entire view has been rendered
  },
};
</script>

<style scoped>
.table-container {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* transition: 0.3s; */
  width: 90%;
  border-radius: 5px;
  padding: 1em;
  width: 90%;
  /*/* border: 1px solid silver; 
  -ms-box-orient: horizontal;  */
}
.table {
  display: flex;
  flex-flow: row wrap; /* flex-direction and flex-wrap */
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
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  /* font-size: 16px; */
}
</style>
