<template>
  <div>
    <div class="h-screen w-full bg-[#F5F5F5]">
      <TopHeader />
      <div class="bg-[#F5F5F5] scroll-container mt-16">
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

<style>
.scroll-container {
  max-height: 100vh !important; /* Set the max height to make sure scrolling is needed */
  overflow-y: auto !important; /* Allow vertical scrolling */
  scrollbar-width: none !important; /* Firefox */
}

.scroll-container::-webkit-scrollbar {
  display: none !important; /* Chrome, Safari, and Edge */
}
</style>
