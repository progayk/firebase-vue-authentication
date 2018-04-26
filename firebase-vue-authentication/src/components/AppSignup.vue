<template>
  <div>
    <section class="section">
      <div class="container is-fluid columns is-centered">
        <div class="column is-one-quarter">
          <!--<h3 class="title">Sign up</h3>-->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success is-rounded" type="text" placeholder="username" autofocus>
              <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
              <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
            </div>
            <!--<p class="help is-success">This username is available</p>-->
          </div>

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-info is-rounded" type="password" placeholder="password" autofocus>
              <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
              <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger is-rounded" type="email" placeholder="your_mail@">
              <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
              <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
            </div>
            <!--<p class="help is-danger">This email is invalid</p>-->
            <label class="checkbox">
              <input type="checkbox">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
          <div class="buttons is-centered">
            <a class="button is-outlined is-primary is-rounded">Submit</a>
            <router-link to="/login"><a class="button is-outlined is-info is-rounded">Login</a></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppSignup',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
  @import '~bulma/bulma';
  label {
    margin-top: 20px;
  }
</style>
