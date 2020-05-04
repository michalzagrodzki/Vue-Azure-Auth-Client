<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Header :title="header_title" :caption="header_caption"/>
    <Signin :label="label" @link="signin()" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Signin/header.vue'
import Signin from '@/views/shared/button.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Signin
  },
  data () {
    return {
      label: 'Sign in',
      header_title: 'Welcome to Azure AD authentication app',
      header_caption: 'Please use button below to login to service'
    }
  },
  methods: {
    signin: function () {
      const api = process.env.VUE_APP_API
      window.location.href = `${api}auth/signin`
    }
  }
}
</script>
