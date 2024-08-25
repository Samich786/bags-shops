<template>
  <div>
    <!-- Ensure that the structure of the HTML is consistent -->
    <div>
      Welcome to the index page

      <!-- Logout button with click event -->
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: ['auth'],
  data(){
    return {

    }
  },
  methods: {
    async logout() {
      try {
        // Handle logout with proper state management
        await this.$auth.logout(); // Ensure this method correctly clears authentication state

        // Optionally remove the token manually (usually handled by $auth.logout())
        localStorage.removeItem('auth._token.local');

        // Redirect to the login page after successful logout
        // this.$router.push('/login');
      } catch (error) {
        // Handle any errors during logout
        console.error('Logout error:', error);
      }
    }
  }
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
