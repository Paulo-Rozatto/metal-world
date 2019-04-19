<template>
  <b-col sm="12" lg="4" class="pane">
    <b-row align-v="center">
      <b-col>
        <h2>My information</h2>
      </b-col>
      <b-col v-if="!isEditing">
        <b-button @click="toggleEditing" variant="primary">Edit</b-button>
      </b-col>
      <b-col v-else>
        <b-button @click="save" variant="primary">Save</b-button>
        <b-button @click="toggleEditing" variant="danger">Cancel</b-button>
      </b-col>
    </b-row>
    <hr>
    <ul v-if="!isEditing" class="no-padding">
      <li>
        <h5>Name: {{person.name}}</h5>
      </li>
      <li>
        <h5>Email: {{person.email}}</h5>
      </li>
    </ul>

    <MyInfoForm ref="infoForm" v-else :data="person"></MyInfoForm>
  </b-col>
</template>

<script>
import MyInfoForm from "@/components/forms/MyIformationFormPerson";

export default {
  name: "MyInformation",
  props: ["person"],
  components: {
    MyInfoForm
  },
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    save(){
      this.$refs.infoForm.save(),
      this.toggleEditing()
    },
    toggleEditing() {
      this.isEditing = !this.isEditing;
    }
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}

.genres {
  list-style-type: disc;
}

hr {
  background-color: white;
}
</style>
