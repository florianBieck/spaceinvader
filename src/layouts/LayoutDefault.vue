<template>
  <div>
    <Toolbar/>
    <slot/>
  </div>
</template>

<script>
    import Toolbar from '../components/Toolbar'
    export default {
        name: 'LayoutDefault',
        components: { Toolbar }
    }
</script>

<style scoped>
</style>
