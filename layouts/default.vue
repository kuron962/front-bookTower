<template>
  <v-app class="app">
    <v-app-bar app>
      <v-toolbar-title>BookTower</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-3" to="/"> 一覧 </v-btn>
      <v-btn class="ma-3" to="/add"> 追加 </v-btn>
    </v-app-bar>
    <v-main>
      <Background :colors="colors" />
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
import Background from "~/components/Background";

const colors = {
  green: "#ADC965",
  blue: "#89D5C9",
  yellow: "#FAC172",
  orange: "#FF8357",
  red: "#E25B45",
};

function randomColor() {
  const arr = Object.values(colors);
  return arr[Math.floor(Math.random() * Math.floor(arr.length))];
}
export default {
  components: {
    Background,
  },
  data() {
    return {
      style: {
        "--accent-color": randomColor(),
      },
      colors: Object.values(colors),
    };
  },
};
</script>
