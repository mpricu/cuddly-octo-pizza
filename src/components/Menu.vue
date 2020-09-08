<template>
    <div >
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
</template>

<script>
export default {
     data(){
        return {
            basketText : 'Your basket is empty!',
            menuItems: []
        }
    },
    methods : {
         addToBasket(item, option){
             this.$root.$emit("addToBasket", item, option)
             console.log('emitted event')              
            }

    },
    created: function() {
        fetch("http://localhost:3000/menuItems")
            .then(response => response.json())
            .then(data => (this.menuItems = data));
    }
}
</script>
