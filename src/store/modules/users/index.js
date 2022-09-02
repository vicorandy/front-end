import actions from "./actions";
import getters from "../products/getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {};
  },
  getters,
  actions,
  mutations,
};
