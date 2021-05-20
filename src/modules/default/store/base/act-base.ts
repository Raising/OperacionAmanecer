import { BaseState } from './store-base';

import { ACT, MUT } from '@DEFAULT/constants';
import { Action } from 'vuex';

const actions: { [key in ACT.Base]: Action<BaseState, any> } = {
  [ACT.Base.Action1]: async ({ commit }, params: any) => {
    return commit(MUT.Base.MUT_1, {});
  },
};

export default actions;
