# vuetify-messenger

## Installing

```bash
yarn add @perseu-vue/vuetify-messenger
```

Or

```bash
npm install @perseu-vue/vuetify-messenger
```

## Setup

Register `vuetify-messenger` globally:

```javascript
import Vue from "vue";
import VMessenger from "@perseu-vue/vuetify-messenger";

Vue.use(VMessenger);
```

### Changing default messages

```javascript
import Vue from "vue";
import VMessenger from "@perseu-vue/vuetify-messenger";

Vue.use(VMessenger, {
  texts: {
    confirmTitle: "Confirmação",
    successTitle: "Pronto",
    errorTitle: "Ops",
    closeText: "Fechar",
    yesText: "Sim",
    noText: "Não"
  }
});
```

Use the `<v-messenger></v-messenger>` component in the page that you want use it

> If you're ussing SPA, use it on the SPA's default page. like `App.vue` or `default.vue` (for Nuxt)

## Alert usage

### Sucess alert

```javascript
this.$messenger.showSuccessAlert("Some message");
```

### Error alert

```javascript
this.$messenger.showErrorAlert("Some message");
```

## Confirm usage

```javascript
this.$messenger.showConfirmAlert(
  "Some message",
  () => {
    console.log("Yes clicked");
  },
  () => {
    console.log("No clicked");
  }
);
```

## Snackbar usage

### Sucess alert

```javascript
this.$messenger.showSuccessSnackbar("Some message");
```

### Error alert

```javascript
this.$messenger.showErrorSnackbar("Some message");
```
