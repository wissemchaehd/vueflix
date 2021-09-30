<template>
  <div id="Movie">

    <h1>{{ movie.title }} :</h1>
    <h3>Genre de film : {{ movie.genres }}</h3>
    <h2>Evaluation : {{ movie.rating }}</h2>
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

<style>

</style>
