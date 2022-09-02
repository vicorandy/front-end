export default {
  addItemToCart(state, payload) {
    state.cart = payload;
  },
  setCartLength(state, payLoad) {
    if (payLoad === 0) {
      state.cartLength = null;
      return;
    }
    state.cartLength = payLoad;
  },
  setCartItems(state, payload) {
    state.cartItems = payload;
  },
  setCartTotal(state, payLoad) {
    state.cartTotal = payLoad;
  },
  setLink(state, payload) {
    state.link = payload;
  },
};
