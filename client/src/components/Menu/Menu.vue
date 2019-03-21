<template>
  <div ref="container" class="container">
    <dir class="title">
      <a href="#">Metal World</a>
    </dir>
    <div class="items">
      <BurgerMenu class="burguer-menu">
        <slot></slot>
      </BurgerMenu>
      <div class="horizontal-menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BurgerMenu from "./BurgerMenu";

export default {
  name: "Menu",
  components: {
    BurgerMenu
  },
  props: {
    bgDinamic: Boolean
  },
  methods: {
    scroll(scrollY) {
      scrollY > 50
        ? (this.$refs.container.style.background = "rgba(17,17,17,1)")
        : (this.$refs.container.style.background = "rgba(17,17,17,0)");
    }
  },
  mounted() {
    if (this.bgDinamic) {
      window.addEventListener("scroll", () => {
        this.scroll(window.scrollY);
      });
    } else {
      this.$refs.container.style.background = "rgba(17,17,17,1)";
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 999px) {
  .horizontal-menu {
    display: none;
  }
  .burguer-menu {
    position: inherit;
    top: 0.75em;
    right: 50px;
  }
}

@media only screen and (min-width: 1000px) {
  .burguer-menu {
    display: none;
  }
  .horizontal-menu > a {
    float: left;
    left: 95%;
    text-align: center;
    font-size: 1em;
    padding: 2% 5%;
  }

  .horizontal-menu > a:hover {
    background-color: #333;
  }
}

a {
  text-decoration: none;
  color: #fff;
  text-shadow: -2px 2px 5px #000;
}

.container {
  position: sticky;
  z-index: 888;
  margin: 0;
  padding: 0;
  position: fixed;
  /* background-color: rgb(17, 17, 17); */
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;
}

.title {
  position: absolute;
  top: 1em;
  width: 25%;
  left: 5%;
}

.title a {
  font-size: 1.3em;
}

.items {
  margin-top: 1.2em;
  position: absolute;
  width: 25%;
  right: 0;
}
</style>
