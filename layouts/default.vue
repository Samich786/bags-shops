<template>
  <div>
    <div class="h-full">
      <TopHeader />
      <div class="bg-[#F5F5F5] h-calc(100vh - 64px) overflow-y-auto">
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
