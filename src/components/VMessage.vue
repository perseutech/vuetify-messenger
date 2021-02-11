<template>
  <v-dialog v-model="show" max-width="290" persistent>
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>

      <v-card-text v-html="message"></v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="red" text @click="close" v-show="!isConfirm" rounded>
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
</template>
<script>
import store from "./../store";

export default {
  methods: {
    close() {
      store.dispatch("alert/closeAlert");
    },
    async yesClick() {
      this.yes();
      this.close();
    },
    async noClick() {
      this.no();
      this.close();
    }
  },
  computed: {
    show: () => store.state.alert.show,
    title: () => store.state.alert.title,
    message: () => store.state.alert.message,
    isConfirm: () => store.state.alert.isConfirm,
    yesText: () => store.state.alert.yesText,
    noText: () => store.state.alert.noText,
    closeText: () => store.state.alert.closeText,
    yesLoading: () => store.state.alert.yesLoading,
    noLoading: () => store.state.alert.noLoading,
    yes: () => store.state.alert.yes,
    no: () => store.state.alert.no
  }
};
</script>
