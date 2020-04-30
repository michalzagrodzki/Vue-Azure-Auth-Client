<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Header msg="Authenticated view"/>
    <Details
      :givenName="user.givenName"
      :surname="user.surname"
      :jobTitle="user.jobTitle"
      :mail="user.mail"
      :mobilePhone="user.mobilePhone"
      :preferredLanguage="user.preferredLanguage" 
      />
  </div>
</template>

<script>

import Header from '@/views/User/header.vue'
import Details from '@/views/User/details.vue'

export default {
  name: 'User',
  components: {
    Header,
    Details
  },
  data () {
    return {
      user: {
        givenName: '',
        surname: '',
        jobTitle: '',
        mail: '',
        mobilePhone: '',
        preferredLanguage: ''
      }
    }
  },
  created () {
    this.getDetails();
  },
  methods: {
    getDetails: function () {
      const vm = this
      this.$http
        .get('user')
        .then(function (response) {
          const { givenName, jobTitle, mail, mobilePhone, preferredLanguage, surname } = response.data;
          vm.user = { givenName, jobTitle, mail, mobilePhone, preferredLanguage, surname }
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            vm.$router.push({ name: 'Home'})
          }
        });
    }
  }
}
</script>
