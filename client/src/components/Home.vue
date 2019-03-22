<template>
  <div>
    <div class="header">
      <Menu>
        <b-nav-item class="nav-item">Home</b-nav-item>
        <b-nav-item class="nav-item">Catalog</b-nav-item>
        <b-nav-item class="nav-item">About</b-nav-item>
      </Menu>
    </div>

    <b-container fluid class="full-height" style="background-color: #555;">
      <b-row class="banner">
        <b-col>
          <img src="../assets/hv.png">
        </b-col>
      </b-row>

      <b-row class="content"> 
        <b-col>
          <img class="img-left" src="../assets/hand-icon.png">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit soluta maiores alias repudiandae at nemo, ipsam nostrum eveniet. Inventore sequi voluptatibus distinctio laborum quis dolorem voluptatem odit iure ipsa voluptatum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
          <img class="img-right" src="../assets/guitar-icon.png" alt>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from "./Menu";

export default {
  name: "Home",
  components: {
    Menu
  }
};
</script>

<style scoped>
@media only screen and (max-width: 992px) {
  .banner {
    background-image: url("../assets/bg-small.jpg");
  }
  img {
    position: absolute;
    width: 95%;
    height: auto;
    /* max-height: 70%; */
    top: 30%;
  }
}

@media only screen and (min-width: 992px) {
  .banner {
    background-image: url("../assets/bg-medium.jpg");
  }
  img {
    width: 60%;
    height: auto;
    margin: 90px 20%;
  }
}

.bcont{
  background-color: #555;
}

.banner {
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-width: 100%;
  min-height: 100%;
}

.nav-item > a {
  text-align: center;
  color: #fef;
}

.nav-item:hover {
  background: #444;
}

.content {
  min-height: 300px;
  padding: 5%;
  margin: 1% 5%;
  background-color: #777;
  box-shadow: 10px 10px 10px #222;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  color: white;
  text-align: justify;
}

.content img {
  position: initial;
  width: auto;
  margin: 3%;
}

.img-left {
  float: left;
}

.img-right {
  float: right;
}

.full-height {
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
