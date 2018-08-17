
<template>
  <div>
    <Navbar :navitems="routes"/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  },

  data() {
    return {
      routes: [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]
    };
  }
};
</script>
