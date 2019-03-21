<template>
  <div id="app">
    <Menu bg-dinamic>
      <a href="#">Home</a>
      <a href="#">Catalog</a>
      <a href="#">About</a>
    </Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from "./components/Menu/Menu";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style>
* {
  margin: 0 auto;
  padding: 0;
}

#app {
  background-color: #555;
}
</style>
