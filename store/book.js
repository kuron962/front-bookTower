export const state = () => ({
  books: [],
  thisBook: { title: "こんにちは", category: "教養", status: "未読" },
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
  async load({ commit, dispatch }) {
    const url = "/api/books";
    const response = await this.$axios.$get(url);
    commit("sBooks", response);
  },

  async getBook({ commit, dispatch }, id) {
    const url = `/api/books/id${id}`;
    const response = await this.$axios.$get(url);
    commit("sThisBook", response);
  },

  async add({ commit, dispatch }, data) {
    const url = "/api/book/add";
    const response = await this.$axios.$post(url, data);
  },

  async delete({ commit, dispatch }, id) {
    const url = `/api/book/delete/${id}`;
    const response = await this.$axios.$delete(url);
  },
};
