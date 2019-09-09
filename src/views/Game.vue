<template>
  <v-container fluid class="pa-0">
    <v-container class="pa-0" fluid id="game-container" ref="game" v-if="downloaded"></v-container>
    <v-container fluid v-else>Downloading...</v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      downloaded: false,
      game: null
    }
  },
  async mounted () {
    this.game = await import('../game/Game')
    this.downloaded = true
    this.$nextTick(() => {
      this.game.launch()
      this.$refs.game.focus()
    })
  },
  methods: {
    moveRocket (x) {
      console.log(x)
      this.game.moveRocket(x)
    }
  }
}
</script>
