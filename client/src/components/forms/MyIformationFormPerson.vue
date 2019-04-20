<template>
  <b-form>
    <b-form-group id="nameInputGroup" label="Name:" label-for="nameInput">
      <b-form-input
        id="nameInput"
        type="text"
        v-model="person.name"
        required
        placeholder="Enter the band's name."
      />
    </b-form-group>

    <b-form-group id="emailInputGroup" label="Email:" label-for="emailInput">
      <b-form-input
        id="emailInput"
        type="email"
        v-model="person.newEmail"
        required
        placeholder="Enter the band's email"
      />
    </b-form-group>
  </b-form>
</template>

<script>
import CRUD from "@/services/CRUD_Person";

export default {
  props: ["data"],
  data() {
    return {
      person: null
    };
  },
  methods: {
    rowSelected(items) {
      this.selected = items;
    },
    async save() {
      // This function is called by its parent (MyInformation.vue)
      let res = await CRUD.updatePerson(this.person);

        if (res.success) {
          this.$store.commit("loginUser", res.person);
          this.$parent.$parent.obtainUser()
        } else {
          console.log(res.msg);
        }
    }
  },
  mounted() {
    if (this.$store.getters.isCorrectId(this.$route.params.id)) {
      let user = this.$store.getters.getUser;
      this.person = {
        name: user.name,
        email: user.email,
        newEmail: user.email
      }
    }
  }
};
</script>
