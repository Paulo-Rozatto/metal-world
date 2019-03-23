<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body{
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

h1{
  padding: 2% 0;
}
</style>
