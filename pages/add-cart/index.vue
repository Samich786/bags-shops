<template>
  <div>
    <div class="grid lg:grid-cols-3 gap-3 md:grid-cols-1 px-20 py-5">
      <div class="col-span-1 bg-white">
        <div
          class="overflow-hidden h-full w-full flex justify-center items-center px-3 py-3"
        >
          <img
            :src="getProductByIdData?.picture"
            class="transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:rotate-2 max-w-full maxh-full"
            alt="Shoes"
          />
        </div>
      </div>
      <div class="col-span-2 bg-white px-5 py-5">
        <div>
          <span class="text-2xl font-bold text-[#3D464D]">{{
            getProductByIdData?.name
          }}</span>
        </div>
        <div class="flex gap-3 items-center">
          <rating :rating="getProductByIdData?.rating" />
          <span class="text-sm font-normal text-black">(99) Reviews</span>
        </div>
        <div class="flex gap-3 items-center py-3">
          <span
            v-if="getProductByIdData?.discountPrice > 0"
            class="text-2xl font-bold text-[#3D464D]"
            >${{ getProductByIdData?.discountPrice }}.00</span
          >
          <span v-else class="text-2xl font-bold text-[#3D464D]"
            >${{ getProductByIdData?.price }}.00</span
          >
          <span
            v-if="getProductByIdData?.discountPrice > 0"
            class="text-[18px] text-[#6C757D] font-normal line-through"
            >${{ getProductByIdData?.price }}.00</span
          >
        </div>
        <div class="text-[#6C757D] font-medium">
          <span>{{ truncatedDescription }}</span>
        </div>
        <div class="flex gap-3 items-center">
          <div class="rounded-[1px] flex items-center pb-5 mt-5">
            <div
              class="bg-primary px-2.5 py-2 border border-Secondary"
              @click="decreement"
            >
              <img src="/icon/icons8-minus-32.png" alt="" class="h-5 w-5" />
            </div>
            <div class="bg-[#F5F5F5] px-5 py-1.5 border border-Secondary">
              <span>{{ productQuantity }}</span>
            </div>
            <div
              class="bg-primary px-2.5 py-2 border border-Secondary"
              @click="increment"
            >
              <img src="/icon/icons8-plus-30.png" alt="" class="h-5 w-5" />
            </div>
          </div>
          <div
            class="bg-primary px-2.5 py-2 border border-Secondary"
            @click="addToCart"
          >
            <div class="flex items-center gap-2">
              <img src="/icon/add-to-cart-blk.png" alt="" class="h-5 w-5" />
              <span class="text-[#3D464D] text-sm font-semibold"
                >Add to Cart</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import rating from "../../components/global/rating.vue";
export default {
  components: {
    rating,
  },
  data() {
    return {
      productQuantity: 1,
    };
  },
  async mounted() {
    try {
      console.log(this.$route.query.id, "id");
      const response = await this.getProductById(this.$route.query.id);
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    ...mapGetters("modules/products", ["getProductByIdData"]),
    truncatedDescription() {
      // Split the description into words and slice the first 20 words
      const words = this.getProductByIdData?.description?.split(" ");
      return words?.slice(0, 30).join(" ") + (words?.length > 30 ? "..." : "");
    },
  },
  methods: {
    ...mapActions("modules/products", ["getProductById", "addToCartData"]),
    increment() {
      this.productQuantity++;
    },
    decreement() {
      if (this.productQuantity !== 1) {
        this.productQuantity--;
      }
    },
    async addToCart() {
      try {
        const data = {
          productId: this.getProductByIdData._id,
          quantity: this.productQuantity,
        };
        const response = await this.addToCartData(data);
        if (response.status === 200) {
          console.log(response.data.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
