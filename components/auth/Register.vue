<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Full Name</label
          >
          <input
            v-model="fullName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>
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
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Contact Number</label
          >
          <input
            v-model="contact"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            id="contact"
            type="number"
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div class="mb-6">
          <input type="file" @change="onFileChange" accept="image/*" />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/auth/login"
          >
            Already have an account?
            <a class="text-blue-500 hover:text-blue-800" href="/auth/login"
              >Login</a
            >
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      fullName: "",
      contact: "",
      pictuture: "",
      base64Image: null,
    };
  },
  methods: {
    ...mapActions("modules/auth", ["registerRequest"]),
    async handleSubmit() {
      console.log(
        this.email,
        this.password,
        this.fullName,
        this.contact,
        this.base64Image
      );

      try {
        const formData = new FormData();
        formData.append("email", this.email);
        formData.append("password", this.password);
        formData.append("fullName", this.fullName);
        formData.append("contact", this.contact);
        formData.append("picture", this.base64Image);

        const response = await this.registerRequest(formData);
        console.log(response);
        if (response.status === 200) {
          this.$router.push("/auth/login");
        }
      } catch (error) {
        console.log(error);
      }
    },
    onFileChange(event) {
      const file = event.target.files[0]; // Get the first selected file
      if (file) {
        // Check the file type before assigning
        const validTypes = ["image/png", "image/jpeg"];
        if (!validTypes.includes(file.type)) {
          alert("Please select a valid image (PNG or JPEG).");
          return;
        }
        this.base64Image = file; // Assign the file to the selectedFile variable
      }
    },
    // async uploadImage() {
    //   if (!this.base64Image) {
    //     alert("Please select an image first.");
    //     return;
    //   }
    //   try {
    //     // Make a POST request to upload the base64 image
    //     const response = await this.$axios.post("/your-upload-endpoint", {
    //       image: this.base64Image, // Send the base64 string in the payload
    //     });
    //     alert("Image uploaded successfully!");
    //   } catch (error) {
    //     console.error("Error uploading image:", error);
    //     alert("Failed to upload image.");
    //   }
    // },
  },
};
</script>
