<template>
  <div>
    <h2 v-if="error.statusCode === 404">404</h2>
    <h2 v-else>500</h2>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
