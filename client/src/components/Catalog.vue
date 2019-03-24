<template>
  <div>
    <div>
      <Menu>
        <b-nav-item to="/" class="nav-item">Home</b-nav-item>
        <b-nav-item to="/catalog" class="nav-item">Catalog</b-nav-item>
        <b-nav-item to="/about" class="nav-item">About</b-nav-item>
      </Menu>
    </div>

    <b-container class="main">
      <b-row class="content">
        <h1>List of bands</h1>
        <b-table striped hover dark responsive :items="bands"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from "./Menu";
import { mapGetters } from 'vuex'

export default {
  name: "Catalog",
  components: {
    Menu
  },
  computed: {
    ...mapGetters({
      bands: 'getBandsMin'
    })
  },
};
</script>