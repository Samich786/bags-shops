export default {
    setCategories(state, payload) {
        console.log(payload);
        state.categories = payload;
    },
    setAllProducts(state, payload) {
        console.log(payload);
        state.allProducts = payload;
    },
    setProductById(state, payload) {
        console.log(payload);
        state.productById = payload;
    },

    }