<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group id="nameInputGroup" label="Name:" label-for="nameInput">
      <b-form-input
        id="nameInput"
        type="text"
        v-model="form.name"
        required
        placeholder="Enter your name."
      />
    </b-form-group>

    <b-form-group id="emailInputGroup" label="Email:" label-for="emailInput">
      <b-form-input
        id="emailInput"
        type="email"
        v-model="form.email"
        required
        placeholder="Enter your email"
      />
    </b-form-group>

    <b-form-group id="passwordInputGroup" label="Password:" label-for="passwordInput">
      <b-form-input
        id="passwordInput"
        type="password"
        v-model="form.password"
        required
        placeholder="Enter your password"
      />
    </b-form-group>

    <center>
      <b-btn type="submit" variant="dark" submit>Submit</b-btn>
      <b-button type="reset" variant="danger">Reset</b-button>
    </center>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PersonForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: ""
      },
      show: true
    };
  },
  methods: {
    ...mapActions(["registerPerson"]),
    clear() {
      this.form.email = "";
      this.form.password = "";
      this.form.name = "";
      this.form.genres = [];
      this.form.creation_year = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        email: this.form.email,
        password: this.form.password,
        name: this.form.name
      };
      this.registerPerson(payload);
      this.clear();
    },
    onReset(evt) {
      evt.preventDefault();
      this.clear();
    }
  }
};
</script>