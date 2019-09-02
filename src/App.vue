<template>
  <v-app style="height: 100vh;">
    <component :is="layout">
      <router-view/>
    </component>
    <Footer/>
  </v-app>
</template>

<script>
    import Footer from './components/Footer'
    const defaultLayout = 'none'
    export default {
        name: 'App',
        components: { Footer },
        computed: {
            layout () {
                return (this.$route.meta.layout || defaultLayout) + '-layout'
            }
        }
    }
</script>
