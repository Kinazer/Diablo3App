<template>
  <v-container text-xs-left class="bg">
    <v-layout mt-5>
      <v-flex class="loreText" m-2>
        <p>
          Monks of the Sahptev faith train their bodies and minds so
          that they may become the foremost holy warriors of the land
          of Ivgorod. Within the cloisters of the Patriarchs, the monks
          endure harsh trials both physical and spiritual, proving their
          devotion and attaining unmatched focus.
        </p>
        <p>
          Daily ritualistic cleansings help monks purify their spirits
          and overcome the corruption that gnaws at the hearts of all men.
          In the pursuit of martial perfection, they also hone their legendary
          balance and clarity, skills that allow them to master both unarmed
          combat and a diverse array of weapons.
        </p>
        <p>
          After a lifetime of preparation, anointed monks are permitted to
          leave their monasteries' halls to serve the decrees of the Patriarchs.
          The emblem on their foreheads marks them as survivors, achievers,
          and pillars of their society.
        </p>
        <p>
          Monks embody the will of Ivgorod’s one thousand and one gods in every
          step and every strike.
        </p>
      </v-flex>

      <v-layout row wrap>
        <v-flex xs1 align-end>
          <v-dialog>
            <template v-slot:activator="{ on }">
              <v-chip
                v-for="(skill, i) in skills.skills.active"
                :key="i"
                v-on="on"
                @click="description(skill)"
              >
                <v-avatar small>
                  <img
                    :src="
                      `https://blzmedia-a.akamaihd.net/d3/icons/skills/64/` +
                        skill.icon +
                        `.png`
                    "
                  >
                </v-avatar>
                {{ skill.level }} - {{ skill.name }}
              </v-chip>
            </template>
            <!-- <span class="text-lg-right">{{skill.level}} - {{skill.name}}</span> -->

            <v-card v-for="(rune, i) in descri.runes" :key="i">
              <v-card-title>{{ rune.name }}</v-card-title>
              <v-card-text>{{ rune.description }}</v-card-text>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    description(skill) {
      this.$store.dispatch("getSkillDescMonk", skill.slug);
    }
  },
  created() {
    this.$store.dispatch("getSkillMonk", this.id);
  },

  computed: {
    skills() {
      return this.$store.getters.getSkillMonkName;
    },
    descri() {
      return this.$store.getters.getSkillDescName;
    }
  }
};
</script>

<style>
.mLeft {
  margin-left: 20%;
}
.pos {
  float: right;
}
.wid {
  width: 100%;
}
.bg {
  background-image: url(https://us.diablo3.com/static/images/layout/bg-repeat.jpg);
  background-repeat: repeat;
}
.bgLore {
  background-image: url(https://us.diablo3.com/static/images/db/overview/resource-bg.jpg);
  background-size: cover;
}
.loreText {
  color: white;
}
</style>
