const url = {
  LOGINAdmin: "/auth/login",
  REGISTER: "/users/register",
  CATEGORIES:"products/categortcount"
};

export default ({ app }, inject) => {
  inject("API", url);
};
