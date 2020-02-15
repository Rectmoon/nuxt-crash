<template>
  <div class="flex-container">
    <div>
      <h1 class="title">favorite-movies123</h1>
      <h2 class="subtitle">My kickass Nuxt.js project</h2>
      <p>{{ message }}</p>
      <!-- 默认情况下 Nuxt 使用 vue-loader、file-loader
       以及 url-loader 这几个 Webpack 加载器来处理文件的加载和引用。
      对于不需要通过 Webpack 处理的静态资源文件，可以放置在 static 目录中。 -->
      <div class="assets-images">
        <img src="~assets/images/001.png" alt="" />
        <img src="~assets/images/002.png" alt="" />
      </div>

      <div class="static-images">
        <img src="/images/1.png" alt="" />
      </div>
      <ul>
        <li>
          <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'news' }">News</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'asyncData' }">asyncData</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style></style>
