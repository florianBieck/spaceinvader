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
                  <h4 class="headline">E-Mail Verifizierung</h4>
                </v-card-title>
                <v-container>
                  Ihr E-Mail Adresse wurde erfolgreich verifiziert. Sie werden automatisch zum Login weitergeleitet.
                </v-container>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn block class="black white--text" to="/login">Zum Login</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>fire
          </v-layout>
        </v-container>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'RegisterVerified',
  mounted () {
    var mode = null
    var oobCode = null
    var apiKey = null
    var tmp = []
    location.search
      .substr(1)
      .split('&')
      .forEach(function (item) {
        tmp = item.split('=')
        if (tmp[0] === 'mode') mode = decodeURIComponent(tmp[1])
        if (tmp[0] === 'oobCode') oobCode = decodeURIComponent(tmp[1])
        if (tmp[0] === 'apiKey') apiKey = decodeURIComponent(tmp[1])
      })
    if (mode === 'verifyEmail') {
      firebase.auth().applyActionCode(oobCode).then(res => {
        console.log(res)
        this.$router.push('/login')
      })
    }
  }
}
</script>
