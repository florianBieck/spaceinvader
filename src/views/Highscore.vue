<template>
  <v-container>
    <v-card>
      <v-card-title>Highscore</v-card-title>
      <v-container>
        <v-container fluid>
          <v-text-field v-model="search" append-icon="search" label="Suchen..." single-line hide-details></v-text-field>
        </v-container>
        <v-container fluid>
          <v-data-table :headers="headers" :items="scores" :search="search">
            <template v-slot:item.img="{ item }">
              <HighscoreImage v-bind:iduser="item.iduser"/>
            </template>
            <template v-slot:item.user="{ item }">
              <HighscoreUsername v-bind:iduser="item.iduser"/>
            </template>
            <template v-slot:item.timestamp="{ item }">
              {{item.timestamp.toDate().toLocaleString()}}
            </template>
          </v-data-table>
        </v-container>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import HighscoreUsername from '../components/HighscoreUsername'
import HighscoreImage from '../components/HighscoreImage'
export default {
  name: 'Highscore',
  components: { HighscoreUsername, HighscoreImage },
  data () {
    return {
      headers: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'img'
        },
        {
          text: 'User',
          value: 'user'
        },
        {
          text: 'Datum',
          value: 'timestamp'
        },
        {
          text: 'Score',
          value: 'score'
        },
        {
          text: 'Level',
          value: 'level'
        },
        {
          text: 'Time (s)',
          value: 'time'
        }
      ],
      scores: [],
      search: ''
    }
  },
  mounted () {
    firebase.firestore().collection('scores')
      .orderBy('score', 'desc')
      .onSnapshot((items) => {
        this.scores = []
        items.forEach(item => {
          this.scores.push(item.data())
        })
      })
  }
}
</script>
