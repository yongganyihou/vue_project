import Vue from "vue";
import App from "./App.vue";
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";

import { Header } from "mint-ui";
Vue.component(Header.name, Header);

const vm = new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement(App);
  }
});
