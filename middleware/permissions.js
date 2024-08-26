// middleware/role.js
export default function ({ store, redirect, route, from }) {
  const allRoutes = {
    index: "/",
  };
  // const authRouteNames = {

  const publicRoutes = ["/auth-logout"];
  const user = store.$auth.user;
  // console.log('from middleware', route.path)

  if (!publicRoutes.includes(route.path)) {
    if (!user) {
      return redirect("/auth/login");
    }
  }
}
