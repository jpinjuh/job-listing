import { getData } from '@/api/index';
import types from './mutationTypes';

export default {
  getJobs({ commit }) {
    getData('data.json').then(data => {
      commit(types.SET_JOBS, data);
    });
  },

  addFilter({commit}, payload) {
    commit(types.SET_FILTERS, payload);
  },

  clearFilters({commit}) {
    commit(types.CLEAR_FILTERS);
  },

  removeFilter({commit}, payload) {
    commit(types.REMOVE_FILTER, payload);
  }
};