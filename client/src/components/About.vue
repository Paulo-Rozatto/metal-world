<template>
  <div>
    <div>
      <Menu>
        <b-nav-item to="/" class="nav-item">Home</b-nav-item>
        <b-nav-item to="/catalog" class="nav-item">Catalog</b-nav-item>
        <b-nav-item to="/about" class="nav-item">About</b-nav-item>
      </Menu>
    </div>

    <b-container class="main">
      <b-row class="content">
        <h1>About</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate doloribus autem quaerat a nostrum nemo, sunt perferendis quam exercitationem corrupti nobis ullam et quod aliquam incidunt explicabo, suscipit, sapiente porro?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate doloribus autem quaerat a nostrum nemo, sunt perferendis quam exercitationem corrupti nobis ullam et quod aliquam incidunt explicabo, suscipit, sapiente porro?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate doloribus autem quaerat a nostrum nemo, sunt perferendis quam exercitationem corrupti nobis ullam et quod aliquam incidunt explicabo, suscipit, sapiente porro?</p>
      </b-row>
    </b-container>
  </div>
</template>
 
 <script>
import Menu from "./Menu";

export default {
  name: "About",
  components: {
    Menu
  }
};
</script>

<style scoped>

</style>
