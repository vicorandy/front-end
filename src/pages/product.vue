<template>
  <main>
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
    <div class="box" v-if="!loading">
      <div class="imgg"><img :src="product.imgUrl" /></div>
      <div class="alert" v-if="alert">Added to cart</div>
      <div class="desc">
        <h3>{{ product.name }}</h3>
        <p class="pdesc">{{ product.desc }}</p>
        <h3>price : ${{ product.price }}</h3>

        <div class="btn-box">
          <store-button v-on:click="buyNow" name="Buy Now"></store-button>
          <store-button
            name="Add To Cart"
            v-on:click="addToCart"
          ></store-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import storeButton from "../components/ui/storeButton.vue";
export default {
  components: { storeButton },
  created() {
    document.body.style.backgroundColor = "white";
    this.fetchProduct();
  },
  unmounted() {
    document.body.style.backgroundColor = "rgb(219, 210, 210)";
  },

  data() {
    return {
      id: this.$route.params.id,
      alert: false,
      error: null,
      loading: false,
    };
  },
  computed: {
    product() {
      const product = this.$store.getters["products/selectedProduct"];
      return product;
    },
  },
  methods: {
    async fetchProduct() {
      await this.$store.dispatch("products/getSelectedProduct", this.id);
    },
    addToCart() {
      const item = this.product;
      this.$store.dispatch("cart/addItemToCart", item);
      this.alert = true;

      setTimeout(() => (this.alert = false), 2000);
    },
    async buyNow() {
      this.loading = true;
      const id = this.product.id;
      const data = {
        productsId: [id],
        productQuantity: [1],
      };
      try {
        await this.$store.dispatch("cart/checkOut", data);
        const link = this.$store.getters["cart/link"];
        console.log(link);
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
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 80%;
  height: 80%;
  background: transparent;
}
.spinner {
  background-color: transparent;
  padding: 0 auto;
  width: 100%;
  height: 80vh;
}
.box {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
}
.btn-box {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}
.imgg {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 auto;
}
.desc {
  width: 50%;
  border: 1px solid purple;
  background-color: white;
  border-radius: 12px;
  padding: 0;
  margin: 0;
  padding: 10px;
  color: purple;
}
.pdesc {
  margin-top: 25px;
}
.alert {
  background: rgba(112, 107, 107, 0.397);
  width: 40%;
  text-align: center;
  padding: 12px;
  border-radius: 12px;
  position: absolute;
  align-self: center;
  animation: alert 1s ease-in-out;
}
@media (max-width: 600px) {
  .box {
    flex-direction: column;
  }
  .imgg {
    width: 100%;
  }
  .desc {
    width: 100%;
  }
  .alert {
    position: fixed;
    top: 10;
  }
}
@keyframes alert {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
