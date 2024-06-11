import {createStore} from "vuex";

import profile from "./profile";

const store = createStore({
  modules: {
    profile
  }
})

export default store

