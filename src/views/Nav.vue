<template>
  <div>
    <p v-if="isAuth">You are logged in</p>
    <p v-else>You are not logged in</p>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    isAuth: function () {
      const token = sessionStorage.getItem('access')
      if (token && token.length > 0) {
        return true
      } else { 
        return false
      }
    }
  }
}
</script>
<style scoped>
  div {
    padding: 30px;
  }

  div p {
    font-weight: bold;
    color: #2c3e50;
  }
</style>
