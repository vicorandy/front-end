<template>
  <main>
    <div class="container" v-on:click="goTo">
      <div class="image">
        <img :src="img" />
      </div>
      <div class="description">
        <p class="desc">
          <b>{{ name }}</b>
        </p>

        <p class="desc"><b>price: </b>$ {{ price }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["id", "name", "price", "img", "desc"],
  methods: {
    goTo() {
      const id = this.id;
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  width: 250px;
  border-radius: 26px;
  margin-bottom: 10px;
}

.description {
  padding: 4px 4px;
  text-align: center;
  border: 1px solid purple;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
}
.desc {
  margin-top: 4px;
  margin-bottom: 9px;
}
img {
  width: 250px;
  height: 250px;
  border-top-right-radius: 26px;
  border-top-left-radius: 26px;
}
.image {
  margin: 0;
  padding: 0;
  height: 250px;
  border-top-right-radius: 26px;
  border-top-left-radius: 26px;
}
</style>
