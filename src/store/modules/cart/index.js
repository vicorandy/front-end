import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      cart: null,
      cartLength: null,
      cartTotal: null,
      link:null
    };
  },
  actions,
  getters,
  mutations,
};
