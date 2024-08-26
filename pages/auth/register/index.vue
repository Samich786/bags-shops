<template>
  <div>
    <register />
  </div>
</template>

<script>
import Register from "~/components/auth/Register.vue";

export default {
  components: {
    Register,
  },
  layout: "auth",
  auth: "guest",
};
</script>

<style></style>
