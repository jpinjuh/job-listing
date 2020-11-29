import Api from '@/services/Api'

const jobs = {
  state: {
    jobs: []
  },
  getters: {
    jobs (state) {
      return state.jobs
    }
  },
  mutations: {
    setJobs (state, payload) {
      state.jobs = payload
    }
  },
  actions: {
    getJobs ({ commit }) {
      Api.get('data.json')
        .then((result) => {
          commit('setJobs', result.data)
        })
    }
  }
}

export default jobs