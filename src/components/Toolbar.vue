<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list class="pa-0">
        <v-list-item>
          <v-list-item-avatar color="primary">
            <img :src="profilePic" v-if="profilePic !== ''"/>
            <v-icon v-if="profilePic.length === 0" color="white">person</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{displayName}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-item v-for="item in items" :key="item.title" :to="item.href">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-item to="/profile">
          <v-list-item-action>
            <v-icon>person</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Mein Profil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/logout">
          <v-list-item-action>
            <v-icon>input</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dark color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Space Invaders</v-toolbar-title>

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
        { title: 'Nachrichten', icon: 'sms', href: '/chats' },
        { title: 'Meine Angebote', icon: 'apps', href: '/offers' },
        { title: 'Meine Produkte', icon: 'list', href: '/products' },
        { title: 'Meine Kunden', icon: 'people', href: '/customers' }
      ],
      drawer: false,
      displayName: '',
      profilePic: ''
    }
  },
  mounted () {
    if (firebase.auth().currentUser) {
      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(user => {
        this.displayName = user.data().displayname
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
