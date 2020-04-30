<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Header :msg="header_message"/>
    <Signin :label="label" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Home/header.vue'
import Signin from '@/views/Home/signin.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Signin
  },
  data () {
    return {
      label: 'Sign in',
      header_message: 'Welcome to Azure AD authentication app'
    }
  }
}
</script>
