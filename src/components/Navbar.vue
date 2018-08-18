<template>
<section class="hero is-info">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img src="../../public/img/icons/android-chrome-192x192.png" alt="Vue Logo" title="Vue logo">
          </router-link>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <router-link :to="navitem.path" v-for="(navitem, key) in navitems" :key="key"
              class="navbar-item">
                {{ navitem.name }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</section>

</template>

<script>
export default {
  props: ["navitems"]
};
</script>

<style>

</style>

