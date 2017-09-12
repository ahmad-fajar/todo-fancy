<template>

  <div class="container">
    <div class="row">
      <div class="container" id="formContainer">

        <!-- signin -->
        <form class="form-signin" id="login" role="form">
          <h3 class="form-signin-heading">Please sign in</h3>
          <a href="#" id="flipToRecover" class="flipLink">
            <div id="triangle-topright"></div>
          </a>
          <input type="text" class="form-control" v-model="username" id="loginEmail" placeholder="Username" required autofocus>
          <input type="password" class="form-control" v-model="password" id="loginPass" placeholder="Password" required>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <center>
            <h5>OR</h5>
          </center>
          <button class=" btn btn-lg btn-facebook btn-block" type="submit" onclick=FBLogin()>Sign in via Facebook</button>
        </form>

        <!-- signup -->
        <form class="form-signin" id="signup" role="form">
          <h3 class="form-signin-heading">Sign up</h3>
          <a id="flipToLogin" class="flipLink">
            <div id="triangle-topleft"></div>
          </a>
          <input type="text" class="form-control" v-model="username" id="loginEmail" placeholder="Username" required autofocus>
          <input type="email" class="form-control" v-model="email" id="loginEmail" placeholder="Email address" required autofocus>
          <input type="password" class="form-control" v-model="password" id="loginEmail" placeholder="Password" required autofocus>
          <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="signup">Signup</button>
        </form>

      </div>
      <!-- /container -->
    </div>
  </div>

</template>

<<script>
export default {
  data () {
    return {
      username: null,
      password: null,
      email: null
    }
  }, // data

  methods: {
    signup () {
      let newUser = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      this.$axios.post('/user', newUser)
      .then(({data}) => {
        // console.log(data.code === 11000) // duplicate key (username). ini kiriman error
        if (data.code === 11000) {
          console.log('duplicate username or password')
        } else {
          localStorage.setItem('todoToken', data)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
