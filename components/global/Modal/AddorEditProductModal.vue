<template>
  <div>
    <!-- You can open the modal using ID.showModal() method -->
    <button
      class="btn bg-primary text-secondary hover:bg-secondary hover:text-white"
      onclick="my_modal_3.showModal()"
    >
      Create Product
    </button>
    <dialog id="my_modal_3" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 class="text-lg font-bold">Add New Product</h3>
        <div>
          <input
            type="file"
            class="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            v-modal="product.name"
            placeholder="Product Title"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            v-modal="product.price"
            placeholder="Product Price"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <textarea
            class="textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            v-modal="product.discount"
            placeholder="Discount Available"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <select class="select select-bordered w-full max-w-xs">
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      },
    };
  },
};
</script>

<style></style>
