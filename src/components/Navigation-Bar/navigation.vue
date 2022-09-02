<template>
  <div class="nav-container">
    <nav>
      <ul>
        <li>
          <router-link to="/home"
            ><div>
              <i class="fa fa-home icons"></i>
              <p>Home</p>
            </div></router-link
          >
        </li>

        <li>
          <router-link to="/category"
            ><div>
              <i class="fa fa-list icons"></i>
              <p>category</p>
            </div></router-link
          >
        </li>

        <li>
          <router-link to="/cart"
            ><div>
              <div class="cart">{{ cart }}</div>
              <i class="fa fa-shopping-cart icons"></i>
              <p>Cart</p>
            </div></router-link
          >
        </li>

        <li>
          <router-link to="/account"
            ><div>
              <i class="fa fa-user icons"></i>
              <p>Accont</p>
            </div></router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("cart/retriveCartInfo");
  },
  computed: {
    cart() {
      return this.$store.getters["cart/cartLength"];
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  background-color: white;
}
li {
  padding: 20px;
  margin: 0 60px;
}
a {
  text-decoration: none;
  color: black;
}
a:active,
a:hover,
a.router-link-active {
  color: purple;
}
.icons {
  font-size: 23px;
}
.nav-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 92px;
}
.cart {
  background-color: purple;
  border-radius: 50%;
  width: 18px;
  color: white;
  margin: 0 auto;
  /* position: absolute; */
}
/* for mobile devices */
@media (max-width: 700px) {
  li {
    margin: 0;
    width: 100%;
  }
}
.nav-container {
  width: 100%;
  text-align: center;
}
body {
  max-height: 100vh;
}
</style>
