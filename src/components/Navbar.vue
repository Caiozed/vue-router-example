<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

    </div>
    <div class="navbar-start">
       <router-link :to="navitem.path" v-for="(navitem, key) in navitems" :key="key"
        class="navbar-item">
          {{ navitem.name }}
       </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["navitems"]
};
</script>

<style>
.router-link-exact-active {
  background: cyan;
}
</style>

