<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Header :title="header_title" :caption="header_caption"/>
    <user-link :label="label" @link="linkToUser()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Signin/header.vue'
import UserLink from '@/views/shared/button.vue'

export default {
  name: 'Home',
  components: {
    Header,
    UserLink
  },
  data () {
    return {
      label: 'Show user',
      header_title: 'You are authenticated',
      header_caption: 'Please use button below to show user details'
    }
  },
  methods: {
    linkToUser: function () {
      this.$router.push({ name: 'User' })
    }
  }
}
</script>
