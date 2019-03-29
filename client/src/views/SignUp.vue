<template>
  <b-container class="main">
    <b-row class="content">
      <h1>Sign up</h1>

      <b-form-select v-model="typeAccount" :options="accountTypes">
        <template slot="first">
          <option value="null" disabled>This account is for a:</option>
        </template>
      </b-form-select>
    </b-row>

    <b-row class="content" v-if="typeAccount !== null">
      <b-col v-if="typeAccount === accountTypes[0]">
        <BandForm/>
      </b-col>
      <b-col v-else>
        <PersonForm/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BandForm from "@/components/forms/BandForm";
import PersonForm from "@/components/forms/PersonForm";
import API from "@/services/Api.js";

export default {
  name: "SignUp",
  components: {
    BandForm,
    PersonForm
  },
  data() {
    return {
      typeAccount: null,
      accountTypes: ["Band", "Person"],
      test: null
    };
  },
  mounted() {
    API.get("/band")
      .then(response => {
        this.test = response;
      })
      .catch(err => (this.test = err));
  }
};
</script>
