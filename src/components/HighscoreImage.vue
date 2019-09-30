<template>
    <v-container>
      <v-progress-circular v-model="loading" v-show="loading" indeterminate color="black"></v-progress-circular>
      <v-avatar color="black" size="32" v-show="!loading">
        <img :src="img" v-if="img !== ''"/>
        <v-icon v-if="img.length === 0" color="white">person</v-icon>
      </v-avatar>
    </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HighscoreImage',
  props: ['iduser'],
  data () {
    return {
      img: '',
      loading: true
    }
  },
  mounted () {
    firebase.storage().ref().child('images/users/' + this.$props.iduser).getDownloadURL()
      .then((url) => {
        this.img = url
      }).catch(() => {
      }).finally(() => {
        this.loading = false
      })
  }
}
</script>

<style scoped>

</style>
