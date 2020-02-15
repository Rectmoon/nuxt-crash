<template>
  <div class="flex-container news-detail">
    <h2>NewsId:{{ $route.params.id }}</h2>
    <nuxt-link to="/news">返回</nuxt-link>
  </div>
</template>

<script>
export default {
  transition: 'text-scale',

  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  head() {
    return {
      title: 'hello',
      meta: [
        {
          hid: 'description',
          name: 'news-detail',
          content: 'ccc'
        }
      ]
    }
  }
}
</script>
