<template>
  <div>
    <button 
    v-on:click="signin()">
      {{ label }}
    </button>
  </div>
</template>

<script>

export default {
  name: 'Signin',
  props: {
    label: {
      type: String,
      required: true
    },
  },
  methods: {
    signin: function () {
      const api = process.env.VUE_APP_API
      window.location.href = `${api}auth/signin`
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
