<template>
  <div>
    <h3>User details</h3>
    <property
      label="FIRSTNAME"
      :value="givenName"
    />
    <property
      label="LASTNAME"
      :value="surname"
    />
    <property
      label="TITLE"
      :value="jobTitle"
    />
    <property
      label="EMAIL"
      :value="mail"
    />
    <property
      label="MOBILE"
      :value="mobilePhone"
    />
    <property
      label="LANGUAGE"
      :value="preferredLanguage"
    />
  </div>
</template>

<script>
import property from './property'

export default {
  name: 'Details',
  components: { property },
  props: {
    givenName: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true
    },
    mobilePhone: {
      type: String,
      required: true
    },
    preferredLanguage: {
      type: String,
      required: true
    },
  }
}
</script>
<style scoped>
  h3 {
    margin-top: 35px;
  }
</style>
