<template>
  <div>
    <section class="section">
      <div class="container is-fluid columns is-centered">
        <div class="column is-one-quarter">
          <!--<h3 class="title">Sign up</h3>-->
          <!--<div class="field">-->
            <!--<div class="control has-icons-left has-icons-right">-->
              <!--<input class="input is-success is-rounded" type="text" placeholder="username" autofocus>-->
              <!--<span class="icon is-small is-left">-->
      <!--<i class="fas fa-user"></i>-->
    <!--</span>-->
              <!--<span class="icon is-small is-right">-->
      <!--<i class="fas fa-check"></i>-->
    <!--</span>-->
            <!--</div>-->
            <!--<p class="help is-success">This username is available</p>-->
          <!--</div>-->

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger is-rounded" type="email" v-model="email" placeholder="your_mail@">
              <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
              <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
            </div>
            <!--<p class="help is-danger">This email is invalid</p>-->
          </div>

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-info is-rounded" type="password" v-model="password" placeholder="password">
              <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
              <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
            </div>
          </div>

          <label class="checkbox">
            <input type="checkbox">
            I agree to the <a href="#">terms and conditions</a>
          </label>
          <div class="buttons is-left">
            <a class="button is-primary is-rounded" v-on:click="signUp">Submit</a>
            <router-link to="/login"><a class="button is-outlined is-info is-rounded">Login</a></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'AppSignup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Your account has been created!')
        },
        function (err) {
          alert('Oops, ' + err.message)
        }
      )
    }
  }
}
</script>

<style lang="scss">
  @import '~bulma/bulma';
  label {
    margin-top: 10px;
    margin-bottom: 16px;
  }
</style>
