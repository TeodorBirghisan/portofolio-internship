import { createStore } from "vuex";
///import din auth model

const store = createStore({
    modules: {
      auth,
    },
});
  
export default store;