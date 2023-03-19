<template>
  <v-container>
    <Background :pt="gBookPoint !== 0 ? gBookPoint : 1" />
    <v-list color="transparent">
      <v-row>
        <v-list-item v-for="book in gBooks" :key="book.id">
          <v-col cols="12" lg="6">
            <v-dialog v-model="dialog" max-width="70%" :retain-focus="false">
              <book-dialog @delete-book="deleteBook" />
            </v-dialog>
            <v-card
              color="transparent"
              class="pa-3"
              width="100%"
              @click="openDialog(book.id)"
            >
              <v-chip
                outlined
                v-if="book.status === '未読'"
                color="red"
                label
                >{{ book.status }}</v-chip
              >
              <v-chip
                outlined
                v-if="book.status === '読書中'"
                color="orange"
                label
                >{{ book.status }}</v-chip
              >
              <v-chip
                outlined
                v-if="book.status === '読了'"
                color="green"
                label
                >{{ book.status }}</v-chip
              >
              <v-card-title class="white--text">{{ book.title }}</v-card-title>
              <v-card-subtitle class="white--text">{{
                book.category
              }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-list-item>
      </v-row>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BookDialog from "~/components/BookDialog.vue";
import Background from "~/components/Background";

export default {
  components: { BookDialog, Background },
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters({
      gBooks: "book/gBooks",
      gThisBook: "book/gThisBook",
      gBookPoint: "book/gBookPoint",
    }),
  },

  mounted() {
    this.load();
  },

  methods: {
    async load() {
      await this.$store.dispatch("book/load");
    },
    async openDialog(id) {
      this.dialog = true;
      await this.$store.dispatch("book/getBookById", id);
    },
    closeDialog() {
      this.dialog = false;
    },
    async deleteBook(id) {
      await this.$store.dispatch("book/deleteBook", id);
      this.dialog = false;
      await this.$store.dispatch("book/load");
    },
  },
};
</script>
