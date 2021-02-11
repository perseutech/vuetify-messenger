<template>
  <div>
    <v-dialog v-model="alert" max-width="290" persistent>
      <v-card>
        <v-card-title class="headline">{{ title }}</v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="closeAlert"
            v-show="!isConfirm"
            rounded
          >
            {{ closeText }}
          </v-btn>
          <v-btn
            color="grey darken-1"
            text
            @click="noClick"
            v-show="isConfirm"
            :loading="noLoading"
            :disabled="yesLoading"
            rounded
          >
            {{ noText }}
          </v-btn>
          <v-btn
            color="red lighten-1"
            class="elevation-0"
            @click="yesClick"
            v-show="isConfirm"
            :loading="yesLoading"
            :disabled="noLoading"
            rounded
            dark
          >
            {{ yesText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :color="snackbarColor" multi-line app>
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn @click="closeSnackbar" color="accent" text v-bind="attrs">
          {{ closeText }}
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import store from "./../store";

export default {
  methods: {
    closeAlert() {
      store.dispatch("alert/closeAlert");
    },
    closeSnackbar() {
      store.dispatch("alert/closeSnackbar");
    },
    async yesClick() {
      this.yes();
      this.closeAlert();
    },
    async noClick() {
      this.no();
      this.closeAlert();
    }
  },
  computed: {
    alert: () => store.state.alert.alert,
    title: () => store.state.alert.title,
    message: () => store.state.alert.message,
    isConfirm: () => store.state.alert.isConfirm,
    yesText: () => store.state.alert.yesText,
    noText: () => store.state.alert.noText,
    closeText: () => store.state.alert.closeText,
    yesLoading: () => store.state.alert.yesLoading,
    noLoading: () => store.state.alert.noLoading,
    yes: () => store.state.alert.yes,
    no: () => store.state.alert.no,
    snackbar: {
      get: () => store.state.alert.snackbar,
      set: function(value) {
        !value ? this.closeSnackbar() : "";
      }
    },
    snackbarColor: () => store.state.alert.snackbarColor
  }
};
</script>
