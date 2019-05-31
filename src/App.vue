<template>
  <v-content class="bg">
    <v-toolbar fixed dense color="#B90B0B">
      <img
        height="45px"
        width="45px"
        src="https://img.informer.com/icons_mac/png/128/428/428530.png"
      >

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark to="/class">Classes</v-btn>
        <v-btn dark to="/">News</v-btn>
        <v-btn dark to="/extra">Extra</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-app>
      <router-view></router-view>
    </v-app>
  </v-content>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  }
};
</script>
