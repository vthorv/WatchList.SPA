<template>
    <v-row>
        <MovieList :watched="false" :movies="movies"/>
        <MovieList :watched="true" :movies="movies"/>
    </v-row>
</template>

<script>
import MovieList from './../components/Movies.vue'

export default {
  name: 'HomeView',
  components: {
    MovieList
  },
  data () {
    return {
      title: 'WatchList'
    }
  },
  computed: {
    movies () {
      return this.$store.state.movies
    }
  }
}
</script>
