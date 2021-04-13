<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="50" />
    <div class="movie-creation">
      <h4>Add movie</h4>
      <!-- .prevent premet déviter le rechargement de la page à l'envoi du formulaire -->
      <!-- https://fr.vuejs.org/v2/guide/events.html#Modificateurs-d%E2%80%99evenements -->
      <form action="#" @submit.prevent="addMovie()">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="tempMovie.title" required />
        <!-- L'attribut "required" permet d'ajouter une validation  -->
        <!-- avec HTML5 -->
        <label for="gender">Genders</label>
        <input type="text" id="gender" v-model="tempMovie.genres" required />
        <label for="rating">Rating</label>
        <!-- On utilise ici type="number" pour limiter la saisie à des nombres -->
        <input type="number" id="rating" v-model="tempMovie.rating" required />
        <input type="submit" value="Ajouter un film" />
      </form>
    </div>

    <h2>Total of {{ movies.length }} movies</h2>

    <div v-for="movie in movies" :key="movie.title" class="movie">
      <h3>
        {{ movie.title }}
      </h3>
      <p class="movie-rating">
        {{ movie.rating }}
      </p>
      <ul v-if="movie.genres.length">
        <!-- Boucle imbriquée: on reboucle sur les genres de chaque film  -->
        <li v-for="genre in movie.genres" :key="genre">{{ genre }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      movies: [
        {
          title: "Parasite",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          description:
            "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",
        },
        {
          title: "Inside man",
          genres: [],
          rating: 9,
          description:
            "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",
        },
        {
          title: "Inside girl",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          description:
            "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",
        },
      ],
      tempMovie: {
        title: "The Truman show",
        genres: "comedy",
        rating: 4,
      },
    };
  },
  methods: {
    addMovie() {
      // Isole "genres" du retour du formulaire
      let { genres, ...newMovie } = this.tempMovie;
      // Transforme genre en array
      // et le rajoute dans newMovie
      newMovie.genres = genres.split(" ");
      // Ajoute le nouveau film à la collection
      // En faisant un copie "shallow copy"
      this.movies.push({ ...newMovie });
      // Vide le formulaire
      this.tempMovie = {};
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.movie {
  border: 1px solid #0d329957;
  margin: 10px;
  padding: 0 0 15px 0;
  display: flex;
  flex-direction: column;
}

.movie-creation input {
  margin: 5px;
}

.movie-rating {
  margin: 3px;
}

ul {
  flex: 1;
  padding: 0;
  margin-bottom: 0;
}

li {
  display: inline-block;
  padding: 0px 5px;
  border-radius: 6px;
  margin: 5px;
  background: #92929217;
}
</style>
