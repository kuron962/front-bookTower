<template>
  <v-container>
    <v-card class="ma-3 pa-3" max-width="540">
      <v-text-field
        v-model="title"
        color="primary"
        label="title"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="category"
        color="primary"
        label="category"
        variant="underlined"
      ></v-text-field>

      <v-select v-model="state" :items="status"></v-select>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="clear" class="ma-4">クリア</v-btn>
        <v-btn @click="addBook" class="ma-4">追加</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: null,
    category: null,
    state: "未読",
    status: ["未読", "読書中", "読了"],
  }),

  methods: {
    async addBook() {
      await this.$store.dispatch("book/add", {
        title: this.title,
        category: this.category,
        status: this.state,
      });
      this.clear();
    },

    clear() {
      this.title = null;
      this.category = null;
      this.state = "未読";
    },
  },
};
</script>
