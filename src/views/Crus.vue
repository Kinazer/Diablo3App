<template>
  <v-container text-xs-left class="bg">
    <v-layout mt-5>
      <v-flex class="loreText" m-2>
        <p>
          The leaders of the harmonious Zakarum religion once strove to imprison
          Mephisto, Lord of Hatred, beneath Travincal temple, preventing him from
          ever twisting the hearts of humanity again.
        </p>
        <p>They failed.</p>
        <p>
          It was not the first time Zakarum had lapsed; 200 years prior, the
          cleric Akkhan noticed corruption at the heart of his faith, and sent his
          acolytes on a far-ranging quest to cleanse it. Akkhan’s “crusaders” were
          young recruits, chosen for honor and goodness, trained in weaponry and
          flesh-scouring magics, though their most important quality was unwavering
          devotion to duty.
        </p>
        <p>
          Today, the crusaders’ focused quest for purity has broadened. Flimsy
          “containment” gives evil many opportunities to thrive, and wandering
          crusaders – often master and apprentice pairs – regularly strike down
          Sanctuary’s demons. Some fight out of righteousness; others in the hopes
          that their victories may make corrupt Zakarum whole again. When a crusader's
          master dies, their student takes up their weapons and their identity…and the
          crusade continues, even beyond death.
        </p>
      </v-flex>

      <v-layout row wrap>
        <v-flex xs1 align-end>
          <v-dialog v-model="dialog">
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
      this.$store.dispatch("getSkillDescCrus", skill.slug);
    }
  },
  created() {
    this.$store.dispatch("getSkillCrus", this.id);
  },

  computed: {
    skills() {
      return this.$store.getters.getSkillCrusName;
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
