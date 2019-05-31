<template>
  <v-container text-xs-left class="bg">
    <v-layout mt-5>
      <v-flex class="loreText" m-2>
        <p>
          For ages, the barbarians dwelling in the shadow of Mount Arreat were
          shaped to be as strong and unyielding as stone. Immense in size and
          unmatched in ferocity, they were charged from birth with a duty passed
          through generations: to protect the sacred mountain.
        </p>
        <p>
          When their homeland was shattered, many barbarians lost faith.
          They became aimless, haunted by their past, traveling from place
          to place without honor or direction.
        </p>
        <p>
          But not all barbarians have given up their vigil. Some still honor the
          snows of Arreat's summit and prowl the outskirts of its crater. They recall
          being handed axes and spears at an age when city children were clinging to
          their toys… and they burn with shame at the failure of their people.
        </p>
        <p>
          These barbarians strive to find a new purpose for themselves in a changed
          world, and they will crush any who stand in their way.
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
      this.$store.dispatch("getSkillDescBaba", skill.slug);
    }
  },
  created() {
    this.$store.dispatch("getSkillBarb", this.id);
  },

  computed: {
    skills() {
      return this.$store.getters.getSkillBarbName;
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
