<template>
  <b-container fluid class="main">
    <b-row class="content">
      <h1>{{person.name}}</h1>
    </b-row>

    <b-row align-v="start" align-h="between" class="content bg-null">
      <MyInformation :person="person"></MyInformation>
      <MyBands :person="person"></MyBands>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import MyInformation from "@/components/person-profile/MyInformation";
import MyBands from "@/components/person-profile/MyBands";

export default {
  name: "PersonProfile",
  components: {
    MyInformation,
    MyBands
  },
  data() {
    return {
      person: {
        name: "Not allowed or not found",
        email: "noemail@nowhere.com",
      },
      myBands: null,
      selected: null,
      options: [],
      concerts: null
    };
  },
  methods: {
    newFollow() {
      if (this.selected) this.myBands.push(this.selected);
    },
    obtainUser() {
      if (this.$store.getters.isCorrectId(this.$route.params.id)) {
        this.person = this.$store.getters.getUser;
      }
    }
  },
   mounted() {
    this.obtainUser()
  }
  // mounted() {
  //   this.person = this.$store.getters.getPersonById(this.$route.params.id);
  //   this.myBands = this.$store.getters.getBandsById(this.person.following);
  //   this.concerts = this.myBands.map(band => band.concerts);
  //   let bands = this.$store.getters.getBands;
  //   bands = bands.filter(band => !this.myBands.includes(band));
  //   this.options = bands.map(band => ({
  //     value: band,
  //     text: band.name
  //   }));
  // }
};
</script>

<style scoped>
.content {
  padding-left: 2%;
}

.bg-null {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  padding: 0;
}
.pane {
  background-color: #777;
  box-shadow: 10px 10px 10px #222;
}
</style>

