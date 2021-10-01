<template>
  <div id="Movie">
    <h1>{{movie.title }}</h1>
    <p>Genre {{movie.genres}}</p>
    <p>Evaluation
    <v-rating   v-model="movie.rating" length="10" color="yellow darken-3" ></v-rating>
    </p>
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
