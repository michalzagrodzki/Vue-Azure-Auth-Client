<template>
  <div>
    <p v-if="isAuth">You are logged in</p>
    <p v-else>You are not logged in</p>
    <button
      v-if="isAuth"
      v-on:click="logout()"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      isAuth: false,
      label: 'Sign out'
    }
  },
  mounted () {
    this.evaluateAuth();
  },
  methods: {
    evaluateAuth: function () {
      const token = sessionStorage.access
      if (token && token.length > 0) {
        this.isAuth = true
      } else { 
        this.isAuth = false
      }
    },
    logout: function () {
      const vm = this
      this.$http
        .get('auth/signout')
        .then(function (response) {
          if (response.status === 200) {
            vm.isAuth = false;
            sessionStorage.access = '';
            sessionStorage.refresh = '';
          }
        })
        .catch(function (error) {
          console.log(error)
        })
        .finally(function () {
          vm.$router.push({ name: 'Signin' })
        });
    }
  }
}
</script>
<style scoped>
  div {
    padding: 30px;
  }

  div p {
    font-weight: bold;
    color: #2c3e50;
  }

  button {
    position: absolute;
    top: 45px;
    right: 30px;
    background-color: white;
    color: #4fc08d;;
    font-weight: 400;
    font-size: 14px;
    border: 1px solid #4fc08d;
    border-radius: 1em;
    padding: 4px 15px;
  }
</style>
