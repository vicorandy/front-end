<template>
  <main>
    <div class="router-container">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
    <nav-bar></nav-bar>
  </main>
</template>
<script>
import NavBar from "./components/Navigation-Bar/navigation.vue";

export default {
  components: { NavBar },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}
body {
  background-color: rgb(219, 210, 210);
  overflow-x: hidden;
}
.router-container {
  margin-bottom: 100px;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-activie {
  transition: all 0.3s ease-in;
}
.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
