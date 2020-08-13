<template>
  <div class="container">
    <div class="row">
      <div id="error_panel" class="col s12 m12" v-if="error">
        <div class="card-panel lime accent-2" >{{error}}</div> 
      </div>
      <form action="" @submit.prevent="register" class="col s12 m6 ">
        <h3>Registro</h3>
        <h3 class="post_header"></h3>
        <br>
        <div class="row">
          <div class="input-field col m12 s12">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" required class="validate"  maxlength="30" v-model="register_name">
            <label for="name">Nombre</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <i class="material-icons prefix">email</i>
            <input type="email" required class="validate" v-model="register_email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <i class="material-icons prefix">lock_outline</i>
            <input type="password" required class="validate" v-model="register_password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <i class="material-icons prefix">lock_outline</i>
            <input type="password" required id="confirm_pass" class="validate" v-model="register_confirm_password">
            <label for="confirm_password">Confirmar Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <i class="material-icons prefix">image</i>
            <input type="text" required class="validate" v-model="register_url_image">
            <label for="url_image">URL Imagen de perfil</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <button type="submit" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons right">send</i></button>
          </div>
        </div>
      </form>
      <form action="" @submit.prevent="login" class="col s12 m6 ">
        <h3>Login</h3>
        <h3 class="post_header"></h3>
        <br>
        <div class="row">
          <div class="input-field col m12 s12">
            <i class="material-icons prefix">email</i>
            <input type="email" required class="validate" v-model="login_email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <i class="material-icons prefix">lock_outline</i>
            <input type="password" required class="validate" v-model="login_password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12 s12">
            <button type="submit" class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons right">check</i></button>
          </div>
        </div>
      </form>
    </div>
    
    
  </div>       
</template>

<script>
export default {
  name: 'Auth',
  data(){
    return{
      register_name:'',
      register_email: '',
      register_password: '',
      register_confirm_password: '',
      register_url_image:'',
      login_email:'',
      login_password:''
    }
  },
  computed:{
    error(){
      return this.$store.state.error
    }

  },

  methods:{
    login(){
      console.log('llegue a login');
      this.$store.dispatch('login', {email: this.login_email, password: this.login_password})

    },

    register(){
      const confirm_pass = document.getElementById('confirm_pass');
      confirm_pass.setCustomValidity('') ;

      if ( this.register_password != this.register_confirm_password) {
        confirm_pass.setCustomValidity('Ambas contraseñas deben coincidir') ;
        return;
      }
      // Luego de validar, ahora se puede hacer registro del usuario mediante la accion que corresponde
       

      const datos = {
        name: this.register_name,
        email: this.register_email, 
        password: this.register_password,
        imageurl: this.register_url_image
      };
      
      this.$store.dispatch('register', datos)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

#error_panel{
  font-weight: bold;
  font-size: 2rem;
}
</style>
