import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url:
      "https://us.api.blizzard.com/d3/data/hero/witch-doctor?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    urlBarb:
      "https://us.api.blizzard.com/d3/data/hero/barbarian?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    urlNecro:
      "https://us.api.blizzard.com/d3/data/hero/necromancer?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    urlMonk:
      "https://us.api.blizzard.com/d3/data/hero/monk?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    urlCrus:
      "https://us.api.blizzard.com/d3/data/hero/crusader?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    urlDH:
      "https://us.api.blizzard.com/d3/data/hero/demon-hunter?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    urlWiz:
      "https://us.api.blizzard.com/d3/data/hero/wizard?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",

    urlSkill1: "https://us.api.blizzard.com/d3/data/hero/witch-doctor/skill/",
    urlSkill1baba: "https://us.api.blizzard.com/d3/data/hero/barbarian/skill/",
    urlSkill1necro:
      "https://us.api.blizzard.com/d3/data/hero/necromancer/skill/",
    urlSkill1monk: "https://us.api.blizzard.com/d3/data/hero/monk/skill/",
    urlSkill1crus: "https://us.api.blizzard.com/d3/data/hero/crusader/skill/",
    urlSkill1dh: "https://us.api.blizzard.com/d3/data/hero/demon-hunter/skill/",
    urlSkill1wiz: "https://us.api.blizzard.com/d3/data/hero/wizard/skill/",

    urlSkill2: "?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    skillType: [],
    skillDesc: []
  },
  mutations: {
    setSkillType(state, data) {
      state.skillType = data;
    },
    setSkillBarb(state, data) {
      state.skillType = data;
    },
    setSkillNecro(state, data) {
      state.skillType = data;
    },
    setSkillWiz(state, data) {
      state.skillType = data;
    },
    setSkillMonk(state, data) {
      state.skillType = data;
    },
    setSkillDH(state, data) {
      state.skillType = data;
    },
    setSkillCrus(state, data) {
      state.skillType = data;
    },
    setSkillDesc(state, desc) {
      state.skillDesc = desc;
    },
    setSkillDescNecro(state, desc) {
      state.skillDesc = desc;
    },
    setSkillDescCrus(state, desc) {
      state.skillDesc = desc;
    },
    setSkillDescWiz(state, desc) {
      state.skillDesc = desc;
    },
    setSkillDescMonk(state, desc) {
      state.skillDesc = desc;
    },
    setSkillDescDH(state, desc) {
      state.skillDesc = desc;
    },
    setSkillDescBaba(state, desc) {
      state.skillDesc = desc;
    }
  },
  actions: {
    getSkillType(context) {
      fetch(context.state.url)
        .then(json => json.json())
        .then(data => {
          context.commit("setSkillType", data);
        });
    },
    getSkillBarb(context) {
      fetch(context.state.urlBarb)
        .then(baba => baba.json())
        .then(data => {
          context.commit("setSkillBarb", data);
        });
    },
    getSkillCrus(context) {
      fetch(context.state.urlCrus)
        .then(crus => crus.json())
        .then(data => {
          context.commit("setSkillCrus", data);
        });
    },
    getSkillWiz(context) {
      fetch(context.state.urlWiz)
        .then(wiz => wiz.json())
        .then(data => {
          context.commit("setSkillWiz", data);
        });
    },
    getSkillDH(context) {
      fetch(context.state.urlDH)
        .then(dh => dh.json())
        .then(data => {
          context.commit("setSkillDH", data);
        });
    },
    getSkillMonk(context) {
      fetch(context.state.urlMonk)
        .then(monk => monk.json())
        .then(data => {
          context.commit("setSkillMonk", data);
        });
    },
    getSkillNecro(context) {
      fetch(context.state.urlNecro)
        .then(necro => necro.json())
        .then(data => {
          context.commit("setSkillNecro", data);
        });
    },
    getSkillDesc(context, skill) {
      fetch(context.state.urlSkill1 + skill + context.state.urlSkill2)
        .then(descript => descript.json())
        .then(desc => {
          console.log(desc);
          context.commit("setSkillDesc", desc);
        });
    },
    getSkillDescNecro(context, skill) {
      fetch(context.state.urlSkill1necro + skill + context.state.urlSkill2)
        .then(descript => descript.json())
        .then(desc => {
          console.log(desc);
          context.commit("setSkillDescNecro", desc);
        });
    },
    getSkillDescWiz(context, skill) {
      fetch(context.state.urlSkill1wiz + skill + context.state.urlSkill2)
        .then(descript => descript.json())
        .then(desc => {
          console.log(desc);
          context.commit("setSkillDescWiz", desc);
        });
    },
    getSkillDescDH(context, skill) {
      fetch(context.state.urlSkill1dh + skill + context.state.urlSkill2)
        .then(descript => descript.json())
        .then(desc => {
          console.log(desc);
          context.commit("setSkillDescDH", desc);
        });
    },
    getSkillDescMonk(context, skill) {
      fetch(context.state.urlSkill1monk + skill + context.state.urlSkill2)
        .then(descript => descript.json())
        .then(desc => {
          console.log(desc);
          context.commit("setSkillDescMonk", desc);
        });
    },
    getSkillDescCrus(context, skill) {
      fetch(context.state.urlSkill1crus + skill + context.state.urlSkill2)
        .then(descript => descript.json())
        .then(desc => {
          console.log(desc);
          context.commit("setSkillDescCrus", desc);
        });
    },
    getSkillDescBaba(context, skill) {
      fetch(context.state.urlSkill1baba + skill + context.state.urlSkill2)
        .then(descript => descript.json())
        .then(desc => {
          console.log(desc);
          context.commit("setSkillDescBaba", desc);
        });
    }
  },
  getters: {
    getSkillTypeName(state) {
      return state.skillType;
    },
    getSkillBarbName(state) {
      return state.skillType;
    },
    getSkillNecroName(state) {
      return state.skillType;
    },
    getSkillMonkName(state) {
      return state.skillType;
    },
    getSkillDHName(state) {
      return state.skillType;
    },
    getSkillWizName(state) {
      return state.skillType;
    },
    getSkillCrusName(state) {
      return state.skillType;
    },
    getSkillDescName(state) {
      return state.skillDesc;
    },
    getSkillDescNameNecro(state) {
      return state.skillDesc;
    },
    getSkillDescNameMonk(state) {
      return state.skillDesc;
    },
    getSkillDescNameCrus(state) {
      return state.skillDesc;
    },
    getSkillDescNameWiz(state) {
      return state.skillDesc;
    },
    getSkillDescNameDH(state) {
      return state.skillDesc;
    },
    getSkillDescNameBaba(state) {
      return state.skillDesc;
    }
  }
});
