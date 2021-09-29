<template>
  <div id="app">
    <label for="filtrer"> Filtrer par Genre</label><br>

    <select v-model="selected" id="filtrer">

      <option value="comedy">Adventure</option>
      <option value="drama">Drama</option>
      <option value="thriller">Thriller</option>
      <option value="action">Fantastic</option>
      <option value="comedy">Comedy</option>
    <option value="action">Action</option>
      <option value="science-fiction">Science-fiction</option>
    </select>

    <p> Nombre de films {{moviesLength}}</p>
    <div v-for="movie in  filtermovies" :key="movie.id">
       <h1>{{ movie.title }} :</h1>
      <h3>Genre de film : {{ movie.genres }}</h3>
      <h3>Evaluation : {{ movie.rating }}</h3>
      <p> ID {{movie.id}}</p>

    </div>
    <p>
      <label for="name">Titre</label>
      <input
          id="name"
          v-model="addmovie.title"
          type="text"
          name="name"
      >
    </p>
    <p>
      <label for="genre">Genre</label>
      <input
          id="genre"
          v-model="addmovie.genres"
          type="text"
          name="genre"
      >
    </p>
    <p>
      <label for="rating">Rating</label>
      <input
          id="rating"
          v-model="addmovie.rating"
          type="number"
          name="rating"
          min="0"
      >
    </p>
    <p>
      <label for="review">Review</label>
      <input
          id="review"
          v-model="addmovie.review"
          type="text"
          name="review"
      >
    </p>
    <p>
      <label for=" description"> Description</label>
      <input
          id=" description"
          v-model="addmovie.description"
          type="text"
          name=" description"
      >
    </p>
    <p>
      <button v-on:click="add()">Add New movie</button>
    </p>




  </div>


</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      title: "Bienvenue sur VueFlix ",
      selected: "",
      addmovie :
          {
            title: "",
            genres: [],
            rating: 0 ,
            review: "",
            description: "",
          },
      movies: [
        {
          id: 1,
          title: "Parasite",
          genres: ["comedy", "drama"],
          rating: 8,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 2,
          title: "Matrix",
          genres: ["science-fiction", "action"],
          rating: 10,
          review: "Thomas Anderson, a dreary computer scientist by day, turns into a hacker nicknamed Neo. A question grips him during his insomnia: what is the Matrix? The answer will be drawn to him by Morpheus.",
          description: "Matrix is ​​an exciting and formidable film, exciting and exciting and above all much smarter than the “big show action” label might lead you to believe."
        },
        {
          id: 3,
          title: "The Revenant",
          genres: ["Adventure", "Epic Western"],
          rating: 9,
          review: "simply one of the most impressive performances ever seen in the cinema.DiCaprio is stratospheric, unreal One is struck by the force of the scenes, by their harshness. We are literally living this film, this extraordinary human adventure" ,

          description: "During an expedition to a deeply wild America, legendary trapper Hugh Glass is brutally attacked by a bear and left for dead by members of his own team. In his quest for survival, Glass endures unimaginable suffering as well as the betrayal of his trusted man, John Fitzgerald. Guided by the will and love of his family, Glass must face a brutal winter in an inexorable struggle to survive and find redemption."
        },

      ],
    }
  },
  methods: {
    add: function () {

      this.movies.push({
        id : this.movies.length + 1,
        title: this.addmovie.title,
          genres: this.addmovie.genres,
          rating: this.addmovie.rating,
          review: this.addmovie.review,
          description: this.addmovie.description
      });


    },
  },
  computed: {


    filtermovies: function () {
      if (this.selected == "") {
        return this.movies;
      } else {
        return this.movies.filter(movie => movie.genres.includes(this.selected));

      }
    },

    moviesLength: function () {
      return this.filtermovies.length;
    },
  }
}
</script>


<style>
#app {
  background: #e2cccc;
  margin-top: 60px;
  : auto;
}

</style>
