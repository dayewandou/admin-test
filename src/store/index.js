import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//element-ui
const state={
  //此处只存储数据
  num:1,
  sendList:{
    zimogod:['悟空','白龙马','悟能','唐僧']
  }
};
const actions={

};
const mutations={
  changeName(state) {
    this.state.sendList.zimogod += '小柯基';
  },
  add(state){
    state.num++;
  }
};
const setters={

};
const getters={

};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  setters,
  getters
});
