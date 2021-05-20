import { BaseState } from './store-base';

export default {
  getBaseInformation: (state: BaseState) => () => {
    return state.var1;
  },
};
