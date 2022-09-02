<template>
  <main>
    <the-header v-on:search="searchQuery"></the-header>
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

    <div class="container" v-if="products">
      <product-ui
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :img="product.imgUrl"
        :price="product.price"
        :desc="product.desc"
      ></product-ui>
    </div>
  </main>
</template>

<script>
import TheHeader from "../components/header.vue/header-search-bar.vue";
import ProductUi from "../components/home/products.vue";

export default {
  created() {
    this.loadProducts();
  },
  data() {
    return {
      loading: null,
      error: null,
    };
  },
  computed: {
    products() {
      const products = this.$store.getters["products/products"];
      return products;
    },
  },
  methods: {
    async loadProducts() {
      this.loading = true;
      try {
        await this.$store.dispatch("products/getProducts");
        this.loading = false;
      } catch (error) {
        this.error = error.message;
      }
    },
    async searchQuery(query) {
      this.loading = true;
      try {
        await this.$store.dispatch("products/querySearch", query);
        this.loading = false;
      } catch (error) {
        this.error = error.message;
      }
    },
    handleError() {
      this.error = null;
      this.loadProducts();
    },
  },

  components: { TheHeader, ProductUi },
};
</script>

<style scoped>
.spinner {
  background-color: transparent;
  padding: 0 auto;
  width: 100%;
  height: 80vh;
}
.container {
  background-color: transparent;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 20px 20px;
}
@media (max-width: 900px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
