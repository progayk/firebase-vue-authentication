<template>
  <div>
    <sui-card>
      <sui-card-content>
        <sui-form>
          <sui-form-field>
            <label>First Name</label>
            <input placeholder="First Name" >
          </sui-form-field>
          <sui-form-field>
            <label>Last Name</label>
            <input placeholder="Last Name" >
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="I agree to the Terms and Conditions" />
          </sui-form-field>
          <sui-button type="submit">Submit</sui-button>
        </sui-form>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data () {
    return {
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis eaque eos et eveniet expedita minima mollitia nemo numquam sed. Adipisci blanditiis commodi dolorem inventore labore minima nam temporibus ut!'
    }
  },
  methods: {}
}
</script>

<style lang="scss">
  @import '~bulma/bulma'
</style>
