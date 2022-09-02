<template>
  <main>
    <div>
      <store-dialog
        title="Account Error"
        :show="!!error"
        v-on:close="handleError"
        >{{ error }}</store-dialog
      >
    </div>
    <div class="form">
      <div class="form-head">
        <button :class="{ active: mode === 'Login' }" v-on:click="login">
          Login</button
        ><button :class="{ active: mode === 'Sign up' }" v-on:click="signUp">
          Sign up
        </button>
      </div>
      <div class="form-body">
        <input
          type="text"
          placeholder="enter your name"
          id="name"
          v-if="mode === 'Sign up'"
          v-model.trim="name"
        />
        <input
          type="email"
          placeholder="enter your email"
          id="name"
          v-model.trim="email"
        />
        <input
          type="password"
          placeholder="enter your password"
          id="name"
          v-model.trim="password"
        />
        <p class="validator" v-if="validator">
          please make sure all fields are not empty
        </p>
      </div>

      <div class="form-btn">
        <button class="btn" v-on:click="formAction">{{ btnTitle }}</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      mode: "Login",
      validator: false,
      error: null,
    };
  },
  computed: {
    btnTitle() {
      if (this.mode === "Login") {
        return "Login";
      } else {
        return "Sign up";
      }
    },
  },
  methods: {
    login() {
      this.mode = "Login";
    },
    signUp() {
      this.mode = "Sign up";
    },
    validation() {
      this.validator = false;
      if (this.name === "" && this.mode === "Sign up") {
        this.validator = true;
        return;
      }
      if (this.email === "") {
        this.validator = true;
        return;
      }
      if (this.password === "") {
        this.validator = true;
        return;
      }
    },
    handleError() {
      this.error = null;
    },
    async formAction() {
      this.validation();
      if (this.validator) return;
      const user = {};

      try {
        if (this.mode === "Login") {
          user.email = this.email;
          user.password = this.password;
          await this.$store.dispatch("user/loginUser", user);
          this.$router.push("/account");
        } else if (this.mode === "Sign up") {
          user.username = this.name;
          user.email = this.email;
          user.password = this.password;

          await this.$store.dispatch("user/registerUser", user);
          this.$router.push("/account");
        }
      } catch (error) {
        this.error = error.message;
        console.log(this.error);
      }
    },
  },
};
</script>

<style scoped>
button {
  border-style: none;
  background-color: transparent;
  font-size: 17px;
  margin-right: 30px;
}
input {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid purple;
}

.form {
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 80%;
  padding: 20px;
}
.form-head {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
}
.form-body {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 30px;
}
.form-btn {
  display: flex;
  justify-content: center;
  color: white;
}
.validator {
  color: red;
}
.btn {
  width: 40%;
  padding: 6px;
  border-radius: 12px;
  background-color: purple;
  color: white;
}
.active {
  border-bottom: 4px solid purple;
}
</style>
