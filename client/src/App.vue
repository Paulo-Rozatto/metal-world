<template>
  <div id="app">
    <div class="header">
      <Menu :route="$route.path">
        <b-nav-item to="/" class="nav-item">Home</b-nav-item>
        <b-nav-item to="/catalog" class="nav-item" v>Catalog</b-nav-item>
        <b-nav-item to="/about" class="nav-item">About</b-nav-item>
        <b-nav-item to="/login" class="nav-item" slot="sign">Login</b-nav-item>
        <b-nav-item to="/signup" class="nav-item" slot="sign">Sign up</b-nav-item>
        <b-nav-item :to="`${getProfRoute}`" class="nav-item" slot="profile">Profile</b-nav-item>
        <b-nav-item to="/logout" class="nav-item" slot="profile">Log out</b-nav-item>
      </Menu>
    </div>
    <router-view />
  </div>
</template>

<script>
import Menu from "./components/Menu";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data(){
    return{
      url: `hey`
    }
  },
  components: {
    Menu
  },
  computed:{
    ...mapGetters(['getProfRoute'])
  }
};
</script>

<style>
body {
  background-color: #555;
}

.main {
  padding-top: 2em;
}

.content {
  padding: 5%;
  margin: 1% 5%;
  background-color: #777;
  box-shadow: 10px 10px 10px #222;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  color: white;
  text-align: justify;
}

.img-left {
  float: left;
}

.img-right {
  float: right;
}

.nav-item > a {
  font-size: 1.1em;
  text-align: center;
  color: #fef;
  text-shadow: 3px 3px 3px #001;
}

.nav-item:hover {
  background: #222;
  border-radius: 8%;
}

h1 {
  padding: 2% 0;
}
</style>
