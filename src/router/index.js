import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Category from "../pages/categories.vue";
import Cart from "../pages/cart.vue";
import Account from "../pages/account.vue";
import NotFound from "../pages/notFound.vue";
import Product from "../pages/product.vue";
import Login from "../pages/login.vue";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/product/:id",
    component: Product,
    props: true,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/account",
    component: Account,
  },

  {
    path: "/:notfound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
