<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Header msg="Welcome to Azure AD authentication app"/>
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Home/header.vue'
import Form from '@/views/Home/form.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Form
  }
}
</script>
