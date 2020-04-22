<template>
  <div>
    <button 
    v-on:click="signin()">
      Submit
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Form',
  props: {
    msg: String
  },
  methods: {
    signin: function () {
      axios
        .get('http://localhost:4000/auth/signin')
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
