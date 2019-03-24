<template>
  <div>
    <b-container class="main">
      <b-row class="content">
        <h1>List of bands</h1>
        <b-table striped hover dark responsive :items="bands"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Catalog",
  computed: {
    ...mapGetters({
      bands: 'getBandsMin'
    })
  },
};
</script>