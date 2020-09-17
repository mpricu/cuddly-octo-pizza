<template>
  <div>
    <div>
      <label>Name</label>
      <!-- <input type="text" :value="value" @input="$emit('input', $event.target.value)"> -->
      <input type="text" :value="value.name" @input="update('name', $event.target.value)" />
    </div>
    <div>
      <label>Description</label>
      <textarea
        cols="20"
        rows="5"
        :value="value.description"
        @input="update('description', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    update(key, value) {
      this.$emit("input", { ...this.value, [key]: value });
    },
  },
};
</script>

<style scoped>
</style>