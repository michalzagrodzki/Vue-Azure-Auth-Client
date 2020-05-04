<template>
  <div>
    <button 
    v-on:click="link()">
      {{ label }}
    </button>
  </div>
</template>

<script>

export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    },
  },
  methods: {
    link: function () {
      this.$emit('link')
    }
  }
}
</script>
<style scoped>
  button {
    background-color: #4fc08d;
    color: white;
    font-weight: 600;
    font-size: 20px;
    border: 1px solid #4fc08d;
    border-radius: 2em;
    padding: 8px 35px;
  }
</style>
