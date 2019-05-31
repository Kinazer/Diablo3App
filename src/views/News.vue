<template>
  <v-content class="bg">
    <v-layout mt-5>
      <v-carousel class="crsl" height="230">
        <v-carousel-item
          v-for="(item, i) in carousel.img"
          :key="i"
          :src="item"
          dark
          reverse-transition="fade"
          transition="fade"
        ></v-carousel-item>
      </v-carousel>
    </v-layout>
    <v-flex justify-center class="txt">
      <h3>Season 17: Season of Nightmares is Live</h3>
      <p>
        Season 17 begins May 17, alongside the latest Diablo III patch. Read on
        to learn more about upcoming legendary item updates, new Torment levels,
        a slew of quality of life changes, and a nightmarish Seasonal buff!
      </p>
    </v-flex>
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
    },
    carousel: {
      img: [
        "https://i.ytimg.com/vi/88oYFZtoY70/maxresdefault.jpg",

        "https://i.blogs.es/24a418/diablo-iii-dlc-nigromante/450_1000.jpg"
      ]
    }
  }),
  methods: {},
  created() {
    this.$store.dispatch("getSkillType", this.id);
  },

  computed: {
    skills() {
      return this.$store.getters.getSkillTypeName;
    }
  }
};
</script>

<style>
.menu {
  padding: 20px;
}
.crsl {
  margin-top: 15%;
}
.bg {
  background-image: url(https://us.diablo3.com/static/images/layout/bg-repeat.jpg);
  background-repeat: repeat;
}
.txt {
  margin: 20px;
  color: white;
}
</style>
