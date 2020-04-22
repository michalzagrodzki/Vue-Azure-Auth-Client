<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      You are now logged in
    </p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
<style scoped>
</style>
