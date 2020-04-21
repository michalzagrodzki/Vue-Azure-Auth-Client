<template>
  <div>
    <form v-on:submit.prevent="login">
      <label>Username</label>
      <input 
        v-model="username"
        type="text"
        placeholder="Please type your username here"
      >
      <label>Password</label>
      <input 
        v-model="password"
        type="password"
        placeholder="Please type your password here"
      >
      <button>
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      console.log('submitting:')
      console.log(this.username)
      console.log(this.password)
    }
  }
}
</script>
<style scoped>
</style>
