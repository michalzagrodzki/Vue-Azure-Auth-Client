<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    caption: String
  }
}
</script>
<style scoped>
</style>
