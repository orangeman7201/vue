import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      sex: "",
      birthyear: "",
      birthmonth: "",
    },
    answerData: {
      question1: '',
      question2: '',
      question3: '',
    },
    freeFormatData: {
      freeFormat: ''
    },
  }
})