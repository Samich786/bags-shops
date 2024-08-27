<template>
  <div>
    <div class="grid lg:grid-cols-3 gap-4 md:grid-cols-2 px-5 py-5">
      <div class="col-span-2 rounded-lg">
        <div class="carousel w-full relative">
          <!-- Carousel Items -->
          <div
            v-for="(item, index) in items"
            :key="index"
            :id="'item' + (index + 1)"
            class="carousel-item w-full"
            :class="{
              block: activeIndex === index,
              hidden: activeIndex !== index,
            }"
          >
            <img :src="item.src" class="w-full h-[450px]" />
          </div>

          <!-- Button Controls -->
          <div
            class="absolute z-40 inset-0 flex w-full justify-center gap-2 py-2"
            style="background-color: rgba(0, 0, 0, 0.6)"
          >
            <div class="flex flex-col gap-2 justify-center items-center">
              <div class="text-[30px] text-white font-bold">
                <span>Kids Fashion</span>
              </div>
              <div class="text-lg text-white font-medium text-center">
                <span
                  >Kids Fashion is a brand that offers a wide range of <br />
                  clothing and accessories for children.</span
                >
              </div>
              <button class="btn btn-outline text-white border-2 border-white">
                Default
              </button>
              <div class="flex gap-2 justify-center items-center">
                <a
                  v-for="(item, index) in items"
                  :key="'nav-' + index"
                  :href="'#item' + (index + 1)"
                  class="btn btn-xs text-red-500"
                  @click.prevent="setActive(index)"
                >
                  {{ index + 1 }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 border border-red-500">
        <div class="flex flex-col gap-4 justify-center items-center px-10 py-5">
          <div
            class="relative h-[200px] w-full rounded-lg"
            style="
              background-image: url('/image/cart-1.jpeg');
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="absolute inset-0 bg-black opacity-40 rounded-lg h-[200px]"
            >
              <span class="text-red-500">Shop Now</span>
            </div>
          </div>
          <div
            style="background-image: url('/image/cart-2.jpeg')"
            class="h-full w-full bg-center bg-cover bg-no-repeat rounded-lg h-[200px]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      activeIndex: 0, // Tracks the current active carousel item
      items: [
        {
          src: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
          title: "Kids Fashion",
          description:
            "Kids Fashion is a brand that offers a wide range of clothing and accessories for children. Our products are designed to meet the needs of kids of all ages and are available in a variety of styles and colors.",
        },
        {
          src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
          title: "Mens Fashion",
          description:
            "Kids Fashion is a brand that offers a wide range of clothing and accessories for children. Our products are designed to meet the needs of kids of all ages and are available in a variety of styles and colors.",
        },
        {
          src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
          title: "Women Fashion",
          description:
            "Kids Fashion is a brand that offers a wide range of clothing and accessories for children. Our products are designed to meet the needs of kids of all ages and are available in a variety of styles and colors.",
        },
        {
          src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
          title: "Kids Fashion",
          description:
            "Kids Fashion is a brand that offers a wide range of clothing and accessories for children. Our products are designed to meet the needs of kids of all ages and are available in a variety of styles and colors.",
        },
      ],
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index; // Set the active item based on the clicked index
    },
  },
};
</script>

<style scoped>
.carousel-item {
  transition: opacity 0.5s ease-in-out; /* Add a smooth transition for opacity */
}
/* Add any scoped styles here */
</style>
