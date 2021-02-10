import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import messenger from "./../index";

Vue.config.productionTip = false;
Vue.use(messenger, {
  texts: {
    confirmTitle: "Confirmação",
    successTitle: "Pronto",
    errorTitle: "Ops",
    closeText: "Fechar",
    yesText: "Sim",
    noText: "Não"
  }
});

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
