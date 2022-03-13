<template>
  <v-col md="6">
    <v-app-bar color="orange darken-2">
      <h2> Watch<sub v-if=watched>ed</sub>List </h2>
      <v-spacer></v-spacer>
      <router-link v-if="!watched" to="/add"><v-btn color="secondary"> Add movie</v-btn></router-link>
    </v-app-bar>
    <v-card height="80vh" class="scroll">
      <v-list>
        <div :key="movie.id" v-for="movie in movies">
          <div v-if="movie.watched == watched">
            <MovieCard :movie="movie" />
          </div>
        </div>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import MovieCard from './Movie.vue'

export default {
  name: 'MovieList',
  props: {
    movies: Array,
    watched: Boolean
  },
  components: {
    MovieCard
  }
}
</script>

<style scoped>
.scroll {
  overflow-y: scroll;
}
::-webkit-scrollbar {
    display: none;
}
</style>
