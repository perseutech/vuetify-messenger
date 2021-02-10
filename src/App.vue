<template>
  <v-app>
    <v-main>
      <v-row class="mt-5 pt-5" justify="center">
        <v-col cols="auto">
          <v-btn @click="showSuccessAlert">Show Success Alert</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="showErrorAlert">Show Error Alert</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="showConfirmAlert">Show Confirm Alert</v-btn>
        </v-col>
      </v-row>
      <v-message></v-message>
    </v-main>
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
    }
  }
};
</script>
