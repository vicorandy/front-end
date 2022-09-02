<template>
  <main>
    <div class="box">
      <div class="login">
        <div class="profile">
          <i class="fa fa-user-circle icons profile-img"></i>
          <div class="txt">
            <p>
              <b class="btn" v-on:click="gotoLogin">Sign in</b> <b>/</b>
              <b class="btn" v-on:click="gotoLogin">Register</b>
            </p>
          </div>
          <div></div>
        </div>

        <div class="profile-list">
          <nav>
            <ul>
              <li>
                <div>
                  <i class="fa fa-heart icons"></i>
                  <p>Home</p>
                </div>
              </li>
              <li>
                <div>
                  <i class="fa fa-group icons"></i>
                  <p>Following</p>
                </div>
              </li>
              <li>
                <div>
                  <i class="fa fa-ticket icons"></i>
                  <p>Coupons</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="orders">
        <div class="orders-header">
          <p>My orders</p>
          <p>view all <i class="fa fa-angle-right"></i></p>
        </div>
        <div class="orders-list">
          <nav>
            <ul>
              <li>
                <div>
                  <i class="fa fa-bank"></i>
                  <p>Wallet</p>
                </div>
              </li>
              <li>
                <div>
                  <i class="fa fa-gift"></i>
                  <p>To be Shipped</p>
                </div>
              </li>
              <li>
                <div>
                  <i class="fa fa-truck"></i>
                  <p>shipped</p>
                </div>
              </li>

              <li>
                <div>
                  <i class="fa fa-check-square"></i>
                  <p>to be reviewed</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="orders-footer">
          <p>In dispute</p>
          <p><i class="fa fa-angle-right"></i></p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    // turing tests
    // const numbers = [1, 2, 3, 4, 5, 6, 7];
    // const cnst = 3;
    // const changer = function (nums, k) {
    //   const max = nums.length;
    //   const chang = max - k;
    //   let data = [];
    //   nums.forEach((num, i) => {
    //     if (i >= chang) {
    //       data.unshift(num);
    //     }
    //   });
    //   nums.forEach((num, i) => {
    //     if (i < chang) {
    //       data.push(num);
    //     }
    //   });
    //   const results = data;
    //   return results;
    // };
    // changer(numbers, cnst);
  },
  methods: {
    gotoLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.profile-img {
  font-size: 5rem;
  color: rgb(219, 210, 210);
}
.orders {
  background-color: white;
  padding: 10px;
}
.orders-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgb(177, 170, 170);
  padding: 2px;
}
.orders-list {
  padding: 20px 0px;
}
.orders-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid rgb(177, 170, 170);
  padding: 2px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 30px;
  padding-top: 10px;
}
li {
  list-style: none;
  text-align: center;
  color: purple;
}
i {
  font-size: 23px;
}

.box {
  width: 80%;
  margin: 0 auto;
}
.login {
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
}
.btn:hover {
  font-size: 23px;
  color: purple;
  cursor: pointer;
}
.profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
}
.txt {
  align-self: center;
}
@media (max-width: 700px) {
  .box {
    width: 100%;
  }
}
</style>
