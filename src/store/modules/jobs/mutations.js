import { SET_JOBS } from '../../mutationTypes';

export default {
  [SET_JOBS](state, payload) {
    state.jobs = payload;
  }
};