import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import BaseButton from "@/components/layout/BaseButton.vue";
import BaseHeadline from "@/components/layout/BaseHeadline.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-headline", BaseHeadline);

app.use(store).use(router).mount("#app");
