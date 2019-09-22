<template>
  <v-img :height="height" :src="require('../assets/icons8-launch.svg')">
    <v-container fluid fill-height style="background-color: rgba(0, 0, 0, 0.5);">
      <v-layout row wrap align-center>
        <v-flex xs12 class="text-center display-4 white--text">Willkommen zu Space Invaders!</v-flex>
        <v-flex xs12 class="text-center">
          <v-btn class="black white--text" to="/game">Jetzt Spielen!</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      height: 900
    }
  },
  mounted () {
    this.height = window.innerHeight * 0.9
  }
}
</script>

<style>

</style>
