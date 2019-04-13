<template>
  <b-container fluid class="main">
    <b-row class="content">
      <h1>{{band.name}}</h1>
    </b-row> 

    <b-row align-v="start" align-h="between" class="content bg-null">
      <b-col sm="12" lg="4" class="pane">
         <h2>My information</h2>
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
  },
  mounted() {
    if (this.$store.getters.isCorrectId(this.$route.params.id)) {
      this.band = this.$store.getters.getUser;
    }
  }
};
</script>

<style scoped>
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

.content {
  padding-left: 2%;
}

.bg-null {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  padding: 0;
}
.pane{
  background-color: #777;
  box-shadow: 10px 10px 10px #222;
}
</style>

