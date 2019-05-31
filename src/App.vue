<template>
  <v-app>
    <v-content class="bg">
      <v-toolbar fixed dense color="#B90B0B">
        <img
          height="45px"
          width="45px"
          src="https://img.informer.com/icons_mac/png/128/428/428530.png"
        />

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark v-on="on" id="class">Classes</v-btn>
            </template>
            <v-card
              dark
              v-for="(name, i) in menu.names"
              :key="i"
              :to="'/' + menu.pages[i]"
              >{{ name }}</v-card
            >
          </v-menu>
          <v-btn dark v-on="on" to="/">News</v-btn>
          <v-btn dark v-on="on" to="/extra">Extra</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-content>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
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
  }
};
</script>
