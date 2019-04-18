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
        v-model="band.email"
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
      console.log(newGender)
      this.band.genres.push(newGender.value)
    },
    rmGender() {
      let index = this.band.genres.indexOf(this.selected)
      this.band.genres.splice(index,1)
    },
    rowSelected(items) {
      this.selected = items;
    }
  },
  mounted() {
    if (this.$store.getters.isCorrectId(this.$route.params.id)) {
      this.band = this.$store.getters.getUser;
    }
  }
};
</script>
