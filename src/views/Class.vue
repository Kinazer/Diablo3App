<template>
  <v-content class="bg">
    <v-layout column align-center style="margin-top:20%; ">
      <h1 style="color:white">CLASSES</h1>

      <v-card
        v-for="(ic,i) in clases.icono "
        :key="i"
        style="min-width: 300px; background-color: rgba(240, 255, 255, 0.603); text-align:center; margin:15px "
        :to="`/`+clases.link[i]"
      >
        <h2 style="color:black">
          <v-avatar small>
            <img :src="`https://blzmedia-a.akamaihd.net/d3/icons/portraits/42/`+ic+`_male.png`">
          </v-avatar>
          {{clases.nombre[i]}}
          <v-avatar small>
            <img :src="`https://blzmedia-a.akamaihd.net/d3/icons/portraits/42/`+ic+`_female.png`">
          </v-avatar>
        </h2>
      </v-card>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    clases: {
      icono: [
        "witchdoctor",
        "barbarian",
        "demonhunter",
        "wizard",
        "p6_necro",
        "monk",
        "x1_crusader"
      ],
      nombre: [
        "Witch Doctor",
        "Barbarian",
        "Demon Hunter",
        "Wizard",
        "Necromancer",
        "Monk",
        "Crusader"
      ],
      link: ["wd", "barb", "dh", "wiz", "necro", "monk", "crus"]
    }
  }),
  methods: {},
  computed: {}
};
</script>

<style>
</style>


