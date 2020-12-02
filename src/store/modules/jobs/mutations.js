import { SET_JOBS, SET_FILTERS, CLEAR_FILTERS, REMOVE_FILTER } from '../../mutationTypes';

export default {
  [SET_JOBS](state, payload) {
    payload.forEach(el => {
      const { role, level, languages, tools, postedAt, contract, location } = el;

      // allTags contains all possible tags of one job
      el.allTags = [ role, level, ...languages, ...tools ];

      // every job has breadcrumbs: when is posted; type of contract; location
      el.breadcrumbs = [
        {text: postedAt},
        {text: contract},
        {text: location}
      ];
    });

    state.jobs = payload;
  },

  [SET_FILTERS](state, payload) {
    // if filter isn't in array push it
    if(!state.filters.includes(payload)) {
      state.filters.push(payload);
    }
  },

  [CLEAR_FILTERS](state) {
    state.filters = [];
  },

  [REMOVE_FILTER](state, payload) {
    state.filters.splice(payload, 1);
  }
};