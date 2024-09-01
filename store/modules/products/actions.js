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
  async fetchPopularData({ commit }, payload) {
    console.log(payload);
    try {
      const response = await this.$axios.get(this.$API.POPULARPRODUCTS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchPopularData({ commit }, payload) {
    console.log(payload);
    try {
      const response = await this.$axios.get(this.$API.POPULARPRODUCTS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchAllProductsData({ commit }, payload) {
    try {
      const response = await this.$axios.get(this.$API.ALLPRODUCTS+`?page=${payload.filter.page}&limit=${payload.filter.limit}&isPopular=${payload.filter.isPopular}&isNewArrival=${payload.filter.isNewArrival}&discount=${payload.filter.discount}&category=${payload.filter.categoriesType}`);
      commit("setAllProducts", response.data.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },
  async getProductById({ commit }, payload) {
    try {
      const response = await this.$axios.get(this.$API.PRODUCTBYID+`/${payload}`);
      commit("setProductById", response.data.data.data.product);
      return response;
    } catch (error) {
      return error;
    }
  },
  async addToCartData({ commit }, payload) {
    try {
      const response = await this.$axios.post(this.$API.ADDTOCART, payload);
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
