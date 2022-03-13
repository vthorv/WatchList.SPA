import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movie: Object
  },
  mutations: {
    SET_MOVIES (state, movies) {
      state.movies = movies
    },
    SET_MOVIE (state, movie) {
      state.movie = movie
    },
    CREATE_MOVIE (state, movie) {
      state.movies.push(movie)
    },
    DELETE_MOVIE (state, movieId) {
      const index = state.movies.findIndex(x => x.id === movieId)
      state.movies.splice(index, 1)
    }
  },
  actions: {
    getMovies ({ commit }) {
      axios.get('api/movie')
        .then(response => {
          commit('SET_MOVIES', response.data)
        })
    },
    getMovie ({ commit }, id) {
      axios.get(`api/movie/${id}`)
        .then(response => {
          commit('SET_MOVIE', response.data)
        })
    },
    createMovie ({ commit }, data) {
      axios.post('api/movie', {
        title: data.title,
        summary: data.summary,
        watched: data.watched
      })
        .then(response => {
          commit('CREATE_MOVIE', response.data)
        })
    },
    deleteMovie ({ commit }, id) {
      axios.delete(`api/movie/${id}`)
        .then(response => {
          commit('DELETE_MOVIE', id)
        })
    },
    updateMovie ({ commit }, data) {
      axios.put(`api/movie/${data.id}`, {
        title: data.title,
        summary: data.summary,
        watched: data.watched
      })
    }
  }
})
