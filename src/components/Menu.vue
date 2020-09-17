<template>
  <div class="card-container">
    <div>
      <h3>
        <strong>Please choose from our delicios menu!</strong>
      </h3>
    </div>
    <div class="table">
      <div class="row">Size</div>
      <div class="row">Price</div>
      <!-- <div
        class="row"
        :style="{color: styleObject.color, fontSize: styleObject.fontSize}"
      >Add to basket</div>-->
      <div class="row" :style="styleObject">Add to basket</div>
    </div>
    <!-- <tbody v-for="item in menuItems" :key="item['.key']"> -->
    <div v-for="item in menuItems" :key="item.id">
      <div class="leaf" v-show="item.vegan"></div>
      <div class="row" :class="{ veganFood : item.vegan}" v-if="!adminMode">
        <strong>{{ item.name }}</strong>
      </div>
      <div v-else>
        <strong>{{ item.name }}</strong>
        <input type="text" v-model="item.name" @change="updatePizzaName(item)" />
      </div>
      <div class="table" v-for="option in item.options" v-bind:key="option.id">
        <div class="row">{{ option.size }}</div>
        <div class="row">{{ option.price | currency}}</div>
        <div class="row">
          <button type="button" @click="addToBasket(item, option)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from "../services/Pizzaservices";

export default {
  props: {
    customPizzaName: String,
  },
  data() {
    return {
      menuItems: [],
      adminMode: false,
      leafClass: "leaf",
      styleObject: {
        color: "green",
        fontSize: "20px",
      },
    };
  },
  methods: {
    addToBasket(item, option) {
      this.$root.$emit("addToBasket", item, option);
      console.log("emitted event");
    },

    updatePizzaName(item) {
      Services.updatePizzaName(item);
    },
  },
  created: function () {
    fetch("http://localhost:3000/menuItems")
      .then((response) => response.json())
      .then((data) => (this.menuItems = data));
  },
};
</script>

<style scoped>
.card-container {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* transition: 0.3s; */
  width: 90%;
  border-radius: 5px;
  padding: 1em;
  /* Relative to the font-size of the element (2em means 2 times the size of the current font) */
}
.table {
  display: flex;
  flex-flow: row wrap; /* flex-direction and flex-wrap */
}
.row {
  width: calc(100% / 3);
  text-align: center;
  padding-top: 3%;
}
.veganFood {
  margin: 1em;
  padding: 0.5em;
  border: 1px dotted green;
  color: green;
}
.leaf {
  width: 20px;
  height: 20px;
  background-color: #a0de21;
  /* -moz-border-radius: 20px 0px;
  -webkit-border-radius: 20px 0px; */
  border-radius: 20px 0px;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 3px 10px;
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
.details {
  background: #eee;
  opacity: 0.8;
  padding: 30px 20px;
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
