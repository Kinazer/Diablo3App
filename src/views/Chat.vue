<template>
  <v-content class="bg" style=" margin-top:-10px">
    <v-layout column style="overflow-y:scroll; height:300px; color:white;">
      <v-flex v-for="(mensaje, i) in mensajes" :key="i">
        <div>{{ mensaje.mensaje }}</div>
      </v-flex>
    </v-layout>

    <input
      @keypress.enter="guardar"
      v-model="mensaje"
      type="text"
      placeholder="Type your message..."
      id="pp"
      style="color:white;padding-left:15px"
    >
    <v-btn @click="guardar">Send</v-btn>
    <v-btn @click="login" fab icon>
      <v-img src="https://forlopd.es/wp-content/uploads/2019/01/google.png"></v-img>
    </v-btn>
  </v-content>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
export default {
  name: "d3chat",
  data() {
    return {
      mensaje: null,

      mensajes: [],
      menu: {
        names: [
          "Witch Doctor",
          "Barbarian",
          "Demon Hunter",
          "Wizard",
          "Necromancer",
          "Monk",
          "Crusader"
        ],

        pages: ["wd", "barb", "dh", "wiz", "necro", "monk", "crus"]
      }
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
  }
};
</script>

<style>
#pp::placeholder {
  color: white;
}
</style>
