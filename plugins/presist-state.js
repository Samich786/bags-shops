import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    paths: [
      "modules.products.categories",
      // Add more paths here for other states you want to persist
    ],
  })(store);
};
