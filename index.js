import VMessage from "./src/components/VMessage";
import store from "./src/store";
import options from "./src/options";

export default {
  install(Vue, globalOptions) {
    if (globalOptions) {
      Object.keys(globalOptions).map(function(key) {
        options[key] = globalOptions[key];
      });
    }
    Vue.component("v-message", VMessage);
    Vue.prototype.$messenger = {
      showSuccessAlert: message => {
        store.dispatch("alert/showSuccessAlert", message);
      },
      showErrorAlert: message => {
        store.dispatch("alert/showErrorAlert", message);
      },
      showConfirmAlert: (...args) => {
        if (args.length > 3) {
          store.dispatch("alert/showConfirmAlert", {
            title: args[0],
            message: args[1],
            yes: args[2],
            no: args[3]
          });
        } else {
          store.dispatch("alert/showConfirmAlert", {
            message: args[0],
            yes: args[1],
            no: args[2]
          });
        }
      }
    };
  }
};