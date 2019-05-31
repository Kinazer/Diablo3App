<template>
  <v-container text-xs-left class="bg">
    <v-layout mt-5>
      <v-flex class="loreText" m-2>
        <p>
          The Priests of Rathma—also known as Necromancers—live and die
          by a simple philosophy: that the eternal struggle between light
          and darkness is never-ending, and that Sanctuary is threatened
          by both sides of that war. Only by preserving the balance and
          keeping those opposing forces at bay, one can hope to make the
          world a better place.
        </p>
        <p>
          Members of this order are unique , and often reviled for their
          use of death magic. Though such power is often abused in
          Sanctuary, the Priests of Rathma strive to use it to preserve
          to the Balance they hold sacred.
        </p>
        <p>
          When they do venture out from their home deep within the jungles
          of Kehjistan, roving Priests of Rathma do whatever it takes to
          safeguard their world from ruin.
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
      this.$store.dispatch("getSkillDescNecro", skill.slug);
    }
  },
  created() {
    this.$store.dispatch("getSkillNecro", this.id);
  },

  computed: {
    skills() {
      return this.$store.getters.getSkillNecroName;
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
