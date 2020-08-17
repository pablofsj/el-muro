<template>
  <div class="container">
    <div class="row">
      <form action="" @submit.prevent="addPost()" class="col s12 m12 ">
        <h4>Agrega un nuevo post </h4>
        <h4 class="post_header"></h4>
        <br>
        <div class="row">
          <div class="input-field col m12 s12">
            <textarea v-model="input_post" id="textarea1" class="materialize-textarea validate" required maxlength="150" ></textarea>
            <label for="textarea1">Escribe aquí lo que quieras, {{user.name}}...</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <button type="submit" class="btn-floating btn-large waves-effect waves-light yellow"><i class="material-icons right">add</i></button>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col s12 m12">
        <h3>The Wall</h3>
        <h3 class="post_header"></h3>
        <br>
      </div>
      <div v-for="publicacion in the_wall" v-bind:key="publicacion.id" class="col s12 m6">
        <div id="card_container" class="card horizontal">
          <div class="card-image">
            <img v-if="publicacion.imagen" :src="publicacion.imagen" alt="">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p id="autor">{{publicacion.autor}} dijo:</p>
              <p id="mensaje">{{publicacion.post}}</p>
              <p id="fecha">El {{publicacion.fecha}}</p>
            </div>
            <div class="card-action">
              <a @click.prevent="like(publicacion.id)" href="#" ><i class="material-icons">thumb_up</i> {{publicacion.likes}} </a>
            </div>
          </div>
        </div>
      </div>   
    </div>
  </div>       
</template>

<script>

import { db } from '../firebase'; 
import firebase from 'firebase/app'; 

export default {
  name: 'success',
  data(){
    return {
      the_wall: [], // to start, the list is empty
      input_post: ""

    }
  },

  computed:{
    user(){
      return this.$store.state.user;
    }
  },


  firestore() { // adding this key/function
    return {
      the_wall: db.collection('the_wall')
    }
  },

  methods:{
    addPost(){
      let fecha = new Date(); 
      let fecha_larga = fecha.toLocaleDateString();
      let hora_exacta = (fecha.getHours() + ":" + fecha.getMinutes());
      const user = firebase.auth().currentUser
      db.collection("the_wall").add({
        imagen: user.photoURL,
        autor: user.displayName,
        usuario: user.uid,
        post: this.input_post,
        likes: 0,
        fecha: `El ${fecha_larga} a las ${hora_exacta} hrs`
        
      });
      // reset values
      this.input_post = ""; 

    },

    like(publicacion_id){
      let publicacion = this.the_wall.find(publicacion => publicacion.id == publicacion_id);
      let likes = publicacion.likes;
      this.$firestore.the_wall.doc(publicacion_id).update({
        likes: likes + 1
      });
      console.log(publicacion.likes);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

img{
    
  width: 120px;
  height: 310px;
  object-fit: cover;
}

.card-image{
  width: 120px;
  height: 310px;
}

#card_container{
  
  height: 410px;

}

.card-action{
  
  height: 80px;

}

#autor{
  text-align: left;
}

#mensaje{
  font-weight: bold;
  font-style: italic;
  padding: 50px;
  text-align: center;
  align-content: center;
  justify-content: center;
  word-break: break-all
 

}

#fecha{
  text-align: right;
}

.post_header{
  position: relative;
  content: "";
  width: 100px;
  margin: 0 auto;
  margin-top: 10px;
  border: 2px solid #151e2d;
  display: block;
}
</style>
