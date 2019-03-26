<template>
  <b-container class="main">
    <b-row class="content">
      <h1>{{band.name}}</h1>
    </b-row>
    <b-row align-h="between" class="content">
      <b-col class="col" cols="4">
        <h3>My information</h3>
        <hr/>
        <ul class="no-padding">
          <li>
            <h4>Name: {{band.name}}</h4>
          </li>
          <li>
            <h4>Email: {{band.email}}</h4>
          </li>
          <li>
            <h4>Creation Year: {{band.creation_year}}</h4>
          </li>
          <li>
            <h4>Genres:</h4>
            <ul>
              <li class="genres" v-for="(gender, index) in band.genres" :key="index">
                <h4>{{'\t' + gender}}</h4>
              </li>
            </ul>
          </li>
        </ul>
      </b-col>
      <b-col cols="8">
        <h1>Concerts</h1>
        <p>No schelduled concerts.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BandProfile",
  data() {
    return {
      band: null
    };
  },
  mounted() {
    this.band = this.$store.getters.getBandById(this.$route.params.id);
  }
};
</script>

<style scoped>
.no-padding{
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

.col {
  border-right: 1px solid white;
}

.content{
  padding-left: 2%;
}
</style>

