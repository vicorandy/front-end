<template>
  <main>
    <div class="image-icon"><h3>OnlineStore</h3></div>
    <div class="search-bar">
      <input type="text" placeholder="please enter search" v-model="input" />
      <button v-on:click.prevent="querySearch">
        <i class="fa fa-search icons"></i>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  emits: ["search"],
  methods: {
    querySearch() {
      const query = this.input.replace(/\s/g, "");
      this.$emit("search", query);
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
}
.search-bar {
  background-color: rgb(219, 210, 210);
  border-radius: 29px;
}
input {
  border-style: none;
  padding: 10px;
  border-radius: 29px;
  width: 500px;
  background-color: transparent;
  color: purple;
}
input:focus {
  outline: none;
}
button {
  border-style: none;
  background: transparent;
  margin-right: 10px;
}
div {
  margin: 0 auto;
}
.icons {
  color: purple;
  font-size: 23px;
}
.image-icon {
  color: purple;
}

/* for mobile device */
@media (max-width: 700px) {
  main {
    justify-content: space-between;
  }
  input {
    width: 200px;
  }
  div {
    margin: 0 0;
  }
}
</style>
