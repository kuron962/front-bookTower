<template>
  <v-container>
    <v-list>
      <v-row>
        <v-list-item v-for="book in gBooks" :key="book.id">
          <v-col cols="12" lg="6">
            <v-dialog v-model="dialog">
              <book-delete-dialog @click-submit="deleteBook" />
            </v-dialog>
            <v-card width="100%" @click="openDialog(book.id)">
              <v-chip v-if="book.status === '未読'" color="red" label>{{
                book.status
              }}</v-chip>
              <v-chip v-if="book.status === '読書中'" color="orange" label>{{
                book.status
              }}</v-chip>
              <v-chip v-if="book.status === '読了'" color="green" label>{{
                book.status
              }}</v-chip>
              <v-card-title>{{ book.title }}</v-card-title>
              <v-card-subtitle>{{ book.category }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-list-item>
      </v-row>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BookDeleteDialog from "~/components/BookDeleteDialog.vue";

export default {
  components: { BookDeleteDialog },
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters({
      gBooks: "book/gBooks",
      gThisBook: "book/gThisBook",
    }),
  },

  mounted() {
    this.getBook();
  },

  methods: {
    async getBook() {
      await this.$store.dispatch("book/load");
    },
    async openDialog(id) {
      this.dialog = true;
      await this.$store.dispatch("book/getBook", id);
    },
    closeDialog() {
      this.dialog = false;
    },
    async deleteBook(id) {
      await this.$store.dispatch("book/delete", id);
      this.dialog = false;
      await this.$store.dispatch("book/load");
    },
  },
};
</script>
