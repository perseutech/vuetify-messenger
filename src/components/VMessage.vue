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
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      close: "alert/closeAlert"
    }),
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
    ...mapState({
      show: state => state.alert.show,
      title: state => state.alert.title,
      message: state => state.alert.message,
      isConfirm: state => state.alert.isConfirm,
      yesText: state => state.alert.yesText,
      noText: state => state.alert.noText,
      closeText: state => state.alert.closeText,
      yesLoading: state => state.alert.yesLoading,
      noLoading: state => state.alert.noLoading,
      yes: state => state.alert.yes,
      no: state => state.alert.no
    })
  }
};
</script>
