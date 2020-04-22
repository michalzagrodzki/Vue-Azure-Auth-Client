<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Header msg="Authenticated view"/>
    <Details />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

import Header from '@/views/User/header.vue'
import Details from '@/views/User/details.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Details
  },
  created () {
    this.getDetails();
  },
  methods: {
    getDetails: function () {
      axios
        .get('http://localhost:4000/user')
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
