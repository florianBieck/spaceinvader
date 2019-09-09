<template>
  <v-container fluid fill-height align-center justify-center class="px-0 py-0">
    <v-parallax dark :src="require('../assets/logo.svg')" style="min-height: 100%; max-height: 100%; min-width: 100%; max-width: 100%;">
      <v-layout
        text-center
        wrap
        justify-center
      >
        <v-flex xs12>
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img>
        </v-flex>

        <v-flex xs8 mb-8 class="dark">
          <v-card class="m-3">
            <v-container class="text-xs-center" v-if="!loading">
              <h1 class="display-1">Willkommen bei Space Invaders!</h1>
            </v-container>
            <v-layout align-center justify-center>
              <v-container class="text-xs-center" v-if="loading">
                <h2>Sie werden registriert...</h2>
                <v-progress-circular
                  :size="70"
                  :width="7"
                  color="purple"
                  indeterminate
                ></v-progress-circular>
              </v-container>
              <v-flex md8 sm8 v-if="!loading" xs12>
                <v-card>
                  <v-card-title class="teal white--text">
                    <h4 class="headline">Registrierung</h4>
                  </v-card-title>
                  <v-alert :value="error" v-show="error" type="error">{{error}}</v-alert>
                  <v-container>
                    <v-text-field @keypress.enter.native="register" label="E-Mail Adresse" row type="email"
                                  v-model="email"></v-text-field>
                    <v-text-field @keypress.enter.native="register" label="Passwort" row type="password"
                                  v-model="password"></v-text-field>
                    <v-text-field @keypress.enter.native="register" label="Passwort wiederholen" row type="password"
                                  v-model="passwordCheck"></v-text-field>
                    <v-container class="text-xs-right pt-1 pb-0">
                      <router-link to="/login">Bereits einen Account? Jetzt anmelden!</router-link>
                    </v-container>
                  </v-container>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="teal white--text" v-on:click="register">Registrieren</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Register',
  data: () => ({
    email: '',
    password: '',
    passwordCheck: '',
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
    register () {
      if (this.password === this.passwordCheck) {
        this.loading = true
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(result => {
          if (!result.user.emailVerified) {
            result.user.sendEmailVerification()
          }
          this.$router.push('/registerverify')
        }).catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            this.error = 'Es ist bereits ein Konto mit dieser E-Mail Adresse vorhanden.'
          }
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>
