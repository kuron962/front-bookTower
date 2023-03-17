<template>
  <v-app class="app" id="square">
    <v-app-bar app>
      <v-toolbar-title>BookTower</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-3" to="/"> 一覧 </v-btn>
      <v-btn class="ma-3" to="/add"> 追加 </v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style scoped>
.app {
  background-size: cover;
  background-attachment: fixed;
  background: linear-gradient(-135deg, #e4a972, #9941d8);
}
</style>

<script>
export default {
  mounted() {
    return {
      script: [
        { src: "/js/particles.min.js" },
        { src: "/js/app.js" },
        { src: "/js/square.js" },
      ],
    };
  },
};
</script>
