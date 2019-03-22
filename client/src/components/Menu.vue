<template>
  <div>
    <b-navbar class="main" type="dark" toggleable="lg" fixed="top">
      <b-navbar-brand>Metal World</b-navbar-brand>

      <b-navbar-toggle target="side-nav"/>

      <b-collapse is-nav id="hori-nav">
        <b-navbar-nav class="ml-auto">
          <slot></slot>
        </b-navbar-nav>
      </b-collapse>

      <b-collapse id="side-nav">
        <b-button size="sm" class="close-btn" variant="danger" v-b-toggle.side-nav>x</b-button>
        <b-nav vertical>
          <slot></slot>
        </b-nav>
        <div class="layer" v-b-toggle.side-nav></div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    bgDinamic: Boolean
  },
  methods: {
    scroll(scrollY) {
      scrollY > 50
        ? (this.$refs.container.style.background = "rgba(17,17,17,1)")
        : (this.$refs.container.style.background = "rgba(17,17,17,0)");
    }
  }
};
</script>

<style scoped>
.main{
  background: #111;
}

#side-nav {
  position: fixed;
  right: 0;
  left: 15%;
  top: 0;
  bottom: 0;
  transition: 0.1s;
  background: #555;
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

.close-btn-cross {
  background: #bdc3c7;
}
</style>
