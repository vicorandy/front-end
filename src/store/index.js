import { createStore } from "vuex";
import productsModule from "./modules/products";
import cartModule from "./modules/cart";
import cartegoryModule from "./modules/categories/index";
import userModule from "./modules/users/index";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products: productsModule,
    cart: cartModule,
    category: cartegoryModule,
    user: userModule,
  },
});
