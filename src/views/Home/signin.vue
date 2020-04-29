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
  button {
    background-color: #4fc08d;
    color: white;
    font-weight: 600;
    font-size: 20px;
    border: 1px solid #4fc08d;
    border-radius: 2em;
    padding: 8px 35px;
  }
</style>
