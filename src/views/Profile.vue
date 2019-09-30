<template>
  <v-container>
    <v-card>
      <v-card-title>Profil</v-card-title>
      <v-layout>
        <v-flex xs6>
          <v-container>
            <v-card>
              <v-card-title>Profilbild</v-card-title>
              <input accept="image/*" ref="image" style="display: none;" type="file" v-if="editable"
                     v-on:change="uploadImage">
              <v-container>
                <v-layout align-center justify-center>
                  <v-avatar color="black" size="256">
                    <img :src="imageUrl === null ? profilePic : imageUrl" v-if="profilePic !== null || imageUrl !== null"/>
                    <v-icon color="white" size="256" v-if="profilePic === null && imageUrl === null">person</v-icon>
                  </v-avatar>
                </v-layout>
              </v-container>
              <v-container>
                <v-btn class="black" block v-if="editable" v-on:click="$refs.image.click()">
                  <v-icon color="white">create</v-icon>
                </v-btn>
              </v-container>
            </v-card>
          </v-container>
        </v-flex>
        <v-flex xs6>
          <v-container>
            <v-subheader>Display Name</v-subheader>
            <v-text-field :disabled="!editable" solo v-model="displayName"></v-text-field>
          </v-container>
        </v-flex>
      </v-layout>

      <v-container class="text-center" v-if="editable">
        <v-btn class="black white--text" v-on:click="save">Speichern</v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Profile',
  props: ['iduser'],
  mounted () {
    var iduser = this.$props.iduser ? this.$props.iduser : firebase.auth().currentUser.uid
    firebase.firestore().collection('users').doc(iduser).get().then(user => {
      this.displayName = user.data().displayname
    })
    firebase.storage().ref().child('images/users/' + iduser).getDownloadURL().then((url) => {
      this.profilePic = url
    }).catch(() => {})
    if (!this.$props.iduser) {
      this.editable = true
    }
  },
  data () {
    return {
      displayName: '',
      profilePic: null,
      imageName: '',
      imageUrl: null,
      imageFile: '',
      editable: false
    }
  },
  methods: {
    save () {
      if (this.editable) {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({ displayname: this.displayName })
        if (this.imageFile.length > 0) {
          firebase.storage().ref().child('images/users/' + firebase.auth().currentUser.uid).put(this.imageFile)
            .then((snapshot) => {
              console.log('Uploaded!')
            })
        }
      }
    },
    uploadImage (e) {
      if (this.editable) {
        const files = e.target.files
        if (files[0] !== undefined) {
          this.imageName = files[0].name
          if (this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
          })
        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
        }
      }
    }
  }
}
</script>
