import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url:
      "https://us.api.blizzard.com/d3/data/hero/witch-doctor?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    urlSkill1: "https://us.api.blizzard.com/d3/data/hero/witch-doctor/skill/",
    urlSkill2: "?locale=en_US&access_token=US6aNqaBDuFr0bsPxKdCgl83RJyiSROhnW",
    skillType: [],
    skillDesc: []
  },
  mutations: {
    setSkillType(state, data) {
      state.skillType = data;
    },
    setSkillDesc(state, desc) {
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

    getSkillDesc(context, skill) {
      fetch(context.state.urlSkill1 + skill + context.state.urlSkill2)
        .then(descript => descript.json())
        .then(desc => {
          console.log(desc);
          context.commit("setSkillDesc", desc);
        });
    }
  },
  getters: {
    getSkillTypeName(state) {
      return state.skillType;
    },
    getSkillDescName(state) {
      return state.skillDesc;
    }
  }
});
