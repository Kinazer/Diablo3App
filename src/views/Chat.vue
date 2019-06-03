<template>
  <v-content class="bg">
    <v-layout column align-center style="margin-top:15%;">
      <h1 style="color:white">CHAT</h1>
      <p
        style="color:white; margin:10px"
      >Take part on a real-time group chat and talk about your own experience on the game</p>
    </v-layout>
    <v-layout
      column
      align-center
      style="margin-top:10%; margin-left:25px;margin-right:25px; overflow-y:scroll; scroll-behavior:smooth; border-radius: 15px; height:300px; color:black;  background-color: rgba(240, 255, 255, 0.603)"
    >
      <v-flex v-for="(mensaje, i) in mensajes" :key="i">
        <div
          style="background-color: rgb(112, 255, 77); min-width:200px; text-align:center; margin:2px; border-radius:5px"
        >{{ mensaje.mensaje }}</div>
      </v-flex>
    </v-layout>

    <input
      @keypress.enter="guardar"
      v-model="mensaje"
      type="text"
      placeholder="Type your message..."
      id="pp"
      style="color:white;padding-left:15px;margin-left:15px"
    >
    <v-btn @click="guardar">Send</v-btn>
    <v-btn @click="login" fab icon>
      <v-img src="https://forlopd.es/wp-content/uploads/2019/01/google.png"></v-img>
    </v-btn>
  </v-content>
</template>

<script>
import firebase from "firebase";
export default {
  name: "d3chat",
  data() {
    return {
      mensaje: null,
      log: true,
      mensajes: []
    };
  },
  methods: {
    guardar() {
      db.collection("chat").add({
        mensaje: this.mensaje,
        times: new Date()
      });
      this.mensaje = null;
    },
    fetchMessages() {
      db.collection("chat")
        .orderBy("times")
        .onSnapshot(querySnapshot => {
          let todosMensajes = [];
          querySnapshot.forEach(doc => {
            todosMensajes.push(doc.data());
          });
          this.mensajes = todosMensajes;
        });
    },
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  },
  created() {
    this.fetchMessages();
    Firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.log = true;
      } else {
        this.log = false;
      }
    });
  }
};
</script>

<style>
#pp::placeholder {
  color: azure;
}
</style>
