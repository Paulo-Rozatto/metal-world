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

    <b-alert variant="success" :show="signedStatus.success">
      <p>Signed Up!</p>
      <p>
        <router-link to="/login">Click here to login</router-link>
      </p>
    </b-alert>
    <b-alert variant="danger" :show="signedStatus.error" dismissible>{{signedStatus.msg}}</b-alert>
    <br>

    <center>
      <b-btn type="submit" variant="dark" submit>Submit</b-btn>
      <b-button type="reset" variant="danger">Reset</b-button>
    </center>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";
import CRUD from "@/services/CRUD_Person"

export default {
  name: "PersonForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: ""
      },
      show: true,
      signedStatus: {
        success: false,
        error: false,
        msg: ""
      }
    };
  },
  methods: {
    clear() {
      this.form.email = "";
      this.form.password = "";
      this.form.name = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        email: this.form.email,
        password: this.form.password,
        name: this.form.name
      };
      let response = await CRUD.createPerson(payload)

      if(response.success){
        this.clear()
        this.signedStatus.success = true
        this.signedStatus.error = false
      }
      else{
        this.signedStatus.success = false
        this.signedStatus.error = true
        this.signedStatus.msg = response.msg
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.clear();
    }
  }
};
</script>