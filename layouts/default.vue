<template>
  <v-app class="app">
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
  background: linear-gradient(-135deg, #ababab, #1a004a);
}
</style>
