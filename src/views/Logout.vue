<template>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Logout',
  mounted () {
    firebase.auth().signOut().then(() => this.$router.push('/'))
  }
}
</script>

<style scoped>

</style>
