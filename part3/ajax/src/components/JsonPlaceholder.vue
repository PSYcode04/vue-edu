<template>
  <div>
    <button @click="get">GET NAME</button>
    <ul>
        <li v-for="(name, index) in data" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    let data = ref([]);
    async function get() {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1/comments'
      );
      console.log(result.data);
      data.value = result.data.map((item) => item.name);
    }
    onMounted(get());
    return { get, data };
  },
};
</script>

<style>
</style>
