<template>
  <main>
    <div class="container" v-on:click="goTo">
      <div class="image"><img :src="img" alt="" /></div>
      <div class="txt">
        <p>{{ name }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["id", "name", "img"],
  methods: {
    goTo() {
      const id = this.id;
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style scoped>
img {
  width: inherit;
  height: inherit;
}
.container {
  width: 110px;
  margin-bottom: 15px;
}
.image {
  width: inherit;
  height: 110px;
  background-color: white;
}

.txt {
  text-align: center;
  width: inherit;
  cursor: pointer;
}
@media (max-width: 600px) {
  .container {
    width: 80px;
  }
  .image {
    height: 80px;
  }
  .txt {
    font-size: 11px;
  }
}
</style>
