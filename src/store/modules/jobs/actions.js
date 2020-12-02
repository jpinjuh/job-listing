import { getData } from '@/api/index';
import { SET_JOBS } from '../../mutationTypes';

export default {
  getJobs({ commit }) {
    getData('data.json').then(data => {
      commit(SET_JOBS, data);
    });
  }
};