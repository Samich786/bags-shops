const url = {
  LOGINAdmin: "/auth/login",
};

export default ({ app }, inject) => {
  inject("API", url);
};
