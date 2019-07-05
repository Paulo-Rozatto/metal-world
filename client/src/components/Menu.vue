<template>
  <div>
    <b-navbar
      :class="[ scrollY < 50 && (this.$route.path === '/') ? 'bg-transparent': 'bg-dark']"
      type="dark"
      toggleable="lg"
      fixed="top"
    >
      <b-navbar-brand to="/" class="title">Metal World</b-navbar-brand>

      <b-navbar-toggle class="tg-btn" target="side-nav" />

      <b-collapse is-nav id="hori-nav">
        <b-nav class="ml-auto">
          <slot class="!nav-item"></slot>
          <slot v-if="!isLogged" name="sign"></slot>
          <slot v-else name="profile"></slot>
        </b-nav>
      </b-collapse>

      <b-collapse id="side-nav">
        <b-button size="sm" class="close-btn" variant="danger" v-b-toggle.side-nav>x</b-button>
        <b-nav vertical style="margin-top: 10%;" v-b-toggle.side-nav>
          <slot v-if="!isLogged" name="sign"></slot>
          <slot v-else name="profile"></slot>
          <slot></slot>
        </b-nav>
        <div class="layer" v-b-toggle.side-nav></div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Menu",
  data() {
    return {
      isTransparent: false,
      scrollY: 0
    };
  },
  props: {
    route: String
  },
  computed:{
    ...mapGetters(['isLogged'])
  },
  created() {
    window.addEventListener("scroll", () => {
      this.scrollY = window.scrollY;
      this.updateLoginStatus();
    });
  }
};
</script>

<style scoped>
#side-nav {
  position: fixed;
  right: 0;
  left: 15%;
  top: 0;
  bottom: 0;
  transition: 0.1s;
  background: #444;
}

.layer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 75%;
}

.close-btn {
  position: absolute;
  top: 2px;
  right: 2px;
}

.title {
  font-size: 1.5em;
  color: #fff;
  text-shadow: 3px 2px 3px #000;
}

.tg-btn {
  background: rgba(100, 100, 100, 0.7);
}

.bg-transpaent {
  background: rgba(17, 17, 17, 0);
}

.bg-dark {
  background: rgba(17, 17, 17, 1);
}
</style>
