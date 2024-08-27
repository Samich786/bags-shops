<template>
  <div>
    <div class="grid lg:grid-cols-3 gap-3 md:grid-cols-2 px-8 py-5">
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
            <div class="flex flex-col gap-2 justify-center items-center mt-20">
              <div class="text-[30px] text-white font-bold">
                <span>Kids Fashion</span>
              </div>
              <div class="text-[15px] text-white font-medium text-center mt-3">
                <span
                  >Kids Fashion is a brand that offers a wide range of <br />
                  clothing and accessories for children</span
                >
              </div>
              <button
                class="btn btn-outline text-white border-2 mt-5 border-white hover:bg-white hover:text-black hover:border-white w-40"
              >
                Shop Now
              </button>
              <div class="flex gap-2 justify-center items-center mt-20">
                <a
                  v-for="(item, index) in items"
                  :key="'nav-' + index"
                  :href="'#item' + (index + 1)"
                  class="btn btn-xs border border-white bg-transparent hover:bg-white hover:border-white"
                  :class="[
                    {
                      'bg-[#fff]': activeIndex === index,
                    },
                    { 'w-7': activeIndex === index },
                  ]"
                  @click.prevent="setActive(index)"
                >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="flex flex-col gap-4 justify-center items-center">
          <div
            class="relative h-[216px] w-full"
            style="
              background-image: url('/image/cart-1.jpeg');
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="absolute inset-0 bg-black"
              style="background-color: rgba(0, 0, 0, 0.6)"
            >
              <div class="flex flex-col items-center justify-center mt-10">
                <span class="text-white text-lg font-medium">Save20% </span>
                <span class="text-white text-2xl font-bold mt-1"
                  >Special Offer</span
                >
                <button
                  class="btn btn-outline text-[#3D464D] border-2 mt-3 bg-[#FFD333] border-[#FFD333] hover:bg-yellow-400 hover:text-[#] rounded-[2px] hover:border-none"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div
            class="relative h-[216px] w-full"
            style="
              background-image: url('/image/cart-1.jpeg');
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="absolute inset-0 bg-black"
              style="background-color: rgba(0, 0, 0, 0.6)"
            >
              <div class="flex flex-col items-center justify-center mt-10">
                <span class="text-white text-lg font-medium">Save 20% </span>
                <span class="text-white text-2xl font-bold mt-1"
                  >Special Offer</span
                >
                <button
                  class="btn btn-outline text-[#3D464D] border-2 mt-3 bg-[#FFD333] border-[#FFD333] hover:bg-yellow-400 hover:text-[#3D464D] rounded-[2px] hover:border-none"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- cards section -->
    <div class="grid lg:grid-cols-4 gap-5 md:grid-cols-2 px-8 py-5">
      <div
        class="col-span-1n px-7 py-2 bg-white"
        v-for="item in carditem"
        :key="item.id"
      >
        <div class="flex gap-4 py-5 items-center justify-center">
          <img :src="item.img" alt="" class="h-10 w-10" />
          <span class="text-xl font-semibold text-[#3D464D]">{{
            item.name
          }}</span>
        </div>
      </div>
    </div>
    <div class="mt-10 px-8"> 
      <span class="text-[30px] font-bold text-[#3D464D]">Categories</span>
    </div>
    <div class="grid lg:grid-cols-4 gap-5 md:grid-cols-2 px-8 py-5">
      <div
        class="col-span-1n bg-white"
        v-for="item in categories"
        :key="item.id"
      >
        <div class="grid grid-cols-2 py-2 px-2 items-center">
          <div class="">
            <img :src="item.img" alt="" class="h-28 w-28" />
          </div>

          <div class=" z-20 flex flex-col items-start">
            <span class="text-lg font-semibold text-[#3D464D]">{{
              item.name
            }}</span>
            <span class="text-sm font-normal text-[#3D464D]">{{
              item.count
            }} Products</span>
          </div>
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
      carditem: [
        {
          id: 1,
          img: "/icon/icon-tick.svg",
          name: "Quality Products",
        },
        {
          id: 2,
          img: "/icon/icon-shipping.png",
          name: "Free Shipping",
        },
        {
          id: 3,
          img: "/icon/icon-exchange.png",
          name: "14-Days Return",
        },
        {
          id: 4,
          img: "/icon/icon-call.png",
          name: "24/7 Support",
        },
      ],
      categories: [
        {
          id: 1,
          name: "Electronics",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 2,
          name: "Clothing",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 3,
          name: "Footwear",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 4,
          name: "Shoes",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 5,
          name: "Sports & Outdoors",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 6,
          name: "Watches",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 7,
          name: "Beauty Products",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 8,
          name: "Computers & Tablets",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 9,
          name: "Kids & Baby Products",
          img: "/image/cam.jpg",
          count: 100,
        },
        {
          id: 10,
          name: "Home Decor",
          img: "/image/cam.jpg",
          count: 100,
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
