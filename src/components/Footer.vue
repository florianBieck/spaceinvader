<template>
  <v-footer dark height="auto">
    <v-card class="flex transparent" flat tile>
      <v-card-actions class="justify-center">
        &copy;2019 Space Invaders - by <a href="https://github.com/florianBieck" class="px-1">Florian Bieck</a> - for <a href="https://www.it-talents.de" class="px-1">IT-Talents</a> & <a href="https://www.airbus.com" class="px-1">Airbus</a>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
</style>
