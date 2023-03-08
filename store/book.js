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
    const url = "/api/book-list"; // 接続先URL
    const response = await this.$axios.$get(url); // GET
    commit("sBooks", response);
  },
};
