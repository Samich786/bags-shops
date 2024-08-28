export default {
  async fetchCategories({ commit }, payload) {
    console.log(payload);
    try {
      const response = await this.$axios.get(this.$API.CATEGORIES);
      return response;
    } catch (error) {
      return error;
    }
  },
};
