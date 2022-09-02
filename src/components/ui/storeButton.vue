<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
button {
  border-style: none;
  width: 40%;
  padding: 6px;
  border-radius: 12px;
  color: white;
  background-color: purple;
  margin: 2px 0;
}
@media (max-width: 600px) {
  button {
    width: 80%;
  }
}
</style>
