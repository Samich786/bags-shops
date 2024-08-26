<template>
  <div>
    <div class="h-full">
      <TopHeader />
      <div>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "~/components/layouts/Header.vue";

export default {
  components: {
    TopHeader,
  },
};
</script>

<style></style>
