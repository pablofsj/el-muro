<template>
  <div class="container">
    <div class="row">
      <form action="" @submit.prevent="addpost" class="col s12 m12 ">
        <h4>Agrega un nuevo post </h4>
        <h4 class="post_header"></h4>
        <br>
        <div class="row">
          <div class="input-field col m12 s12">
            <textarea id="textarea1" class="materialize-textarea validate" required maxlength="150" v-model="register_name" ></textarea>
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
  </div>       
</template>

<script>
export default {
  name: 'success',
  computed:{
    user(){
      return this.$store.state.user;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
