<template>
  <b-container class="main">
    <b-row align-h="center" class="content">
      <b-col align-self="center" cols="10">
        
        <b-alert variant="danger" :show="failed" dismissible>Invalid email or password</b-alert>

        <b-form @submit="onSubmit" v-if="show">
          <b-form-group id="emailInputGroup" label="Email:" label-for="emailInput">
            <b-form-input
              id="emailInput"
              type="email"
              v-model="form.email"
              required
              placeholder="Enter the band's email"
            />
          </b-form-group>

          <b-form-group id="passwordInputGroup" label="Password:" label-for="passwordInput">
            <b-form-input
              id="passwordInput"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter the password"
            />
          </b-form-group>

          <b-form-group label="I'm a:">
            <b-form-radio-group required>
              <b-form-radio v-model="selected" name="bandRadio" value="Band">Band</b-form-radio>
              <b-form-radio v-model="selected" name="personRadio" value="Person">Person</b-form-radio>
            </b-form-radio-group>
          </b-form-group>

          <b-button type="submit" variant="dark">Login</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
 
 <script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true,
      failed: false,
      selected: ""
    };
  },
  methods: {
    clear() {
      this.form.email = "";
      this.form.password = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const band = this.$store.getters.getBand(
        this.form.email,
        this.form.password
      );

      if (this.selected === "band") {
        this.$router.push({ name: "BandProfile", params: { id: band.id } });
      } else {
        const person = this.$store.getters.getPerson(
          this.form.email,
          this.form.password
        );
        if (person) {
          this.$router.push({
            name: "PersonProfile",
            params: { id: person.id }
          });
        } else {
          console.log("failed");
          this.failed = true;
          this.clear();
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
