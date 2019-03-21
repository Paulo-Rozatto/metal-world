<template>
  <div class="main">
    <div class="banner">
      <img src="../assets/hv.png">
    </div>

    <div class="content">
      <img class="img-left" src="../assets/hand-icon.png">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit soluta maiores alias repudiandae at nemo, ipsam nostrum eveniet. Inventore sequi voluptatibus distinctio laborum quis dolorem voluptatem odit iure ipsa voluptatum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
      <img class="img-right" src="../assets/guitar-icon.png" alt>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quibusdam quis, quod ex sapiente fugiat ipsum nam nihil, ut nisi, saepe ratione suscipit accusantium modi cupiditate pariatur. Eligendi, quos.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
@media only screen and (max-width: 999px) {
  .banner {
    background-image: url("../assets/bg-small.jpg");
  }
  img {
    position: absolute;
    width: 95%;
    height: auto;
    max-height: 70%;
    top: 30%;
  }
}

@media only screen and (min-width: 1000px) {
  .banner {
    background-image: url("../assets/bg-medium.jpg");
  }
  img {
    width: 60%;
    height: auto;
    margin: 90px 20%;
  }
}

@media only screen and (min-width: 1920px) {
  .banner {
    background-image: url("../assets/bg-large.jpg");
  }
  img {
    width: 50%;
    height: auto;
    margin: 110px 15%;
  }
}

.main {
  display: grid;
}

.banner {
  margin: 0;
  background-position: center right;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-width: 100%;
  min-height: 100%;
}

.content {
  max-width: 100%;
  height: auto;
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
</style>
