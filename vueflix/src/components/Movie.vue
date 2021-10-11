<template>

  <div id="Movie">

    <h1>{{movie.title }}</h1>
    <ul>
      <li>Genre: {{movie. genre_ids}}</li>
      <li>review: {{movie.overview}}</li>
      <li>description: {{movie.description}}</li>
      <li>Evaluation : {{movie.rating}}</li>
      <li> <v-rating v-model="movie.rating" length="10" color="yellow darken-3" ></v-rating></li>

    </ul>
</div>

</template>

<script>
export default {
  name: "Movie",
  props: {
   movie: Object,
},
}
</script>

<style lang="scss">

</style>
