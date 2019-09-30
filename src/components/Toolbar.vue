<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" dark>
      <v-list class="pa-0">
        <v-list-item>
          <v-list-item-avatar color="primary">
            <img :src="profilePic" v-if="profilePic !== ''"/>
            <v-icon v-if="profilePic.length === 0" color="white">person</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{displayName}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-item v-for="item in items" :key="item.title" :to="item.href">
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-item to="/profile">
          <v-list-item-action>
            <v-icon color="white">person</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">Mein Profil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/logout">
          <v-list-item-action>
            <v-icon color="white">input</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dark color="black">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Space Invaders</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title class="white--text">{{highscore}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="red" text to="/logout">Abmelden</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Toolbar',
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'dashboard', href: '/' },
        { title: 'Highscore', icon: 'format_list_numbered', href: '/highscore' },
        { title: 'Spielen', icon: 'videogame_asset', href: '/game' }
      ],
      drawer: false,
      displayName: '',
      profilePic: '',
      highscore: ''
    }
  },
  mounted () {
    if (firebase.auth().currentUser) {
      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
        .onSnapshot(user => {
          this.displayName = user.data().displayname
        })
      firebase.firestore().collection('scores')
        .where('iduser', '==', firebase.auth().currentUser.uid)
        .orderBy('score', 'desc')
        .limit(1)
        .onSnapshot((item) => {
          if (item.size === 0) {
            this.highscore = ''
          } else {
            this.highscore = 'Mein Highscore: ' + item.docs[0].data().score
          }
        })
      firebase.storage().ref().child('images/users/' + firebase.auth().currentUser.uid).getDownloadURL()
        .then((url) => {
          this.profilePic = url
        }).catch(() => {
        })
    }
  }
}
</script>

<style scoped>
</style>
