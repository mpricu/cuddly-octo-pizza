<template>
<div class="card-container">
    <div>
        <h3><strong>Please choose from our delicious menu! </strong></h3>
    </div>
    <div class="table">
        <div class="row">Size</div>
        <div class="row">Price</div>
        <div class="row">Add to basket</div>
    </div>
    <div v-for="item in menuItems" v-bind:key="item.id">
        <div class="row">
            <strong>{{item.name}}</strong>
        </div>
        <div class="table" v-for="option in item.options" :key="option.id">
            <div class="row">{{option.size}}</div>
            <div class="row">{{option.price}}</div>
            <div class="row">
                <button class="button" type="button"> +</button>
            </div>
        </div>

    </div>
</div>
    
</template>

<script>
export default {
    data: () => ({
            menuItems: []
    }),
    created(){
        fetch("http://localhost:3000/menuItems")
            .then(response => response.json())
            .then(data => this.menuItems = data)
    }
    
}
</script>

<style src="@\components\Menu.css"></style> 

