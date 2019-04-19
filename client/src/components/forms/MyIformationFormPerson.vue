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
        v-model="person.email"
        required
        placeholder="Enter the band's email"
      />
    </b-form-group>
  </b-form>
</template>

<script>
import CRUD from "@/services/CRUD_Band";

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
      console.log('Hi')
      // let res = await CRUD.updateBand(this.band);

      //   if (res.success) {
      //     this.$store.commit("loginUser", res.band);
      //     this.$parent.$parent.obtainUser()
      //   } else {
      //     console.log(res.msg);
      //   }
    }
  },
  mounted() {
    let user = this.$store.getters.getUser;
    console.log(user.name)
    // if (this.$store.getters.isCorrectId(this.$route.params.id)) {
      
      this.person = {
        name: user.name,
        email: user.email
      }
    // }
  }
};
</script>
