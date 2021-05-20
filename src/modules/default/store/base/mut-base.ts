import Vue from 'vue';
import { MUT } from '@DEFAULT/constants';
import { BaseState } from './store-base';

const mutations: { [mutation in MUT.Base]: any } = {
  [MUT.Base.MUT_1]: (state: BaseState, newValue: number) => {
    Vue.set(state, 'var1', newValue);
  },
};

export default mutations;
