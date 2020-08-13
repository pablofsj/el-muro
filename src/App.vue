  
<template>
  <div id="app">
    <nav>
    <div class="nav-wrapper purple darken-3">
      <a id="logo">The Wall</a>
      <a v-if="user" id="name"> {{user.name}} </a>
      <img v-if="user" id="image_profile" :src= "user.imageurl" alt="">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-if="user"><router-link v-bind:to="{ name: 'success' }">Muro</router-link></li>
        <li><router-link v-bind:to="{ name: 'auth' }">Login/Registro</router-link></li>
        <li v-if="user" @click.prevent="logout"><router-link v-bind:to="{ name: 'auth' }">Salir</router-link></li>
      </ul>
    </div>
    </nav>
    <br>
    <br>
    <br>
    <router-view />    
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    user(){
      return this.$store.state.user;
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout');

    }
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  position: fixed;
}

#logo{
    font-family: 'Bungee Shade', cursive;
    margin-right: 900px;
    font-size: 30px;
    position: relative;
    
}

#name{
    margin-right: 700px;
    margin-left: -500px;
    position: absolute;
    
}

#image_profile{
    margin-right: 700px;
    margin-left: -350px;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius:100%;
    
}

li{
  position: sticky;
}

*{
  font-family: 'Baloo Tamma 2', cursive;
  
}

</style>