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

export default {
  name: "Catalog",
  components: {
    Menu
  },
  data() {
    return {
      bands: [
        {
          name: "Hair Knights",
          genres: "Power Metal, Glam Metal",
          creation_year: "1995"
        },
        {
          name: "Hammer Nemesis",
          genres: "Death Metal",
          creation_year: "1989"
        },
        {
          name: "Wandering Ghosts",
          genres: "Symphonic Metal",
          creation_year: "1999"
        }
      ]
    };
  }
};
</script>