<template>
  <b-container class="main">
    <b-row class="content">
      <h1>{{person.name}}</h1>
    </b-row>
    <b-row align-h="between" class="content">
      <b-col class="col" cols="4">
        <h3>My information</h3>
        <hr/>
        <ul class="no-padding">
          <li>
            <h4>Name: {{person.name}}</h4>
          </li>
          <li>
            <h4>Email: {{person.email}}</h4>
          </li>
        </ul>
      </b-col>
      <b-col cols="8">
        <h1>Lorem</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde eaque repudiandae eos explicabo nam dolorem libero perspiciatis, sit architecto labore? Ut enim hic eaque alias est, qui necessitatibus dolor.</p>
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
      person: null
    };
  },
  mounted() {
    this.person = this.$store.getters.getPersonById(this.$route.params.id);
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

