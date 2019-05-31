<template>
  <v-container text-xs-left class="bg">
    <v-layout mt-5>
      <v-flex class="loreText" m-2>
        <p>Magic-users hail from academies throughout Sanctuary – from Xiansai to Caldeum – bearing monikers like "sorcerer" and "mage," but those who would refer to themselves with the derogatory epithet "wizard" are as similar to their fellow spellcasters as a lion is to a kitten. Wizards and sorcerers both wield the hidden mysteries of the arcane; there, the commonalities end.</p>
        <p>Wizards are known for a number of qualities: not only rebelliousness and flair, but also disdain for the endless lessons and prattling about caution and safety that echo from academic schools of magic. Wizards’ superior attitudes seem to stem from their natural talent – their ability to wrestle the ambient force of magic into submission and direct it to their ends by will and instinct. Any accidents that might occur due to their lack of finesse are unfortunate…but that rarely stops wizards from indulging in their unstable power.</p>
        <p>If they can only master their double-edged gift and avoid destroying themselves, these upstart arcane prodigies may be able to finally reach the destiny that they see on the horizon.</p>
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
      this.$store.dispatch("getSkillDescWiz", skill.slug);
    }
  },
  created() {
    this.$store.dispatch("getSkillWiz", this.id);
  },

  computed: {
    skills() {
      return this.$store.getters.getSkillWizName;
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
