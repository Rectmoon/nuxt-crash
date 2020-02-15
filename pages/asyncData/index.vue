<template>
  <div class="async-data">
    <h1>{{ message }}</h1>
    <h2>{{ remoteData.name }}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get('https://api.myjson.com/bins/1cni7s')
    return { remoteData: data }
  },
  data() {
    return { message: 'hello' }
  }
}
</script>

<style></style>
