<template>
  <v-app>
    <v-container fill-height>
        <v-main height="90%">
          <router-view/>
        </v-main>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('getMovies')
  }
}
</script>

<style>
h2 {
  color: white;
}
sub {
  color: black;
}
a {
  text-decoration: none;
}
</style>
