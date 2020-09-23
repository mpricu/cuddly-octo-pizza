<template>
    <div class="card-container">
        <div>
            <h3>
                <strong>Please choose from our delicious menu!</strong>
            </h3>
        </div>
        <div class="table">
            <div class="row">Size</div>
            <div class="row">Price</div>
            <div class="row" :style="[styleObject, styleObjectTwo]">
                Add to basket
            </div>
            <!-- <div class="row" :style="{backgroundColor: styleObject.color}">Add to basket</div> -->
        </div>
        <div v-for="item in menuItems" v-bind:key="item.id">
            <!-- <div class="row" :class="{veganFood : item.vegan}"> -->
            <div class="leaf" v-show="item.vegan"></div>
            <div
                class="row"
                :class="item.vegan ? 'veganFood' : ''"
                v-if="!isAdmin"
            >
                <strong>{{ item.name }}</strong>
            </div>
            <div v-else>
                <strong>{{ item.name }}</strong>
                <input
                    type="text"
                    v-model="item.name"
                    @change="updatePizzaName(item)"
                />
            </div>
            <div class="table" v-for="option in item.options" :key="option.id">
                <div class="row">{{ option.size }}</div>
                <div class="row">{{ option.price | currency }}</div>
                <div class="row">
                    <button
                        class="button"
                        type="button"
                        @click="addToCart(item, option)"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Services from '../services/pizza.service';

export default {
    data: () => ({
        menuItems: [],
        isAdmin: false,
        color: 'green',
        styleObject: {
            color: 'green',
            fontSize: '20px'
        },
        styleObjectTwo: {
            color: 'green',
            fontSize: '20px'
        }
    }),
    created() {
        fetch('http://localhost:3000/menuItems')
            .then(response => response.json())
            .then(data => (this.menuItems = data));
    },
    methods: {
        addToCart(item, option) {
            console.log('itemAddedToCart event emitted');
            this.$root.$emit('itemAddedToCart', item, option);
        },
        updatePizzaName(item) {
            Services.updatePizza(item);
            console.log(item.name);
        }
    }
};
</script>

<style scoped>
.card-container {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 90%;
    border-radius: 5px;
    padding: 1em;
}
.table {
    display: flex;
    flex-flow: row wrap;
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
    border-radius: 20px 0px;
}
.button {
    background-color: #4caf50;
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
</style>
