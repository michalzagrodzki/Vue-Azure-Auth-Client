<template>
  <div>
    <p class="label">{{ label }}:</p>
    <p v-if="value !== null && value !== ''" class="value">{{ value }}</p>
    <p v-else class="not-valid">not available</p>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
  .label {
    font-size: 12px;
    color: #42b983;
    font-weight: 100;
    margin-bottom: 0;
  }

  .value {
    font-size: 22px;
    color: #2c3e50;
    font-weight: 500;
    margin-top: 0;
  }

  .not-valid {
    font-size: 18px;
    color: #4f5959;
    font-weight: 300;
    margin-top: 0;
  } 
</style>
