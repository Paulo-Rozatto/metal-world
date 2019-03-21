<template>
  <div>
    <div ref="sidebar" class="sidebar">
      <span class="close-btn" @click="closeSidebar">
        <span
          v-for="(x, index) in 2"
          :key="index"
          class="close-btn-cross"
          :style="{ position: 'absolute', width: '3px', height: '14px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}"
        ></span>
      </span>

      <span class="items">
        <slot></slot>
      </span>
    </div>

    <div ref="layer" class="layer" @click="closeSidebar"></div>

    <div class="burger-btn" @click="openSidebar">
      <!-- define the burge's region -->
      <!-- burge's lines -->
      <!-- v-for - create multiple lines -->
      <!-- :style - move the line's position depending on the index -->
      <span
        class="burger-bars line-style"
        v-for="(x, index) in 3"
        :key="index"
        :style="{top: 33 * index + '%' }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu",
  methods: {
    openSidebar() {
      this.$refs.sidebar.style.width = "300px";
      this.$refs.layer.style.display = "inline";
    },
    closeSidebar() {
      this.$refs.sidebar.style.width = "0px";
      this.$refs.layer.style.display = "none";
    }
  }
};
</script>

<style scoped>
.burger-btn {
  position: absolute;
  width: 36px;
  height: 30px;
  cursor: pointer;
}
.burger-bars {
  background-color: #fff;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}

.sidebar {
  height: 100%; /* 100% Full-height */
  width: 0px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1010; /* Stay on top */
  top: 0;
  right: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  background-color: #222;
}

.items > a {
  display: block;
  text-decoration: none;
  text-align: center;
  color: #fff;
  padding: 5%;
}

.items > a:hover {
  background-color: #333;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
  height: 24px;
  width: 24px;
}

.close-btn-cross {
  background: #bdc3c7;
}

.layer {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 300px;
}
</style>
