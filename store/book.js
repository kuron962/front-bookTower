export const state = () => ({
  books: [],
  thisBook: {},
});

export const getters = {
  gBooks(state) {
    return state.books;
  },
  gThisBook(state) {
    return state.thisBook;
  },
};

export const mutations = {
  sBooks(state, payload) {
    state.books = payload;
  },
  sThisBook(state, payload) {
    state.thisBook = payload;
  },
};

export const actions = {
  async load({ commit }) {
    const url = "/api/books";
    const response = await this.$axios.$get(url);
    commit("sBooks", response);
  },

  async getBookById({ commit }, id) {
    const url = `/api/books/${id}`;
    const response = await this.$axios.$get(url);
    commit("sThisBook", response);
  },

  async addBook({}, data) {
    const url = "/api/book/add";
    const response = await this.$axios.$post(url, data);
  },

  async editBook({}, { id, data }) {
    const url = `/api/book/edit/${id}`;
    console.log("★", id, data);
    const response = await this.$axios.$post(url, data);
  },

  async deleteBook({}, id) {
    const url = `/api/book/delete/${id}`;
    const response = await this.$axios.$delete(url);
  },
};
