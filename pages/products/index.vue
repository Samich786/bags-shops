<template>
  <div>
    <div class="flex justify-between items-center px-8 mt-3">
      <span class="text-2xl font-semibold text-[#3D464D]">Products {{ filter.page }}</span>
      <AddorEditProductModal />
      <!-- Show the products -->
    </div>

    <div class="flex justify-end gap-3 items-center px-8 mt-3" :class="{'dropdown-open': isSortDropdown}">
      <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="bg-white text-black text-sm py-1 px-3 font-semibold"  @click="toggleSortingDropdown">Sorting</div>
        <ul
         v-if="isSortDropdown"
          tabindex="0"
          class="dropdown-content menu bg-white rounded-none z-[1] w-52 p-2 shadow mt-1 " @click="handleSort"
        >
          <li><a>All</a></li>
          <li><a>Popularity</a></li>
          <li><a>New Arrival</a></li>
          <li><a>Discount Offer</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-bottom dropdown-end " :class="{'dropdown-open': isLimitDropdown}">
        <div tabindex="0" role="button" class="bg-white text-black text-sm py-1 px-3 font-semibold" @click="toggleLimitDropdown">Showing</div>
        <ul
          v-if="isLimitDropdown"
          tabindex="0"
          class="dropdown-content menu bg-white rounded-none z-[1] w-52 p-2 shadow mt-1 " @click="handleLimit"
        >
          <li><a>20</a></li>
          <li><a>30</a></li>
          <li><a>40</a></li>
        </ul>
      </div>
    </div>
    <div
      class="grid lg:grid-cols-4 gap-8 md:grid-cols-2 xs:grid-cols-1 px-8 py-2 mt-3"
    >
      <div class="col-span-1 group" v-for="item in allProducts" :key="item.id">
        <div class="card card-compact bg-white rounded-[1px] w-full h-[400px]" @click="getSingleProduct(item)">
          <!-- Custom height -->
          <div
            class="overflow-hidden h-full w-full flex justify-center items-center"
          >
            <img
              :src="item?.picture"
              class="transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:rotate-2 max-w-full maxh-full object-contain"
              alt="Shoes"
            />
          </div>
          <div
            class="py-5 pb-10 z-20 items-center text-center border shadow-lg"
            style="border-color: rgba(190, 197, 203, 0.2)"
          >
            <span class="text-xl font-semibold text-[#3D464D]">{{
              item?.name
            }}</span>
            <div class="flex gap-3 items-center justify-center">
              <span
                v-if="item?.discountPrice > 0"
                class="text-lg font-bold text-[#3D464D]"
                >${{ item?.discountPrice }}</span
              >
              <span v-else class="text-lg font-bold text-[#3D464D]"
                >${{ item?.price }}</span
              >
              <span
                v-if="item?.discountPrice > 0"
                class="text-[15px] text-[#6C757D] font-normal line-through"
                >${{ item?.price }}</span
              >
            </div>
            <div class="flex gap-2 items-center justify-center">
              <Rating :rating="item?.rating" />
              <span class="text-sm font-normal">(99)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="rounded-[1px] flex justify-center pb-5 mt-3">
  <button class=" bg-white text-primary px-2.5 py-1.5 border border-Secondary " @click="prevPage" :class="{}">Previous</button>
  <button class=" bg-white text-white px-2.5 py-1.5 border border-Secondary"  @click="pageOne " :class="[{'bg-primary':filter.page===1},{'text-white':filter.page===1}]">1</button>
  <button class=" bg-white text-primary px-2.5 py-1.5 border border-Secondary" @click="pageTwo " :class="{'bg-primary':filter.page===2}">2</button>
  <button class=" bg-white text-primary px-2.5 py-1.5 border border-Secondary" @click="pageThree" :class="{'bg-primary':filter.page===3}">3</button> 
  <button class=" bg-white text-primary px-2.5 py-1.5 border border-Secondary" @click="nextPage" :class="{'bg-primary':filter.page===allProducts?.totalPages}">Next</button>
</div>
  </div>
  </div>
</template>

<script>
import AddorEditProductModal from "../../components/global/Modal/AddorEditProductModal.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    AddorEditProductModal,
  },
  data() {
    return {
      
      isSortDropdown:false,
      isLimitDropdown:false,
      filter: {
        page: 1,
        limit: 20,
        isPopular: false,
        isNewArrival: false,
        discount: false,
        categoriesType: "",
      },

    };
  },
  computed: {
    ...mapGetters("modules/products", ["getAllProducts"]),
    allProducts() {
      if (this.getAllProducts?.products?.length === 0) {
        return [];
      }
      return this.getAllProducts?.products;
    },
  },
  async mounted() {
   if(this.$route.query.categoriesType){
    this.filter.categoriesType = this.$route.query.categoriesType;
    await this.fetchAllProducts(this.filter);
   }else{

     await this.fetchAllProducts();
   }
    
  },
  methods: {
    ...mapActions("modules/products", ["fetchAllProductsData"]),
    async fetchAllProducts() {
      try {
        const data={
          filter:this.filter
        }
        const response = await this.fetchAllProductsData(data);
        if (response.status === 200) {
          console.log(response.data.data.data);
         
        }
      } catch (error) {
        console.log(error);
      }
    },
    toggleSortingDropdown() {   
      this.isLimitDropdown=false;
      this.isSortDropdown = !this.isSortDropdown;
    },
    toggleLimitDropdown() {
      this.isSortDropdown=false;
      this.isLimitDropdown = !this.isLimitDropdown;
    },
    handleLimit(val) {
      this.limit = val.target.innerText;
      this.isLimitDropdown= false
      this.fetchAllProducts();
      // this.$router.push({ name: "Products" });
    },
    handleSort(val) {
      if (val.target.innerText === "Popularity") {
        this.filter.isPopular = true;
      } else if (val.target.innerText === "New Arrival") {
        this.filter.isNewArrival = true;
      } else if (val.target.innerText === "Discount Offer") {
        this.filter.discount = true;
      }else{
        this.filter.isPopular = false;
        this.filter.isNewArrival = false;
        this.filter.discount = false;
      };
      this.isSortDropdown=false
      this.fetchAllProducts();
      // this.$router.push({ name: "Products" });
    },
    pageOne() {
      if(this.filter.page !== 1){
      this.filter.page = 1;
      this.fetchAllProducts();
      }
  },
  pageTwo() {
    if(this.filter.page !== 2 && this.getAllProducts?.totalPages > 1){
    this.filter.page = 2;
    this.fetchAllProducts();
    }
  },
  pageThree() {
    if(this.filter.page !== 3 && this.getAllProducts?.totalPages > 2){
    this.filter.page = 3;
    this.fetchAllProducts();
    }
  },
  nextPage() {
    if(this.filter.page !== this.getAllProducts?.totalPages){
    this.filter.page += 1;
    this.fetchAllProducts();
    }
  },
  prevPage() {
    if(this.filter.page !== 1){
    this.filter.page -= 1;
    this.fetchAllProducts();
    }
  },
  async getSingleProduct(item) {
    try {
     this.$router.push(`/add-cart?id=${item._id}`);
    } catch (error) {
      console.log(error);
    }
  },

},
watch:{
  getAllProducts:{
    handler(val){
      this.filter.page = val.currentPage; 
      console.log(this.filter.page);
      
    },
    deep:true
  }
}
};
</script>

<style>
</style>
