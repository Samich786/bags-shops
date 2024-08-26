export default {
  async loginRequest({ commit }, payload) {
    console.log(payload);

    try {
      const response = await this.$auth.loginWith("local", {
        data: payload,
      });

      return response;
    } catch (error) {
      return error;
    }
  },
  async registerRequest({ commit }, payload) {
    console.log(payload);
    try {
      const response = await this.$axios.post(this.$API.REGISTER, payload);
      return response;
    } catch (error) {
      return error;
    }
  },
};
