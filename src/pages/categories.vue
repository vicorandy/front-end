<template>
  <main>
    <div class="start" v-if="!products">
      Please select a category to start shopping
      <i class="far fa-smile-wink"></i>
    </div>
    <div class="box">
      <div class="nav">
        <div class="options" v-on:click="getProductCategory('phones')">
          phones
        </div>
        <div class="options" v-on:click="getProductCategory('jewelry')">
          jewelry
        </div>
        <div class="options" v-on:click="getProductCategory('computers')">
          computers
        </div>
        <div class="options" v-on:click="getProductCategory('purfumes')">
          purfumes
        </div>
        <div class="options" v-on:click="getProductCategory('clothes')">
          clothes
        </div>
        <div class="options" v-on:click="getProductCategory('shoes')">
          shoes
        </div>
        <div class="options" v-on:click="getProductCategory('bags')">bags</div>
      </div>
      <div class="display-box">
        <category-product
          v-for="product in products"
          :key="product.id"
          :id="product._id"
          :name="product.name"
          :img="product.productImgUrl"
        ></category-product>
      </div>
    </div>
  </main>
</template>

<script>
import CategoryProduct from "../components/categories/catprodui.vue";
export default {
  created() {
    document.body.style.backgroundColor = "white";
  },
  unmounted() {
    document.body.style.backgroundColor = "rgb(219, 210, 210)";
  },
  methods: {
    async getProductCategory(query) {
      try {
        await this.$store.dispatch("category/getProductCategory", query);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  computed: {
    products() {
      return this.$store.getters["category/products"];
    },
  },
  components: { CategoryProduct },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.nav {
  position: fixed;
  left: 0;
  background-color: whitesmoke;
  height: 100vh;
  border-right: 1px solid black;
  text-align: center;
}
.start {
  text-align: center;
}
i {
  color: purple;
  font-size: 19px;
}
.options {
  border-bottom: 1px solid rgba(168, 148, 148, 0.5);
  border-top: 1px solid rgba(168, 148, 148, 0.5);
  padding: 20px 0;
  cursor: pointer;
}
.options:hover {
  color: purple;
}
.options:active {
  color: purple;
}
.display-box {
  background-color: transparent;
  margin-left: 20%;
  padding: 20px;
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
@media (max-width: 900px) {
  .display-box {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 700px) {
  .display-box {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
