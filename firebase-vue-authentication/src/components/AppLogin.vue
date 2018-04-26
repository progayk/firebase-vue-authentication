<template>
  <div>
    <section class="section">
      <div class="container is-fluid columns is-centered">
        <div class="column is-one-quarter">
          <!--<h1 class="title">Login</h1>-->
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
            <!--&lt;!&ndash;<p class="help is-success">This username is available</p>&ndash;&gt;-->
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
              <input class="input is-info is-rounded" type="password" placeholder="password" autofocus>
              <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
              <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
            </div>
          </div>
          <div class="buttons is-left">
            <a class="button is-primary is-rounded" v-on:click="login">Login</a>
            <router-link to="/signup"><a class="button is-outlined is-info is-rounded">Sign up</a></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data () {
    return {}
  },
  methods: {
    login: function () {
      this.$router.replace('hello')
    }
  }
}
</script>

<style lang="scss">
  @import '~bulma/bulma'
</style>
