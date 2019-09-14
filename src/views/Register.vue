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
                  <v-container class="text-right pt-1 pb-0">
                    <router-link style="text-decoration: none;" to="/login">Bereits einen Account? Jetzt anmelden!</router-link>
                  </v-container>
                </v-container>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn block :loading="loading" :disabled="loading" class="black white--text" v-on:click="register">Registrieren</v-btn>
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
