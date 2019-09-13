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
              <v-avatar color="black" size="32">
                <v-icon color="white">person</v-icon>
              </v-avatar>
            </template>
            <template v-slot:item.user="{ item }">
              {{item.iduser}}
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
export default {
  name: 'Highscore',
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
