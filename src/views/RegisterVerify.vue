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
                  <h4 class="headline">Registrierung abschließen</h4>
                </v-card-title>
                <v-container>
                  Bitte bestätigen Sie Ihre E-Mail Adresse, um die Registrierung abzuschließen.
                </v-container>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn block class="black white--text" to="/login">Zum Login</v-btn>
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
export default {
  name: 'RegisterVerify'
}
</script>
