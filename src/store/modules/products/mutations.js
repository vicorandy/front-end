export default {
  getProducts(state, payLoad) {
    state.products = payLoad;
  },
  displayQuerySerch(state, payLoad) {
    state.products = payLoad;
  },
  setSelectedProduct(state, payLoad) {
    state.selectedProduct = payLoad;
  },
};
