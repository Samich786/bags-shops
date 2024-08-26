<template>
  <div>
    <LoginVue />
  </div>
</template>

<script>
import LoginVue from "~/components/auth/Login.vue";

export default {
  name: "index",
  components: {
    LoginVue,
  },
  layout: "auth",
  auth: "guest",
};
</script>

<style></style>
