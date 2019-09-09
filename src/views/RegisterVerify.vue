<template>
  <v-container>
    <v-card>
      <v-card-title class="teal white--text">
        <h4 class="display-1">Registrierung</h4>
      </v-card-title>
      <v-container class="text-xs-center">
        <span class="headline">Bitte bestätigen Sie Ihre E-Mail Adresse, um die Registrierung abzuschließen.</span>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="teal white--text" to="/login">Zum Login</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterVerify'
}
</script>

<style scoped>

</style>
