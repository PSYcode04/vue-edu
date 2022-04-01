<template>
    <button @click="loadData">load</button>
  <ul>
    <li v-for="(name, index) in names" :key="index">{{ name }}</li>
  </ul>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
export default {
  setup() {
    async function loadData() {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
        console.log(result.data);
        names.value = result.data.map(item => item.name);
    }
    const names = ['John', 'Jane', 'Joe'];
    return { names, loadData };
  },
};
</script>

<style>
</style>
