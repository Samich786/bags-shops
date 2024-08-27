<template>
  <div>
    <div
      class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 bg-[#3D464D] border-b border-white"
    >
      <div class="flex items-center gap-20">
        <div
          class="relative bg-[#FFD333] h-16 flex items-center justify-between px-14"
          @click="isOpenCategory = !isOpenCategory"
        >
          <div class="flex items-center gap-2">
            <img src="/icon/burgr-icon.svg" alt="" class="h-4 w-4" />
            <span class="text-[15px] font-medium text-[#3D464D]"
              >Categories</span
            >
          </div>
          <transition name="fade-slide">
            <div
              v-if="isOpenCategory"
              class="absolute top-[65px] left-0 bg-white z-10 w-full"
            >
              <div
                v-for="data in categories"
                :key="data.id"
                class="border-b cursor-pointer border-[#e9edf2] py-2 px-3 text-[#898c8f] hover:text-[#FFD333]"
                @click="selectCategory(data)"
              >
                <span class="text-[12px] font-medium bg-white">
                  {{ data.name }}
                </span>
              </div>
            </div>
          </transition>
        </div>
        <div
          v-for="item in menueItem"
          :key="item.id"
          class="flex items-center gap-2"
        >
          <div>
            <span
              class="text-[14px] font-bold text-white hover:text-[#FFD333] cursor-pointer"
              :class="{ 'text-yellow-400': item.isActive }"
              @click="setActive(item)"
              >{{ item.name }}</span
            >
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1">
          <img src="/icon/heart.png" alt="" class="h-7 w-7" />
          <span
            class="border border-white rounded-full text-white font-medium text-sm px-1 py-[1px]"
            >0</span
          >
        </div>
        <div class="flex items-center gap-1">
          <img src="/icon/cart-icon.png" alt="" class="h-7 w-7" />
          <span
            class="border border-white rounded-full text-white font-medium px-1 text-sm py-[1px]"
            >0</span
          >
        </div>
        <div
          class="text-white text-sm font-medium cursor-pointer"
          @click="logout"
        >
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenCategory: false,
      categoriesType: "",
      menueItem: [
        {
          id: 1,
          name: "Home",
          router: "/",
          isActive: true,
        },
        {
          id: 2,
          name: "Products",
          router: "/products",
          isActive: false,
        },
        {
          id: 3,
          name: "Shopping Cart",
          router: "/cart",
          isActive: false,
        },
        {
          id: 4,
          name: "Contact",
          router: "/contact",
          isActive: false,
        },
        {
          id: 5,
          name: "Checkout",
          router: "/checkout",
          isActive: false,
        },
      ],
      categories: [
        {
          id: 1,
          name: "Electronics",
        },
        {
          id: 2,
          name: "Clothing",
        },
        {
          id: 3,
          name: "Footwear",
        },
        {
          id: 4,
          name: "Shoes",
        },
        {
          id: 5,
          name: "Sports & Outdoors",
        },
        {
          id: 6,
          name: "Watches",
        },
        {
          id: 7,
          name: "Beauty Products",
        },
        {
          id: 8,
          name: "Computers & Tablets",
        },
        {
          id: 9,
          name: "Kids & Baby Products",
        },
        {
          id: 10,
          name: "Home Decor",
        },
      ],
    };
  },
  mounted() {
    this.menueItem.forEach((item) => {
      item.isActive = false;
    });

    // Check which menu item matches the current route path
    const currentItem = this.menueItem.find(
      (item) => this.$route.path === item.router
    );

    // If a matching route is found, set it to active
    if (currentItem) {
      currentItem.isActive = true;
    }
  },
  methods: {
    setActive(item) {
      console.log(item);
      this.menueItem.forEach((item) => {
        item.isActive = false;
      });
      item.isActive = true;
      this.$router.push(item.router);
    },
    selectCategory(data) {
      this.categoriesType = data.name;
      // this.isOpenCategory = false;
    },
    async logout() {
      try {
        // Handle logout with proper state management
        await this.$auth.logout(); // Ensure this method correctly clears authentication state

        // Optionally remove the token manually (usually handled by $auth.logout())
        localStorage.removeItem("auth._token.local");
      } catch (error) {
        // Handle any errors during logout
        console.error("Logout error:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Enter and Leave Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 1s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Start or end state */
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0); /* End or start state */
}
</style>
