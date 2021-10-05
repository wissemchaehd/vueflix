<template>


  <div id="MovieCreation">



  <p>
    <label for="name">Titre</label>
    <input
        id="name"
        v-model="newmovie.title"
        type="text"
        name="name"
    >
  </p>
  <p>
    <label for="genre">Genre</label>
    <input
        id="genre"
        v-model="newmovie.genres"
        type="text"
        name="genre"
    >
  </p>

  <p>
    <label for="review">Review</label>
    <input
        id="review"
        v-model="newmovie.review"
        type="text"
        name="review"
    >
  </p>
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

</template>

<script>
import { EventBus } from '@/event-bus';
export default {
  name: "MovieCreation",

  data: function () {
    return {
      newmovie: {
        title: "",
        genres: [],
        rating:0,
        review: "",
        description:"",
      },
    }

  },

  methods: {
    emitAddEvent() {
      EventBus.$emit("add-emit", this.newmovie);
    },
  },

}
</script>

<style scoped>

</style>