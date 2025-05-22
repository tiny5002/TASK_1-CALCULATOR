<template>
  <div id="app">
    <nav>
      <router-link to="/">Calculator | </router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  padding: 20px;
  background-color: black;
  margin-bottom: 20px;
}
router-link {
  margin: 0 10px;
  text-decoration: none;
}
</style>
