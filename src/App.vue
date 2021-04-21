<template>
  <v-app>
    <v-main>
      <v-row justify="center" class="mt-5 pt-5">
        <h2>Alerts</h2>
      </v-row>
      <v-row justify="center" class="mt-5 pt-5">
        <v-col cols="auto">
          <v-btn @click="showSuccessAlert">Show Success Alert</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="showErrorAlert">Show Error Alert</v-btn>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-5 pt-5">
        <h2>Confirm</h2>
      </v-row>
      <v-row justify="center" class="mt-5 pt-5">
        <v-col cols="auto">
          <v-btn @click="showConfirmAlert">Show Confirm Alert</v-btn>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-5 pt-5">
        <h2>Snackbar</h2>
      </v-row>
      <v-row justify="center" class="mt-5 pt-5">
        <v-col cols="auto">
          <v-btn @click="showSuccessSnackbar">Show Success Snackbar</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="showErrorSnackbar">Show Error Snackbar</v-btn>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-5 pt-5">
        <h2>Loading</h2>
      </v-row>
      <v-row justify="center" class="mt-5 pt-5">
        <v-col cols="auto">
          <v-btn @click="showLoadingDialog">Show Loading Dialog</v-btn>
        </v-col>
      </v-row>
    </v-main>
    <v-messenger></v-messenger>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
  methods: {
    showSuccessAlert() {
      this.$messenger.showSuccessAlert("Something");
    },
    showErrorAlert() {
      this.$messenger.showErrorAlert("Something");
    },
    showConfirmAlert() {
      this.$messenger.showConfirmAlert(
        "Something",
        () => {
          console.log("Yes clicked");
        },
        () => {
          console.log("No clicked");
        }
      );
    },
    showSuccessSnackbar() {
      this.$messenger.showSuccessSnackbar("Something");
    },
    showErrorSnackbar() {
      this.$messenger.showErrorSnackbar("Something");
    },
    showLoadingDialog() {
      this.$messenger.showLoadingDialog("We're doing something...");
      setTimeout(() => {
        this.$messenger.changeLoadingMessage("Message have changed");
      }, 3000);
      setTimeout(() => {
        this.$messenger.changeLoadingMessage("We're about to end");
      }, 5000);
      setTimeout(() => {
        this.$messenger.closeLoading();
      }, 6500);
    }
  }
};
</script>
