<template>
  <div>
    <button 
    v-on:click="signin()">
      Submit
    </button>
  </div>
</template>

<script>

export default {
  name: 'Signin',
  props: {
    msg: String
  },
  methods: {
    signin: function () {
      window.location.href = 'https://localhost:4000/auth/signin'
    }
  }
}
</script>
<style scoped>
</style>
