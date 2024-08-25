export default {
  async loginRequest({commit}, payload) {
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
};
