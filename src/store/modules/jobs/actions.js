import { getData } from '@/api/index';
import { SET_JOBS, SET_FILTERS, CLEAR_FILTERS, REMOVE_FILTER } from '../../mutationTypes';

export default {
  getJobs({ commit }) {
    getData('data.json').then(data => {
      commit(SET_JOBS, data);
    });
  },

  addFilter({commit}, payload) {
    commit(SET_FILTERS, payload);
  },

  clearFilters({commit}) {
    commit(CLEAR_FILTERS);
  },

  removeFilter({commit}, payload) {
    commit(REMOVE_FILTER, payload);
  }
};