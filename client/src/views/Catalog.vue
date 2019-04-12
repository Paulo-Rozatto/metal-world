<template>
  <div>
    <b-container class="main">
      <b-row class="content">
        <h1>List of bands</h1>
        <!-- <b-table striped hover dark responsive :items="bands"/> -->

        <b-table dark :items="bands" :fields="['name','genres','creationYear','concerts']">
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
        </b-table>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CRUD from '@/services/CRUD_Band.js'

export default {
  name: "Catalog",
  data() {
    return {
      bands: []
    }
  },
  methods: {
    async readBands(){
      this.bands = await CRUD.readBands()
    }
  },
  // computed: {
  //   ...mapGetters({
  //     bands: 'getBandsMin'
  //   })
  // },
  mounted() {
    this.readBands()
  },
};
</script>