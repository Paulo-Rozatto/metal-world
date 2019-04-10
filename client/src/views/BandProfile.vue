<template>
  <b-container class="main">
    <b-row class="content">
      <h1>{{band.name}}</h1>
    </b-row>
    <b-row align-h="between" class="content">
      <b-col class="col" cols="4">
        <h3>My information</h3>
        <hr>
        <ul class="no-padding">
          <li>
            <h5>Name: {{band.name}}</h5>
          </li>
          <li>
            <h5>Email: {{band.email}}</h5>
          </li>
          <li>
            <h5>Creation Year: {{band.creation_year}}</h5>
          </li>
          <li>
            <h5>Genres:</h5>
            <ul>
              <li class="genres" v-for="(gender, index) in band.genres" :key="index">
                <h5>{{'\t' + gender}}</h5>
              </li>
            </ul>
          </li>
        </ul>
      </b-col>
      <b-col cols="8">
        <h1>Concerts</h1>
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

          <b-button @click="addConcert" variant="primary">Add</b-button>
          <b-button :disabled="selected.length < 1" @click="rmConcert" variant="danger">rm</b-button>
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
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import CRUD from "@/services/CRUD_Band";

export default {
  name: "BandProfile",
  data() {
    return {
      band: {
        name: "Not allowed or not found",
        email: "noemail@nowhere.com",
        creation_year: "-1",
        genres: [],
        concerts: []
      },
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
  },
  mounted() {
    if (this.$store.getters.isCorrectId(this.$route.params.id)) {
      this.band = this.$store.getters.getUser;
    }
  }
};
</script>

<style scoped>
.no-padding {
  padding: 0;
}

.padding-top {
  padding-top: 0.5em;
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

.col {
  border-right: 1px solid white;
}

.content {
  padding-left: 2%;
}
</style>

