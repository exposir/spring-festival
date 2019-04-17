import "babel-polyfill";
import Vue from "vue";
import "@local/thm-ui/dist/css/thm-ui.css";
import { col, row, songlist, songlistItem, notification } from "@local/thm-ui";

import App from "./app.vue";
import pluins from "./plugins";

import VueAwesomeSwiper from "vue-awesome-swiper";
 
// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.use(col);
Vue.use(row);
Vue.use(songlist);
Vue.use(songlistItem);
Vue.use(notification);
Vue.use(pluins);

const app = new Vue({
    el: "#app",
    render: h => h(App)
});

export default {
    app,
};
