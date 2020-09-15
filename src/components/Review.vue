<template>
    <div>
        <!-- pagina nu va face refresh cand vom face submit la form -->
        <form class="review-form" @submit.prevent="onSubmit">
            <p v-if="errors.lenght">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error['.key']">
                        {{error}}
                    </li>
                </ul>
            </p>
            <p>
                <label for="clientName">Name:</label>
                <input id="clientName" v-model="clientName" type="text" required>
            </p>
            <p>
                <label for="review">Review:</label>
                <textarea name="review" id="review" cols="20" rows="5" v-model="review">

                </textarea>
            </p>
            <p>
                <label for="rating">Rating:</label>
                <!-- este un modificar pt a face cast la numar -->
                <select name="rating" id="rating" v-model.number="rating">
                    <option value="">3</option>
                    <option value="">2</option>
                    <option value="">1</option>
                </select>
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>
        </form>

    </div>
</template>

<script>
export default {
    // props: {
    //     pizzaModel:{
    //         type: {},
    //         required: true            
    //     }
    // },
    data(){
        return {
            clientName: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit(){
            if(this.clientName && this.review && this.rating){
                let pizzaReview = {
                name: this.clientName,
                review: this.review,
                rating: this.rating
            }
            //resetam valorile 
            this.clientName = null
            this.review = null
            this.rating = null
            this.$emit('reviewSubmitted', pizzaReview)
            } 
            else{
                if(!this.clientName) this.errors.push("Name Required")
            }
        }
    }
    
}
</script>

<style scoped>
.review-form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
  text-align: center;
}
input[type=text], select, textarea{
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 5px 5px 5px 0;
  display: inline-block;
}
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 5px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
</style>