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
import axios from 'axios';

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
      axios
        .post('http://localhost:4000/login', {
          username: this.username,
          password: this.password
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>
<style scoped>
</style>
