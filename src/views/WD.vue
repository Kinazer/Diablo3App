<template>
  <v-container text-xs-left class="bg">
    <v-layout mt-5>
      <v-flex class="loreText" m-2>
        <p>
          Only a select few men and women among the umbaru tribes can ascend to
          the hallowed role of witch doctor, for they must possess both a
          history of battle and a talent for communing with spirits. The latter
          ability belongs solely to those born with the touch of the Unformed
          Land – the invisible realm where the umbaru believe the spirits of the
          dead dwell once they have left Sanctuary behind.
        </p>
        <p>
          When a man dies, witch doctors feel what they suspect is the breath of
          life leaving his cooling body. And, when calamity or genocide sends
          hundreds to their graves at once, witch doctors can sense their
          trembling and shrieking from beyond.
        </p>
        <p>
          Witch doctors cannot cover their ears to the voices of the spirits. As
          the sounds of disquiet grow louder, their choice is made. They must
          restore the balance between their world and the Unformed Land, or
          watch the torment of generations past for the rest of their lives… and
          forever after.
        </p>
      </v-flex>

      <v-layout row wrap>
        <v-flex xs12>
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
                  />
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
      this.$store.dispatch("getSkillDesc", skill.slug);
    }
  },
  created() {
    this.$store.dispatch("getSkillType", this.id);
  },

  computed: {
    skills() {
      return this.$store.getters.getSkillTypeName;
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
