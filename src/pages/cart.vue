<template>
  <main>
    <div class="box">
      <div v-if="error">
        <store-dialog
          title="something went wrong"
          :show="!!error"
          v-on:close="handleError"
        >
          <p>{{ error }}</p>
        </store-dialog>
      </div>
      <div class="spinner" v-if="loading === true">
        <store-spinner></store-spinner>
      </div>

      <div class="no-items" v-if="!total">
        <h2>You dont have any items in your cart</h2>
        <h2><router-link to="/home">Shop Here</router-link></h2>
      </div>
      <div v-if="!loading">
        <div>
          <cart-list
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :id="product.id"
            :price="product.price"
            :quantity="product.quantity"
            :desc="product.desc"
            :imgUrl="product.imgUrl"
          ></cart-list>
        </div>
        <div class="checkoutContainer" v-if="total">
          <div class="checkout" v-on:click="checkOut">
            checkout : total( $ {{ total }} )
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CartList from "../components/cart/cartItemList.vue";
export default {
  created() {
    this.reintializeCart();
    this.reinitializeCartTotal();
  },
  components: { CartList },
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  computed: {
    products() {
      return this.$store.getters["cart/cart"];
    },
    total() {
      return this.$store.getters["cart/cartTotal"];
    },
  },
  methods: {
    reintializeCart() {
      this.$store.dispatch("cart/reintializeCart");
    },
    reinitializeCartTotal() {
      this.$store.dispatch("cart/setCartTotal");
    },
    async checkOut() {
      this.loading = true;
      let dataId = [];
      let dataQuantity = [];

      const items = JSON.parse(localStorage.getItem("cart"));
      items.map((item) => {
        dataId.push(item.id);
        dataQuantity.push(item.quantity);
      });

      const data = {
        productsId: dataId,
        productQuantity: dataQuantity,
      };

      try {
        await this.$store.dispatch("cart/checkOut", data);
        const link = this.$store.getters["cart/link"];
        window.location = `${link}`;
        this.loading = false;
      } catch (error) {
        this.error = error.message;
      }
    },
    handleError() {
      this.error = null;
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        this.$router.push("login");
      }
    },
  },
};
</script>

<style scoped>
.box {
  margin-bottom: 27vh;
}
.spinner {
  background-color: transparent;
  padding: 0 auto;
  width: 100%;
  height: 80vh;
}
.checkout {
  color: white;
  width: 40%;
  background-color: purple;
  padding: 8px;
  border-radius: 17px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
}
.checkoutContainer {
  position: fixed;
  width: 100%;
  bottom: 14.4vh;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid rgb(221, 182, 221);
  border-top: 1px solid rgb(221, 182, 221);
}
.no-items {
  background-color: white;
  text-align: center;
  padding: 40px;
  width: 80%;
  border-radius: 12px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
}

a {
  text-decoration: none;
}
a:hover {
  font-size: 30px;
}

@media (max-width: 500px) {
  .checkout {
    width: 100%;
  }
  .checkoutContainer {
    bottom: 10vh;
  }
}
</style>
