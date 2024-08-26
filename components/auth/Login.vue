<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Email</label
          >
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <!-- <div
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Dont have an account?
            <span class="text-blue-500 hover:text-blue-800">Register</span>
          </div> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("modules/auth", ["loginRequest"]),
    async handleSubmit() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        const response = await this.loginRequest(data);
        console.log(response);
        if (response.status === 200) {
          // this.$router.push('/')
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
