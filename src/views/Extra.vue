<template>
  <v-content>
    <v-layout mt-5>
      <v-flex>
        <router-link to="/chat">
          <v-layout class="bg1" justify-center>CHAT</v-layout>
        </router-link>
        <router-link to="/lad">
          <v-layout class="bg2" justify-center>LADDER</v-layout>
        </router-link>
        <router-link to="/armory">
          <v-layout class="bg3" justify-center>ARMORY</v-layout>
        </router-link>
      </v-flex>
      <!-- imagenes de fondo con 3 opciones 1) chat --- 2) classi --- 3)armeria/buscador --- 4)(opcional)Logros  -->
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data: () => ({
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
  }),
  methods: {},
  computed: {}
};
</script>

<style>
.bg1 {
  background-image: url("https://assets1.ignimgs.com/thumbs/userUploaded/2017/6/26/d3necromancer1280-1498521075591_270h.jpg");
  color: white;
  padding: 30%;
}
.bg2 {
  background-image: url("https://cdn1-www.gamerevolution.com/assets/uploads/2017/07/diablo-iii-rise-of-the-necromancer-review.jpg");
  color: white;
  padding: 29%;
}
.bg3 {
  background-image: url("https://8gmwp015fo-flywheel.netdna-ssl.com/wp-content/uploads/sites/7/2013/12/mephisto___lord_of_hatred_by_tamplierpainter-d6l3c6d-e1389033422732.jpg");
  color: white;
  padding: 29%;
}
</style>
