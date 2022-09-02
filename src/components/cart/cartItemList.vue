<template>
  <main>
    <div class="container">
      <div class="img"><img :src="imgUrl" alt="" /></div>
      <div class="desc">
        <h4>{{ name }}</h4>
        <p>
          {{ desc }}
        </p>
        <p>
          <b>price: ${{ price }}</b>
        </p>
      </div>
    </div>
    <div class="controllerBox">
      <div class="controller">
        <button class="btn" v-on:click="increaseOrderQuantity">+</button>
        <h4 class="spc">{{ quantity }}</h4>
        <button class="btn" v-on:click="decreaseOrderQuantity">-</button>
      </div>
      <div>
        <button v-on:click="removeItemFromCart">
          <i class="fa fa-trash icons"></i><b> Remove</b>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    // console.log(JSON.parse(localStorage.getItem("cart")));
  },
  props: ["id", "name", "price", "imgUrl", "desc", "quantity"],
  methods: {
    reintializeCart() {
      this.$store.dispatch("cart/reintializeCart");
    },
    increaseOrderQuantity() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const id = this.id;
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + 1;
          return item;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      this.reintializeCart();
      this.$store.dispatch("cart/setCartTotal");
    },
    decreaseOrderQuantity() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const id = this.id;
      const updatedCart = cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          item.quantity = item.quantity - 1;
          return item;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      this.reintializeCart();
      this.$store.dispatch("cart/setCartTotal");
    },
    removeItemFromCart() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const id = this.id;
      const updatedCart = cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      this.reintializeCart();
      this.$store.dispatch("cart/retriveCartInfo");
      this.$store.dispatch("cart/setCartTotal");
    },
  },
};
</script>

<style scoped>
main {
  color: black;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 15px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
button {
  border-style: none;
  background: transparent;
  color: purple;
}
img {
  height: 200px;
  width: 200px;
}

i {
  color: purple;
  font-size: 20px;
}
.container {
  display: flex;
  flex-direction: row;
  padding: 7px;
}
.controllerBox {
  border-top: 1px solid rgb(218, 184, 209);
  margin-top: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.controller {
  display: flex;
}
.btn {
  padding: 0 12px;
  font-size: 20px;
  color: white;
  border-radius: 50%;
  background-color: purple;
}
.desc {
  margin-left: 20px;
}
.spc {
  margin: 0 16px;
}

@media (max-width: 700px) {
  main {
    width: 100%;
    /* margin: 0px; */
  }
  img {
    height: 100px;
    width: 100px;
  }
}
</style>
