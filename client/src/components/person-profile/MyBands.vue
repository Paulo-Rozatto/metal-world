<template>
  <b-col sm="12" lg="8" class="pane" id="pane-right">
    <h2>My Bands</h2>
    <hr>
    <p v-if="!myBands.length"> Your are not following any band</p>
    <b-table v-else dark :items="myBands" :fields="['name','concerts','unfollow']">
      <template slot="concerts" slot-scope="row">
        <b-button
          size="sm"
          @click="row.toggleDetails"
          class="mr-2"
        >{{ row.detailsShowing ? 'Hide' : 'Show'}} Concerts</b-button>
      </template>

      <template slot="row-details" slot-scope="row">
        <b-table v-if="row.item.concerts.length > 0" :items="row.item.concerts" dark></b-table>
        <h5 v-else>No concerts</h5>
      </template>

      <template slot="unfollow" slot-scope="row">
          <b-button size="sm" @click="unfollow(row)" class="mr-2">unfollow</b-button>
        </template>
    </b-table>

    <p>
      Follow new bands:
      <b-button v-b-modal.modal-1>Follow...</b-button>
    </p>

    <!-- Modal Component -->
    <b-modal
      id="modal-1"
      title="Follow new bands"
      size="lg"
      header-bg-variant="dark"
      body-bg-variant="dark"
      footer-bg-variant="dark"
    >
      <p v-if="!allBands.length">You already follow all our bands</p>
      <b-table v-else dark :items="allBands" :fields="['name','genres','follow']">
        <template slot="follow" slot-scope="row">
          <b-button size="sm" @click="newFollow(row)" class="mr-2">Follow</b-button>
        </template>
      </b-table>
    </b-modal>
  </b-col>
</template>

<script>
import CRUD_BAND from "@/services/CRUD_Band";
import CRUD_PERSON from "@/services/CRUD_Person";

export default {
  name: "MyConcerts",
  props: ["person"],
  data() {
    return {
      newConcert: {
        location: "",
        date: ""
      },
      selected: [],
      selectMode: "single",
      allBands: [],
      myBands: []
    };
  },
  methods: {
    rowSelected(items) {
      this.selected = items;
    },
    async newFollow(row){
      let response = await CRUD_PERSON.followBand({
        email: this.person.email,
        newBand: row.item.id
      })
      if(response.success){
        this.myBands.push(row.item),
        this.allBands.splice(row.index,1)
      }
      else{
        console.log(response.success, response.msg)
      }
    },
    async unfollow(row){
      let response = await CRUD_PERSON.unfollowBand({
        email: this.person.email,
        newBand: row.item.id
      })
      if(response.success){
        this.allBands.push(row.item),
        this.myBands.splice(row.index,1)
      }
      else{
        console.log(response.success, response.msg)
      }
    },
    async readBands() {
      this.allBands = await CRUD_BAND.readBands();
    },
    filterBands() {
      this.myBands = this.allBands.filter((e, idx) => {
        let index = this.person.bands.indexOf(e.id);
        if (index > -1) {
          this.allBands.splice(idx, 1);
          return true;
        }
        return false;
      });
    }
  },
  mounted() {
    this.readBands().then(() => this.filterBands());
  }
};
</script>

<style scoped>
.padding-top {
  padding-top: 0.5em;
}
</style>

