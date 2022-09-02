import actions from "./actions";
import getters from "./gettters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      products: null,
    };
  },
  actions,
  getters,
  mutations,
};
