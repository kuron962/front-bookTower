<template>
  <div>
    <v-container>
      <v-list>
        <v-row>
          <v-list-item v-for="book in gBooks" :key="book.id">
            <v-col cols="12" lg="6">
              <v-card width="100%">
                <v-card-title>{{ book.title }}</v-card-title>
                <v-card-subtitle>{{ book.category }}</v-card-subtitle>
                <v-card-text>{{ book.status }}</v-card-text>
              </v-card>
            </v-col>
          </v-list-item>
        </v-row>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ gBooks: "book/gBooks" }),
  },

  mounted() {
    this.getBook();
  },

  methods: {
    async getBook() {
      return await this.$store.dispatch("book/load");
    },
  },
};
</script>
