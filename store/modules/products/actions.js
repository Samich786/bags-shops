export default {
  async fetchCategories({ commit }, payload) {
    console.log(payload);
    try {
      const response = await this.$axios.get(this.$API.CATEGORIES);
      commit("setCategories", response.data.data.categories);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchNewArrivalsData({ commit }, payload) {
    console.log(payload);
    try {
      const response = await this.$axios.get(this.$API.NEWARRIVALS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async createProduct({ commit }, payload) {
    try {
      const response = await this.$axios.post(this.$API.CREATEPRODUCTS, payload);
      return response;
    } catch (error) {
      return error;
    }
  },
};
