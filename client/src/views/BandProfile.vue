<template>
  <b-container fluid class="main">
    <b-row class="content">
      <h1>{{band.name}}</h1>
    </b-row>

    <b-row align-v="start" align-h="between" class="content bg-null">
      <MyInformation :band="band"></MyInformation>

      <MyConcerts :band="band"></MyConcerts>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import MyInformation from "@/components/band-profile/MyInformation";
import MyInfoForm from "@/components/forms/MyIformationFormBand";
import MyConcerts from "@/components/band-profile/MyConcerts";

export default {
  name: "BandProfile",
  components: {
    MyInformation,
    MyConcerts,
    MyInfoForm
  },
  data() {
    return {
      band: {
        name: "Not allowed or not found",
        email: "noemail@nowhere.com",
        creation_year: "-1",
        genres: [],
        concerts: []
      }
    };
  },
  methods: {
    obtainUser() {
      if (this.$store.getters.isCorrectId(this.$route.params.id)) {
        this.band = this.$store.getters.getUser;
      }
    }
  },
  mounted() {
    this.obtainUser()
  }
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

