<template>
  <v-app>
    <TheHeader></TheHeader>
    <v-main class="main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>

<style scoped>
html {
  color: #273849;
}
.main {
  background-image: url("~assets/img/sofia.png");
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
  background-attachment: fixed;
  color: #273849;
}
</style>
