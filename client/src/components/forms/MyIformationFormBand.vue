<template>
  <b-form>
    <b-form-group id="nameInputGroup" label="Name:" label-for="nameInput">
      <b-form-input
        id="nameInput"
        type="text"
        v-model="band.name"
        required
        placeholder="Enter the band's name."
      />
    </b-form-group>

    <b-form-group id="emailInputGroup" label="Email:" label-for="emailInput">
      <b-form-input
        id="emailInput"
        type="email"
        v-model="band.newEmail"
        required
        placeholder="Enter the band's email"
      />
    </b-form-group>

    <b-form-group id="creationInputGroup" label="Creation year:" label-for="creationInput">
      <b-form-input
        id="creationInput"
        type="text"
        v-model="band.creation_year"
        required
        placeholder="Enter the band's creation year."
      />
    </b-form-group>

    <b-form-group id="genresGroup" label="Genres:" label-for="newGenderInput">
      <b-form-input
        id="newGender"
        type="text"
        v-model="newGender"
        required
        placeholder="New Gender"
      />
      <b-button @click="addGender" variant="primary" size="md">+</b-button>
      <b-button @click="rmGender" :disabled="selected.length < 1" variant="danger" size="md">--</b-button>
    </b-form-group>
    <b-table
      striped
      hover
      dark
      responsive
      selectable
      :select-mode="'single'"
      @row-selected="rowSelected"
      :items="band.genres.map(e => ({Gender: e}))"
    ></b-table>
  </b-form>
</template>

<script>
import CRUD from "@/services/CRUD_Band";

export default {
  props: ["data"],
  data() {
    return {
      newGender: "",
      selected: [],
      band: null
    };
  },
  methods: {
    addGender() {
      this.band.genres.push(newGender.value)
    },
    rmGender() {
      let index = this.band.genres.indexOf(this.selected)
      this.band.genres.splice(index,1)
    },
    rowSelected(items) {
      this.selected = items;
    },
    async save() {
      // This function is called by its parent (MyInformation.vue)
      let res = await CRUD.updateBand(this.band);

        if (res.success) {
          this.$store.commit("loginUser", res.band);
          this.$parent.$parent.obtainUser()
        } else {
          console.log(res.msg);
        }
    }
  },
  mounted() {
    if (this.$store.getters.isCorrectId(this.$route.params.id)) {
      let user = this.$store.getters.getUser;
      this.band = {
        name: user.name,
        email: user.email,
        newEmail: user.email,
        creation_year: user.creation_year,
        genres: [...user.genres]
      }
    }
  }
};
</script>
