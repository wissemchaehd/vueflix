<template>
  <div id="app">
    <img alt="salle" src="../public/salle_cinema.jpg">
  <h1> Bienvenue sur VueFlix </h1>
    <br>
    <router-link to="/Admin"> <v-btn type="button">cliquez ici</v-btn></router-link>
    <router-view></router-view>

</div>
      </template>

      <script>


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



