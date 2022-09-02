import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import StoreButton from "./components/ui/storeButton.vue";
import StoreSpinner from "./components/ui/storeSpinner.vue";
import StoreDialog from "./components/ui/storeDialouge.vue";

const app = createApp(App);
app.component("store-button", StoreButton);
app.component("store-dialog", StoreDialog);
app.component("store-spinner", StoreSpinner);
app.use(store);
app.use(router);
app.mount("#app");
