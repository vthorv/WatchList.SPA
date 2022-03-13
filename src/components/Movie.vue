<template>
  <div>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="black">mdi-movie-open</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="movie.title"></v-list-item-title>
        <v-card-text v-text="movie.summary"></v-card-text>
      </v-list-item-content>
        <v-btn
          @click="onWatched(movie.id)"
          icon>
          <v-icon
            v-if="movie.watched"
            color="light-green">
            mdi-eye-off
          </v-icon>
          <v-icon
            v-else
            color="light-green">
            mdi-eye
          </v-icon>
        </v-btn>
        <v-btn
          @click="onDelete(movie.id)"
          icon>
          <v-icon
            color="red">
            mdi-delete
          </v-icon>
        </v-btn>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  activeModule: false,
  props: {
    movie: Object
  },
  data () {
    return {
      localMovie: this.movie
    }
  },
  methods: {
    onDelete (id) {
      this.$store.dispatch('deleteMovie', id)
    },
    onWatched (id) {
      this.localMovie.watched = !this.localMovie.watched
      this.$store.dispatch('updateMovie', this.localMovie)
    }
  }
}
</script>
