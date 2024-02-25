import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      count: 0
    };
  },
  getters: {
    title() {
      return 0;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
