import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stateUserData: {
      sex: "",
      birthyear: "",
      birthmonth: "",
    },
    stateAnswerData: {
      question1: '',
      question2: '',
      question3: '',
    },
    stateFreeFormatData: {
      freeFormat: ''
    },
  },
  getters: {
    getterUserData: state => {
      return state.stateUserData;
    },
    getterAnswerData: state => {
      return state.stateAnswerData;
    },
    getterFreeFormatData: state => {
      return state.stateFreeFormatData;
    },
  }
})