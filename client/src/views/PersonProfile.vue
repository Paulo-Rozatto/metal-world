<template>
  <b-container class="main">
    <b-row class="content">
      <h1>{{person.name}}</h1>
    </b-row>
    <b-row sm="*" align-h="between" class="content">
      <b-col sm class="col">
        <h3>My information</h3>
        <hr>
        <b-table :items="[...person]" :fields="['name','email']" responsive dark></b-table>
      </b-col>
      <b-col sm>
        <h3>My Bands</h3>
        <hr>
        <b-table dark :items="myBands" :fields="['name','concerts']">
          <template slot="concerts" slot-scope="row">
            <b-button
              size="sm"
              @click="row.toggleDetails"
              class="mr-2"
            >{{ row.detailsShowing ? 'Hide' : 'Show'}} Concerts</b-button>
          </template>

          <template slot="row-details" slot-scope="row">
            <b-table v-if="row.item.concerts.length > 0" :items="row.item.concerts" dark></b-table>
            <h5 v-else>No concerts</h5>
          </template>
        </b-table>
        <b-form inline>
          <b-form-select v-model="selected" :options="options">
            <template slot="first">
              <option value="null" disabled>Follow a new band:</option>
            </template>
          </b-form-select>
          <b-button @click="newFollow">Follow</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PersonProfile",
  data() {
    return {
      person: null,
      myBands: null,
      selected: null,
      options: [],
      concerts: null
    };
  },
  methods: {
    newFollow() {
      if (this.selected) this.myBands.push(this.selected);
    }
  },
  mounted() {
    this.person = this.$store.getters.getPersonById(this.$route.params.id);
    this.myBands = this.$store.getters.getBandsById(this.person.following);
    this.concerts = this.myBands.map(band => band.concerts);
    let bands = this.$store.getters.getBands;
    bands = bands.filter(band => !this.myBands.includes(band));
    this.options = bands.map(band => ({
      value: band,
      text: band.name
    }));
  }
};
</script>

<style scoped>
.no-padding {
  padding: 0;
}
li {
  list-style-type: none;
}

.genres {
  list-style-type: disc;
}

hr {
  background-color: white;
}

.content {
  padding-left: 2%;
}
</style>

