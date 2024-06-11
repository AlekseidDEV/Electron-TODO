const profile = {
  state: {
    userProfile: {
      dayNowTask: [],
      weekTask: [],
      monthTask: [],
      lists: [],
      filters: [],
      Tags: [],
      completedTask: [],
      trashTask: [],
    }
  },

  actions: {

  },

  mutations: {

  },

  getters: {
    getUserProfile(state){
      return state.userProfile
    }
  },
}

export default profile
