<template>
  <v-app>
  <p> Nombre de films {{ moviesLength }}</p>

  <label for="filtrer"> Filtrer par Genre</label>
  <select v-model="selected" id="filtrer" >
    <option value="">Tous les genres</option>
    <option value="comedy">Adventure</option>
    <option value="drama">Drama</option>
    <option value="thriller">Thriller</option>
    <option value="action">Fantastic</option>
    <option value="comedy">Comedy</option>
    <option value="action">Action</option>
    <option value="science-fiction">Science-fiction</option>
  </select>
    <div v-for="movie in filtermovies" :key="movie.id">
     <h1>{{movie.title }}</h1>
      <ul>
        <li>Genre: {{movie.genres}}</li>
        <li>review: {{movie.overview}}</li>
        <li>description: {{movie.description}}</li>
        <li>Evaluation : {{movie.rating}}</li>
        <li> <v-rating v-model="movie.rating" length="10" color="yellow darken-3" ></v-rating></li>

        <li>
          <router-link
              :to="{ name: 'movie', params: { id: movie.id, movie: movie } }"
          >
            <v-btn type="button" color="primary">Afficher Détails</v-btn>

          </router-link>
        </li>
      </ul>

    </div>
  </v-app>
</template>

<script>


export default {
  name: "Accueil",
  components: {
  },
  props: {
    movies: {
      type: Array,
    },
  },
  data: function () {
    return {
      selected: "",

   films: [
        {
          id: 1,
          title: "Parasite",
          genre_ids: ["comedy", "drama"],
          rating: 8,
          overview: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {

          id: 2,
          title: "Matrix",
          genre_ids: ["science-fiction", "action"],
          rating: 10,
          overview: "Thomas Anderson, a dreary computer scientist by day, turns into a hacker nicknamed Neo. A question grips him during his insomnia: what is the Matrix? The answer will be drawn to him by Morpheus.",
          description: "Matrix is ​​an exciting and formidable film, exciting and exciting and above all much smarter than the “big show action” label might lead you to believe."
        },
        {
          id: 3,
          title: "The Revenant",
          genre_ids: ["Adventure", "Epic Western"],
          rating: 9,
          overview: "simply one of the most impressive performances ever seen in the cinema.DiCaprio is stratospheric, unreal One is struck by the force of the scenes, by their harshness. We are literally living this film, this extraordinary human adventure",

          description: "During an expedition to a deeply wild America, legendary trapper Hugh Glass is brutally attacked by a bear and left for dead by members of his own team. In his quest for survival, Glass endures unimaginable suffering as well as the betrayal of his trusted man, John Fitzgerald. Guided by the will and love of his family, Glass must face a brutal winter in an inexorable struggle to survive and find redemption."
        },

      ],
    }
  },
  methods: {

  },
  computed: {
    filtermovies: function () {
      if (this.selected == "") {
        return this.films;
      } else {
        return this.films.filter((movie) =>
            movie.genres.includes(this.selected)
        );
      }
    },
    moviesLength: function () {
      return this.filtermovies.length;
    },
  },
  mounted() {
    if (this.movies != undefined) {
      this.films = this.movies;
    }
  },
  destroyed() {
    console.log('composent detruit')
  }
}
</script>

<style scoped>

</style>