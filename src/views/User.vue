<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Header msg="Authenticated view"/>
    <Details />
  </div>
</template>

<script>

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
      this.$http
        .get('user')
        .then(function (response) {
          console.log('response:')
          console.log(response);
        })
        .catch(function (error) {
          console.log('error:')
          console.log(error);
        });
    }
  }
}
</script>
