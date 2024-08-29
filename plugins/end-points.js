const url = {
  LOGINAdmin: "/auth/login",
  REGISTER: "/users/register",
  CATEGORIES: "products/categortcount",
  NEWARRIVALS: "products/newarrialproducts",
  CREATEPRODUCTS: "products/create",
};

export default ({ app }, inject) => {
  inject("API", url);
};
