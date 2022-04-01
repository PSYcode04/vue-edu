<template>
  <div>
    <h2>CI/CD WebHook</h2>
    <button @click="get">GET NAME</button>
    <div v-for="(name, index) in data" :key="index">
      <p>{{ name }}</p>
    </div>
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
