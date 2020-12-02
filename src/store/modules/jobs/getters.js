export default {
  allJobs(state, getters, rootState) {
    const filterJobs = state.jobs.filter(job => {
      let check = rootState.jobs.filters.every(el => job.allTags.includes(el));

      return check;
    })

    return filterJobs;
  },

  filters(state) {
    return state.filters;
  }
};