<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Please use form below to login to service
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
