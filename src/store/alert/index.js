import options from "./../../options";

export default {
  namespaced: true,
  state: {
    isShowing: false,
    alert: false,
    snackbar: false,
    loading: false,
    progressColor: "",
    snackbarColor: "",
    isConfirm: false,
    title: "",
    message: "",
    yes: undefined,
    no: undefined,
    closeText: options.texts.closeText,
    yesText: options.texts.yesText,
    noText: options.texts.noText,
    yesLoading: false,
    noLoading: false
  },
  mutations: {
    SHOW_ALERT(state, payload) {
      state.alert = true;
      state.isConfirm = false;
      state.title = payload.title;
      state.message = payload.message;
      state.closeText = payload.closeText;
      state.isShowing = true;
    },
    SHOW_CONFIRM(state, payload) {
      state.alert = true;
      state.isConfirm = true;
      state.title = payload.title;
      state.message = payload.message;
      state.yes = payload.yes;
      state.no = payload.no;
      state.yesText = payload.yesText;
      state.noText = payload.noText;
      state.isShowing = true;
    },
    SHOW_SNACKBAR(state, payload) {
      state.snackbar = true;
      state.title = payload.title;
      state.message = payload.message;
      state.closeText = payload.closeText;
      state.snackbarColor = payload.snackbarColor;
      state.isShowing = true;
    },
    SHOW_LOADING(state, payload) {
      state.loading = true;
      state.title = payload.title;
      state.message = payload.message;
      state.progressColor = payload.progressColor;
      state.isShowing = true;
    },
    CHANGE_LOADING_MESSAGE(state, payload) {
      state.message = payload.message;
    },
    HIDE_ALERT(state) {
      state.alert = false;
      state.isConfirm = false;
      state.title = "";
      state.message = "";
      state.yes = undefined;
      state.no = undefined;
      state.yesText = "";
      state.noText = "";
      state.yesLoading = false;
      state.noLoading = false;
      state.isShowing = false;
    },
    HIDE_SNACKBAR(state) {
      state.snackbar = false;
      state.title = "";
      state.message = "";
      state.isShowing = false;
    },
    HIDE_LOADING(state) {
      state.loading = false;
      state.title = "";
      state.message = "";
      state.isShowing = false;
    },
    START_YES_LOADING(state) {
      state.yesLoading = true;
    },
    START_NO_LOADING(state) {
      state.noLoading = true;
    }
  },
  actions: {
    showAlert({ commit }, payload) {
      commit("SHOW_ALERT", payload);
    },
    showSuccessAlert({ commit }, message) {
      commit("SHOW_ALERT", {
        title: options.texts.successTitle,
        message: message,
        closeText: options.texts.closeText
      });
    },
    showErrorAlert({ commit }, message) {
      commit("SHOW_ALERT", {
        title: options.texts.errorTitle,
        message: message,
        closeText: options.texts.closeText
      });
    },
    showConfirmAlert({ commit }, payload) {
      if (!payload.yes || typeof payload.yes != "function") {
        throw "The 'yes' function should be informed for the confirm alert";
      }
      if (!payload.no || typeof payload.no != "function") {
        throw "The 'no' function should be informed for the confirm alert";
      }
      commit("SHOW_CONFIRM", {
        title: payload.title || options.texts.confirmTitle,
        message: payload.message,
        yesText: payload.yesText || options.texts.yesText,
        noText: payload.noText || options.texts.noText,
        yes: payload.yes,
        no: payload.no
      });
    },
    showSuccessSnackbar({ commit }, message) {
      commit("SHOW_SNACKBAR", {
        title: options.texts.successTitle,
        message: message,
        closeText: options.texts.closeText,
        snackbarColor: "success"
      });
    },
    showErrorSnackbar({ commit }, message) {
      commit("SHOW_SNACKBAR", {
        title: options.texts.successTitle,
        message: message,
        closeText: options.texts.closeText,
        snackbarColor: "error"
      });
    },
    showLoadingDialog({ commit }, message) {
      commit("SHOW_LOADING", {
        title: options.texts.loadingTitle,
        message: message,
        progressColor: "primary"
      });
    },
    changeLoadingMessage({ commit }, message) {
      commit("CHANGE_LOADING_MESSAGE", {
        message: message
      });
    },
    startYesLoading({ commit }) {
      commit("START_YES_LOADING");
    },
    startNoLoading({ commit }) {
      commit("START_NO_LOADING");
    },
    closeAlert({ commit }) {
      commit("HIDE_ALERT");
    },
    closeSnackbar({ commit }) {
      commit("HIDE_SNACKBAR");
    },
    closeLoading({ commit }) {
      commit("HIDE_LOADING");
    }
  }
};
