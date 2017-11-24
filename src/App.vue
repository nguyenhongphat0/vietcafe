<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="sass">
  @import "../node_modules/bulma/sass/utilities/initial-variables"
  @import "../node_modules/bulma/sass/utilities/functions"

  $primary: #3E2723
  $success: #70a341
  $link: #3E2723

  @import "../node_modules/bulma/bulma"
</style>