<template>
    <v-container>
      <v-chip v-show="me" color="success">
        ME
      </v-chip>
      <v-chip v-show="!me && !isNull">
        {{name}}
      </v-chip>
      <v-chip v-show="!me && isNull" color="red">
        No Name
      </v-chip>
    </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HighscoreUsername',
  data () {
    return {
      name: '...',
      me: false,
      isNull: false
    }
  },
  props: ['iduser'],
  mounted () {
    if (this.$props.iduser === firebase.auth().currentUser.uid) {
      this.me = true
    } else {
      firebase.firestore().collection('users').doc(this.$props.iduser).get().then(user => {
        if (user.data().displayname === null) {
          this.isNull = true
        } else {
          this.name = user.data().displayname
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
