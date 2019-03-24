<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group id="emailInputGroup" label="Email:" label-for="emailInput">
      <b-form-input
        id="emailInput"
        type="email"
        v-model="email"
        required
        placeholder="Enter the band's email"
      />
    </b-form-group>

    <b-form-group id="passwordInputGroup" label="Password:" label-for="passwordInput">
      <b-form-input
        id="passwordInput"
        type="password"
        v-model="password"
        required
        placeholder="Enter the password"
      />
    </b-form-group>

    <b-form-group id="nameInputGroup" label="Name:" label-for="nameInput">
      <b-form-input
        id="nameInput"
        type="text"
        v-model="name"
        required
        placeholder="Enter the band's name."
      />
    </b-form-group>

    <b-form-group
      id="genresSelect"
      label="Select the band's genres:"
      description="CTRL + Click to select more than 1 option."
    >
      <b-form-select multiple v-model="genres" :options="listGenres"/>
    </b-form-group>

    <b-form-group id="creationInputGroup" label="Creation year:" label-for="creationInput">
      <b-form-input
        id="creationInput"
        type="text"
        v-model="creation_year"
        required
        placeholder="Enter the band's creation year."
      />
    </b-form-group>

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
      email: "",
      password: "",
      name: "",
      genres: [],
      creation_year: "",
      show: true
    };
  },
  methods: {
    ...mapActions(["registerBand"]),
    clear() {
      this.email = "";
      this.password = "";
      this.name = "";
      this.genres = [];
      this.creation_year = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        email: this.email,
        password: this.password,
        name: this.name,
        genres: this.genres,
        creation_year: this.creation_year
      };
      this.registerBand(payload);
      this.clear();
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