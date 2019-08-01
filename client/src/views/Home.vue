<template>
  <div>
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
export default {
  name: "Home",
};
</script>

<style scoped>
@media only screen and (max-width: 992px) {
  .banner {
    background-image: url("../assets/bg-small.jpg");
  }
  img {
    position: absolute;
    width: 85%;
    height: auto;
    max-height: 80%;
    top: 25%;
  }
}

@media only screen and (min-width: 992px) and (max-width: 13666px) {
  .banner {
    background-image: url("../assets/bg-medium.jpg");
  }
  img {
    width: 60%;
    height: auto;
    margin: 90px 20%;
  }
}

@media only screen and (min-width: 1367px){
  .banner {
    background-image: url("../assets/bg-large.jpg");
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

.full-height {
  position: absolute;
  top: 0;
  bottom: 0;
}

.content img {
  position: initial;
  width: auto;
  margin: 3%;
}
</style>
