<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group id="emailInputGroup" label="Email:" label-for="emailInput">
      <b-form-input
        id="emailInput"
        type="email"
        v-model="form.email"
        required
        placeholder="Enter the band's email"
      />
    </b-form-group>

    <b-form-group id="passwordInputGroup" label="Password:" label-for="passwordInput">
      <b-form-input
        id="passwordInput"
        type="password"
        v-model="form.password"
        required
        placeholder="Enter the password"
      />
    </b-form-group>

    <b-form-group id="nameInputGroup" label="Name:" label-for="nameInput">
      <b-form-input
        id="nameInput"
        type="text"
        v-model="form.name"
        required
        placeholder="Enter the band's name."
      />
    </b-form-group>

    <b-form-group
      id="genresSelect"
      label="Select the band's genres:"
      description="CTRL + Click to select more than 1 option."
    >
      <b-form-select multiple v-model="form.genres" :options="listGenres"/>
    </b-form-group>

    <b-form-group id="creationInputGroup" label="Creation year:" label-for="creationInput">
      <b-form-input
        id="creationInput"
        type="text"
        v-model="form.creation_year"
        required
        placeholder="Enter the band's creation year."
      />
    </b-form-group>

    <b-alert variant="success" :show="response.success">
      <p>Signed Up!</p>
      <p>
        <router-link to="/login">Click here to login</router-link>
      </p>
    </b-alert>
    <b-alert variant="danger" :show="response.error" dismissible>{{response.msg}}</b-alert>
    <br>

    <center>
      <b-btn type="submit" variant="dark" submit>Submit</b-btn>
      <b-button type="reset" variant="danger">Reset</b-button>
    </center>
  </b-form>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "BandForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
        genres: [],
        creation_year: ""
      },
      show: true,
      response: {
        success: false,
        error: false,
        msg: ""
      }
    };
  },
  methods: {
    ...mapActions(["registerBand"]),
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
        name: this.form.name,
        genres: this.genres,
        creation_year: this.form.creation_year
      };
      this.registerBand(payload)
        .then(res => {
          if (res.data.success) {
            this.response.success = true;
            this.response.error = false;
            this.clear();
          } else {
            this.response.success = false;
            this.response.error = true;
            this.response.msg = res.data.message;
          }
        })
        .catch(err => console.log(err));
    },
    onReset(evt) {
      evt.preventDefault();
      this.clear();
    }
  },
  computed: {
    ...mapGetters({
      listGenres: "getGenres"
    })
  }
};
</script>