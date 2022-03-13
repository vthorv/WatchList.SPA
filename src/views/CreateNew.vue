<template>
  <div>
    <v-row align="center" justify="center">
      <v-col sm="6">
        <v-app-bar color="blue">
          <h2 class="mx-auto">Add new movie</h2>
        </v-app-bar>
        <v-card height="80vh" class="mx-auto">
          <v-form ref="form" class="pa-5">
              <v-text-field
                v-model="movie.title"
                label="Title"
                :rules="inputRules"
                required
                prepend-icon="mdi-movie-open-plus"
              ></v-text-field>
              <v-textarea
                v-model="movie.summary"
                label="Summary"
                prepend-icon="mdi-text-long"
                rows="7"
              ></v-textarea>
              <v-checkbox
                v-model="movie.watched"
                label="Watched"
                prepend-icon="mdi-eye"
              ></v-checkbox>
          </v-form>
          <v-footer absolute>
            <v-col class="text-center">
              <v-card-actions class="justify-center">
                <v-btn
                  @click="submit"
                  color="success">
                  Submit
                </v-btn>
                <v-btn
                  @click="cancel">
                  Go back
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'CreateNew',
  components: {
  },
  data () {
    return {
      movie: {
        title: '',
        summary: '',
        watched: false
      },
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        if (this.id == null) {
          this.$store.dispatch('createMovie', this.movie)
        }
        this.$router.push('/')
      }
    },
    cancel () {
      this.$router.back()
    }
  }
}
</script>
