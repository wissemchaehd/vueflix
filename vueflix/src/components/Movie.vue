<template>
  <div id="Movie">

    <h1>{{movie.title }}</h1>
    <ul>
      <li>Genre: {{movie.genres}}</li>
      <li>review: {{movie.review}}</li>
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
