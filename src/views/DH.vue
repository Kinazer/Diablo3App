<template>
  <v-container text-xs-left class="bg">
    <v-layout mt-5>
      <v-flex class="loreText" m-2>
        <p>Those who call themselves demon hunters are not a people or a nation. They owe allegiance to no king. They are but a remnant – an echo – of those who’ve lost their lives to hellspawn. When their homes are burnt and their families butchered by demons, most newly scarred refugees give up on living – but a few bury their dead, band together, and swear vengeance.</p>
        <p>Though they are small in number, hunters track and corner demons in the hopes that, if they can save even one life, their world will be better for it. At the end of a day’s hunt, most still close their eyes and have nightmares in which they see the horrors that brought them together: gore-caked claws, and men and women drowning in their own blood.</p>
        <p>Awake, demon hunters see much the same. But, now, in the present, they finally have the power to retaliate.</p>
        <p>They dare not dream of victory, or, even less likely, peace. And yet, they hunt. They can do nothing else.</p>
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
      this.$store.dispatch("getSkillDescDH", skill.slug);
    }
  },
  created() {
    this.$store.dispatch("getSkillDH", this.id);
  },

  computed: {
    skills() {
      return this.$store.getters.getSkillDHName;
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
