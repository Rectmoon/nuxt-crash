<template>
  <div class="async-data">
    <h1>{{ message }}</h1>
    <h2>{{ remoteData.name }}</h2>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/test'

export default {
  async asyncData({ $axios }) {
    return { remoteData: await getUserInfo() }
  },
  data() {
    return { message: 'hello' }
  }
}
</script>

<style></style>
