const url = {
  LOGINAdmin: "/auth/login",
  REGISTER: "/users/register",
};

export default ({ app }, inject) => {
  inject("API", url);
};
