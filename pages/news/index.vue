<template>
  <div class="flex-container clearfix">
    <h2>News</h2>
    <nuxt-link to="/">回到首页</nuxt-link>
    <ul>
      <li v-for="{ id, title } in news" :key="id">
        <nuxt-link :to="{ name: 'news-id', params: { id } }">{{
          title
        }}</nuxt-link>
        <!-- <nuxt-link :to="`/news/${id}`">{{ title }}</nuxt-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        { id: 123, title: 'a' },
        { id: 456, title: 'b' },
        { id: 'abc', title: 'c' }
      ]
    }
  }
}
</script>
