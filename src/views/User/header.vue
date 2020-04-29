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
  h1 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    color: #42b983;
  }
</style>
