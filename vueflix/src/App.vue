<template>

        <div id="app">
          <v-app>
          <H1>Bienvenue sur Votre VueFlix !</H1>
            <p> Nombre de films {{moviesLength}}</p>
            <label for="filtrer"> Filtrer par Genre</label>
            <select v-model="selected" id="filtrer">
              <option value="comedy">Adventure</option>
              <option value="drama">Drama</option>
              <option value="thriller">Thriller</option>
              <option value="action">Fantastic</option>
              <option value="comedy">Comedy</option>
              <option value="action">Action</option>
              <option value="science-fiction">Science-fiction</option>
            </select>

          <Movie v-for="movie in filtermovies" :key="movie.id" :movie ="movie"/>
<!--            <MovieCreation :addnewmovies = "addmovie"/>-->
<!--            <MovieCreation  @addnewmovies="setMessage" />-->
            <MovieCreation></MovieCreation>



          </v-app>

        </div>

      </template>

      <script>
        import Movie from "./components/Movie";
        import MovieCreation from "./components/MovieCreation";
        import {EventBus} from './event-bus';
        export default {

          name: 'App',
          components: {
            Movie,
            MovieCreation,
          },

          data: function () {
            return {
              title: "Bienvenue sur VueFlix ",
              selected: "",
              newmovie:
                  {
                    title: "",
                    genres: [],
                    rating: "",
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
                  review: "simply one of the most impressive performances ever seen in the cinema.DiCaprio is stratospheric, unreal One is struck by the force of the scenes, by their harshness. We are literally living this film, this extraordinary human adventure",

                  description: "During an expedition to a deeply wild America, legendary trapper Hugh Glass is brutally attacked by a bear and left for dead by members of his own team. In his quest for survival, Glass endures unimaginable suffering as well as the betrayal of his trusted man, John Fitzgerald. Guided by the will and love of his family, Glass must face a brutal winter in an inexorable struggle to survive and find redemption."
                },

              ],
            }

          },
          methods: {
            addmovie(newmovie) {
              this.movies.push({
                id: this.movies.length + 1,
                title: newmovie.title,
                genres: newmovie.genres,
                rating: newmovie.rating,
                review: newmovie.review,
                description: newmovie.description
              });
              //
              // }
              // },
              // methods: {
              //   setMessage(payload) {
              //     this.newmovie = payload
              //     this.movies.push(this.newmovie);
              //   }
              //
            },
          },
            mounted() {
              EventBus.$on('add-emit', (payload) => {
                this.addmovie(payload)
              });
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
          };

      </script>

<style lang="scss">
$bg-color: #110b0b;

#app {

  font-family: Avenir, Helvetica, Arial, sans-seri;
  text-align: center;
  color: white;
  background: $bg-color;
  margin-top: 60px;

  line-height :2;
};
  h1:hover{
  background : darken(#db0e20, 20%)
  };

#app input{
  background-color: aliceblue;
}
#app select{
  background-color: aliceblue;
}

</style>



