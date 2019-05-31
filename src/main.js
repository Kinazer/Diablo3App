import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";

require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD_Zng_DX4gh9CFpUXxAap-AQGz6dyUxho",
  authDomain: "chat-vue-d3.firebaseapp.com",
  databaseURL: "https://chat-vue-d3.firebaseio.com",
  projectId: "chat-vue-d3",
  storageBucket: "chat-vue-d3.appspot.com",
  messagingSenderId: "870609726526",
  appId: "1:870609726526:web:790a8edea6a6ee79"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
window.db = db;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
