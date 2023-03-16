<template>
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

    <v-select v-model="status" :items="done"></v-select>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="clear" class="ma-4">元に戻す</v-btn>
      <v-btn @click="editBook" class="ma-4">変更</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    title: null,
    category: null,
    status: "未読",
    done: ["未読", "読書中", "読了"],
  }),

  computed: {
    ...mapGetters({
      gThisBook: "book/gThisBook",
    }),
  },

  mounted() {
    this.load();
  },

  methods: {
    async load() {
      await this.$store.dispatch("book/getBookById", this.$route.params.id);
      this.clear();
    },
    clear() {
      this.title = this.gThisBook.title;
      this.category = this.gThisBook.category;
      this.status = this.gThisBook.status;
    },
    async editBook(id) {
      await this.$store.dispatch("book/editBook", {
        id: this.gThisBook.id,
        data: {
          title: this.title,
          category: this.category,
          status: this.status,
        },
      });
      this.$router.push(`/`);
    },
  },
};
</script>
