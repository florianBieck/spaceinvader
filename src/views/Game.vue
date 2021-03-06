<template>
  <v-container fluid class="pa-0" v-on:click="focus">
    <v-container fluid v-if="preloading">{{preloadMsg}}</v-container>
    <v-container class="pa-0" fluid v-else id="game-container" ref="game" ></v-container>
    <v-overlay :value="menu" class="text-center">
      <v-container v-show="getMenuMsg.length > 0">
        <p class="display-1">{{getMenuMsg}}</p>
      </v-container>
      <v-container>
        <p class="display-3">Hauptmenü</p>
      </v-container>
      <v-container v-show="paused && !stopped">
        <v-btn outlined color="white" v-on:click="resumeGame">Fortsetzen</v-btn>
      </v-container>
      <v-container>
        <v-btn outlined color="white" v-on:click="startGame">Neues Spiel</v-btn>
      </v-container>
      <v-container>
        <v-btn outlined color="white" to="/highscore">Zur Highscore-Liste</v-btn>
      </v-container>
      <v-container>
        <v-btn outlined color="white" to="/">Zum Dashboard</v-btn>
      </v-container>
    </v-overlay>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Game',
  data () {
    return {
      preloading: true,
      preloadMsg: 'Downloading...',
      menu: false,
      game: null,
      timestampStart: null
    }
  },
  async mounted () {
    const main = await import('../game/Game')
    this.preloading = false
    this.$nextTick(() => {
      this.game = main.launch()
    })
  },
  computed: {
    scene () {
      if (this.game != null) {
        return this.game.scene
      }
      return null
    },
    basicScene () {
      if (this.scene != null && this.scene.scenes[0] !== undefined) {
        return this.scene.scenes[0]
      }
      return null
    },
    sys () {
      if (this.basicScene !== null) {
        return this.basicScene.sys
      }
      return null
    },
    paused () {
      if (this.basicScene !== null) {
        return this.basicScene.isPaused() && this.basicScene.health > 0 && !this.basicScene.isMaxLevel()
      }
      return false
    },
    stopped () {
      if (this.basicScene !== null) {
        return this.basicScene.isPaused() && this.basicScene.health <= 0 && !this.basicScene.isMaxLevel()
      }
      return false
    },
    finished () {
      if (this.basicScene !== null) {
        return this.basicScene.isPaused() && this.basicScene.health > 0 && this.basicScene.isMaxLevel()
      }
      return false
    },
    score () {
      if (this.basicScene !== null) {
        return this.basicScene.score
      }
      return 0
    },
    getMenuMsg () {
      if (this.paused && !this.stopped && !this.finished) {
        return 'PAUSE'
      }
      if (!this.paused && this.stopped && !this.finished) {
        return 'GAME OVER! SCORE: ' + this.score
      }
      if (!this.paused && !this.stopped && this.finished) {
        return 'MAX LEVEL! SCORE: ' + this.score
      }
      return ''
    }
  },
  watch: {
    paused (val) {
      this.menu = val
    },
    stopped (val) {
      this.menu = val
      this.addScore()
    },
    finished (val) {
      this.menu = val
      this.addScore()
    }
  },
  methods: {
    startGame () {
      this.scene.start('BasicScene')
    },
    resumeGame () {
      this.basicScene.resume()
    },
    focus () {
      console.log('Set Focus')
    },
    addScore () {
      firebase.firestore().collection('scores').add({
        iduser: firebase.auth().currentUser.uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        score: this.score,
        level: this.basicScene.level,
        time: this.basicScene.gametimer
      })
    }
  },
  async beforeRouteEnter (to, from, next) {
    next(inst => {
      if (inst.game !== null) {
        inst.resumeGame()
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    if (this.basicScene !== null) {
      this.basicScene.scene.pause('BasicScene')
    }
    next()
  }
}
</script>
