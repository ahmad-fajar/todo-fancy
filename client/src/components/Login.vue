<template>

  <div>
    <!-- error message -->
    <div class="alert alert-dismissible alert-danger" v-if="error">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Oh snap!</strong>
      <a href="#" class="alert-link">{{errormsg}}</a>
    </div>

    <div class="container">
      <div class="row">
        <div class="container" id="formContainer">

          <!-- signin -->
          <form class="form-signin" id="login" role="form">
            <h3 class="form-signin-heading">Please sign in</h3>
            <a href="#" id="flipToRecover" class="flipLink">
              <div id="triangle-topright"></div>
            </a>
            <input type="text" class="form-control" v-model="loginusername" id="loginEmail" placeholder="Username" required autofocus>
            <input type="password" class="form-control" v-model="loginpassword" id="loginPass" placeholder="Password" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="signin">Sign in</button>
            <center>
              <h5>OR</h5>
            </center>
            <!-- <button class=" btn btn-lg btn-facebook btn-block" type="submit" @click.prevent="flogin">Sign in via Facebook</button> -->
            <button class=" btn btn-lg btn-facebook btn-block" type="submit" onclick=FBLogin()>Sign in via Facebook</button>
          </form>

          <!-- signup -->
          <form class="form-signin" id="signup" role="form">
            <h3 class="form-signin-heading">Sign up</h3>
            <a id="flipToLogin" class="flipLink">
              <div id="triangle-topleft"></div>
            </a>
            <input type="text" class="form-control" v-model="signupusername" id="loginEmail" placeholder="Username" required autofocus>
            <input type="email" class="form-control" v-model="signupemail" id="loginEmail" placeholder="Email address" required autofocus>
            <input type="password" class="form-control" v-model="signuppassword" id="loginEmail" placeholder="Password" required autofocus>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="signup">Signup</button>
          </form>

        </div>  <!-- form container -->
      </div>
    </div>
  </div>

</template>

<<script>
export default {
  data () {
    return {
      signupusername: null,
      signuppassword: null,
      signupemail: null,
      loginusername: null,
      loginpassword: null,
      error: false,
      errormsg: null
    }
  }, // data

  methods: {
    signin () {
      let user = {
        username: this.loginusername,
        password: this.loginpassword
      }
      this.$axios.post('/signin', user)
      .then(({data}) => {
        if (data === '' || data === undefined) {
          console.log('username not found')
          this.error = true
          this.errormsg = 'Wrong username or password!'
        } else {
          localStorage.setItem('todoToken', data)
          this.$router.push('/')
        }
      })
    },
    signup () {
      let newUser = {
        username: this.signupusername,
        password: this.signuppassword,
        email: this.signupemail
      }
      this.$axios.post('/signup', newUser)
      .then(({data}) => {
        // console.log(data.code === 11000) // duplicate key (username). ini kiriman error
        if (data.code === 11000) {
          console.log('duplicate username or password')
          this.error = true
          this.errormsg = 'Username or email already used.'
        } else {
          localStorage.setItem('todoToken', data)
          this.$router.push('/')
        }
      })
    }
  } // methods
}
</script>
