<template>
  <b-col sm="12" lg="8" class="pane" id="pane-right">
        <h2>My concerts</h2>
        <hr/>
        <b-form inline>
          <label class="sr-only" for="locationInput">Name</label>
          <b-input
            v-model="newConcert.location"
            class="mb-2 mr-sm-2 mb-sm-0"
            id="locationInput"
            placeholder="Location"
          />

          <label class="sr-only" for="dateInput">Date</label>
          <b-input
            v-model="newConcert.date"
            class="mb-2 mr-sm-2 mb-sm-0"
            id="dateInput"
            placeholder="Date"
          />

          <b-button @click="addConcert" variant="primary" size="md">+</b-button>
          <b-button @click="rmConcert" :disabled="selected.length < 1" variant="danger" size="md"> --</b-button>
        </b-form>
        <b-table
          class="padding-top"
          striped
          hover
          dark
          responsive
          selectable
          :select-mode="selectMode"
          @row-selected="rowSelected"
          :items="band.concerts"
        ></b-table>
        <p v-if="band.concerts.length < 1">No scheduled concerts</p>
      </b-col>
</template>

<script>
import CRUD from "@/services/CRUD_Band";

export default {
  name: 'MyConcerts',
  props: ['band'],
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
          this.newConcert.location = "",
          this.newConcert.date = ""
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
        if(res.success) {
          let index = this.band.concerts.indexOf(this.selected)
          this.band.concerts.splice(index,1)
        }
      }
    },
    rowSelected(items) {
      this.selected = items;
    }
  }
}
</script>

<style scoped>
.padding-top {
  padding-top: 0.5em;
}
</style>

