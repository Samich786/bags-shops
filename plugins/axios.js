// plugins/axios.js
export default function({ $axios, app }) {


  $axios.onRequest(config => {
   

    // Determine where to fetch the token from
    let token;
   
      token = app.$auth.strategy.token.get(); // Get token from local storage
   

    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
  });
}
