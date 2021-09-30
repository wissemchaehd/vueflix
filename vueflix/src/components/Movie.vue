<template>
  <div id="Movie">

    <h1>{{ movie.title }} :</h1>
    <h3>Genre de film : {{ movie.genres }}</h3>
    <h2>Evaluation : {{ movie.rating }}</h2>
    <div class="text-center mt-12">
      <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
      ></v-rating>
</div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    title: String,
    genres: [],
    rating: Number,
    review: String,
    description:String,
},
}
</script>

<style lang="scss">

</style>
