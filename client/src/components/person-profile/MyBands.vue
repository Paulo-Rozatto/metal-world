<template>
  <b-col sm="12" lg="8" class="pane" id="pane-right">
    <h3>My Bands</h3>
    <hr>
    <h4>Coming soon!</h4>
    <!-- <b-table dark :items="myBands" :fields="['name','concerts']">
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
    </b-form> -->
  </b-col>
</template>

<script>
// import CRUD from "@/services/CRUD_Band";

export default {
  name: "MyConcerts",
  props: ["band"],
  data() {
    return {
      newConcert: {
        location: "",
        date: ""
      },
      selected: [],
      selectMode: "single"
    };
  },
  methods: {
    async addConcert() {
      const payload = {
        email: this.band.email,
        password: this.newConcert.password,
        concert: {
          location: this.newConcert.location,
          date: this.newConcert.date
        }
      };
      if (payload.concert.location && payload.concert.date) {
        let res = await CRUD.addConcert(payload);

        if (res.success) {
          this.band.concerts.push(res.newConcert);
          (this.newConcert.location = ""), (this.newConcert.date = "");
        } else {
          console.log(res.msg);
        }
      }
    },
    async rmConcert() {
      if (this.selected.length >= 1) {
        let res = await CRUD.rmConcert({
          email: this.band.email,
          concert: this.selected
        });
        if (res.success) {
          let index = this.band.concerts.indexOf(this.selected);
          this.band.concerts.splice(index, 1);
        }
      }
    },
    rowSelected(items) {
      this.selected = items;
    }
  }
};
</script>

<style scoped>
.padding-top {
  padding-top: 0.5em;
}
</style>

