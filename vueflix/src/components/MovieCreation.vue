<template>

  <v-app>
  <div id="MovieCreation">


  <p>
    <v-autocomplete
        v-model="newmovie"
        :items="searchtitle"
        item-text="title"
        dense
        filled
        label="recherche film"
        return-object
    ></v-autocomplete>

    <label for="name">Titre</label>
    <input
        id="name"
        v-model="newmovie.title"
        type="text"
        name="name"
        @keyup="getResult"
    >
  </p>
    <br>
  <p>
    <label for="genre">Genre</label>
    <input
        id="genre"
        v-model="newmovie.genre_ids"
        type="text"
        name="genre"
    >
  </p>
    <br>

  <p>
    <label for="review">Review</label>
    <input
        id="review"
        v-model="newmovie.overview"
        type="text"
        name="review"
    >
  </p>
    <br>
  <p>
    <label for=" description"> Description</label>
    <input
        id=" description"
        v-model="newmovie.description"
        type="text"
        name=" description"
    >
  </p>
    <p>
    <v-rating
        v-model="newmovie.rating"
        length="10" color="yellow darken-3"
    ></v-rating>
    </p>


<!--    <button class= "button" type="submit" @click="add()">Add</button>-->
<!--    <button type="button" @click="emitCustomEvent()">Add</button>-->
    <button type="button" @click="emitAddEvent">Add</button>

  </div>
    </v-app>
</template>

<script>
import { EventBus } from '@/event-bus';
import axios from "axios";
export default {
  name: "MovieCreation",

  data: function () {
    return {
      searchtitle: [],
      loading: false,
      error: null,

      newmovie: {
        title: "",
        genre_ids: [],
        rating:0,
        overview:"",
        description:"",
      },
    }

  },

  methods: {
    // l'écoute de l'événement, il EventBus récupère la variable newMovie
    emitAddEvent() {
      EventBus.$emit("add-emit", this.newmovie);
      console.log('alo');
    },
    getResult(){
      {
        this.searchtitle=[];
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query=`+ this.newmovie.title)
            .then((response) => {
              this.searchtitle = response.data.results;
              console.log(response.data.results)
              this.loading = false;
              this.error= null;
            })
            .catch((error) => {
              this.error = error;
            })
      }
    },
  },
  watch: {
    newmovie: function () {
      console.log(this.newmovie)
    }
  }
}
</script>

<style scoped>

</style>