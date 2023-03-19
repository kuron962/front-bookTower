<template>
  <v-card>
    <v-card-title> {{ gThisBook.title }} </v-card-title>
    <v-card-text> {{ gThisBook.category }} </v-card-text>
    <v-card-text> {{ gThisBook.status }} </v-card-text>
    <v-card-actions>
      <v-btn class="ma-3" @click="toEdit(gThisBook.id)"> 編集 </v-btn>
      <v-btn @click="deleteBook(gThisBook.id)"> 削除 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      gThisBook: "book/gThisBook",
    }),
  },

  methods: {
    deleteBook(id) {
      this.$emit("delete-book", id);
    },
    toEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
  },
};
</script>
