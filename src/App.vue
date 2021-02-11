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
      this.$messenger.showSuccessAlert("Some thing");
    },
    showErrorAlert() {
      this.$messenger.showErrorAlert("Some thing");
    },
    showConfirmAlert() {
      this.$messenger.showConfirmAlert(
        "Some thing",
        () => {
          console.log("Yes clicked");
        },
        () => {
          console.log("No clicked");
        }
      );
    },
    showSuccessSnackbar() {
      this.$messenger.showSuccessSnackbar("Some thing");
    },
    showErrorSnackbar() {
      this.$messenger.showErrorSnackbar("Some thing");
    }
  }
};
</script>
