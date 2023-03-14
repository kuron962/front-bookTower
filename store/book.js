export const state = () => ({
  books: [],
});

export const getters = {
  gBooks(state) {
    return state.books;
  },
};

export const mutations = {
  sBooks(state, payload) {
    state.books = payload;
  },
};

export const actions = {
  async load({ commit, dispatch }) {
    const url = "/api/books";
    const response = await this.$axios.$get(url);
    commit("sBooks", response);
  },

  async add({ commit, dispatch }, data) {
    const url = "/api/book/add";
    const response = await this.$axios.$post(url, data);
  },
};
