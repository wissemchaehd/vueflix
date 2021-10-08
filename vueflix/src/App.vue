<template>
  <div id="app">
    <img alt="salle" src="../public/salle_cinema.jpg">
  <h1> Bienvenue sur VueFlix </h1>

      <v-btn>
        <router-link :to="{name:'accueil', params:{id:movies.id,  movies:movies} }">Accueil</router-link>
      </v-btn>

      <v-btn>
        <router-link :to="{name:'admin'}">Admin</router-link>
      </v-btn>

    <router-view></router-view>

  </div>
      </template>
      <script>
      import {EventBus} from "@/event-bus";

      export default {
        name: "App",
        data: function () {
          return {
            newmovie:
                {
                  id: "",
                  title: "",
                  genre_ids: [],
                  rating: "",
                  overview: "",
                  description: "",
                },
            movies: [
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
          addmovie(newmovie) {
            this.movies.push({
              id: parseInt(newmovie.id),
              title: newmovie.title,
              genres: newmovie.genre_ids,
              review: newmovie.overview,
              rating: newmovie.rating,
              description: newmovie.description
            });
          }
        },
        mounted() {
          EventBus.$on('add-emit', (newmovie) => {
            console.log('newmovie')
            this.addmovie(newmovie)
          });
        },
      }

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
img{
  width:800px
}
</style>



