<template>
  <v-card>
    <v-card-title>本の削除</v-card-title>
    <v-card-text> {{ gThisBook.title }} </v-card-text>
    <v-card-text> {{ gThisBook.category }} </v-card-text>
    <v-card-text> {{ gThisBook.status }} </v-card-text>
    <v-card-actions>
      <v-btn @click="submit(gThisBook.id)"> 削除 </v-btn>
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
    submit(id) {
      this.$emit("click-submit", id);
    },
  },
};
</script>
