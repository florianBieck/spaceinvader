<template>
  <v-container fluid fill-height align-center justify-center class="px-0 py-0 black">
    <v-parallax dark :src="require('../assets/icons8-rocket.svg')"
                style="min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
      <v-row align="center" justify="center">
        <v-container class="m-3 transparent">
          <v-layout justify-center>
            <v-flex md8 sm8 xs12>
              <v-card>
                <v-card-title class="black white--text">
                  <h4 class="headline">Anmeldung</h4>
                </v-card-title>
                <v-alert :value="error" v-show="error" type="error">{{error}}</v-alert>
                <v-container>
                  <v-text-field @keypress.enter.native="login" label="E-Mail Adresse" row type="email"
                                v-model="email"></v-text-field>
                  <v-text-field @keypress.enter.native="login" label="Password" row type="password"
                                v-model="password"></v-text-field>
                  <v-container class="pt-0 pb-1">
                    <v-checkbox label="Angemeldet bleiben" v-model="remember"></v-checkbox>
                  </v-container>
                  <v-container class="text-right py-1">
                    <router-link style="text-decoration: none;" to="/passwordreset">Passwort vergessen?</router-link>
                  </v-container>
                  <v-container class="text-right pt-1 pb-0">
                    <router-link style="text-decoration: none;" to="/register">Jetzt registrieren!</router-link>
                  </v-container>
                </v-container>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn block :loading="loading" :disabled="loading" class="black white--text" v-on:click="login">Login</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Home',
  data: () => ({
    email: '',
    password: '',
    error: '',
    loading: false,
    remember: false
  }),
  computed: {
    getPersistence () {
      return this.remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION
    }
  },
  methods: {
    login () {
      if (this.email !== '' && this.password !== '') {
        this.loading = true
        firebase.auth().setPersistence(this.getPersistence)
          .then(() => {
            return firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          })
          .catch(result => {
            console.error(result)
            this.error = 'Falsche Anmeldedaten.'
            this.loading = false
          })
          .then(result => {
            if (!result.user.emailVerified) {
              this.error = 'E-Mail Adresse nicht verifiziert.'
              this.loading = false
            } else {
              this.error = ''
              this.$router.push('/')
            }
          })
      } else {
        this.error = 'Bitte E-Mail und Passwort eingeben.'
        this.loading = false
      }
    }
  }
}
</script>
