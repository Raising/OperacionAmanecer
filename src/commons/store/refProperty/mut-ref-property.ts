import Vue from 'vue';
import { MUT } from '@COMMONS/constants';
import { Mutation } from 'vuex';

interface PairValuePath {
  path: string;
  value: any;
}

const mutations: { [mutation in MUT.RefProp]: Mutation<any> } = {
  [MUT.RefProp.DELETE_ALL_STATE]: (state: any, param: {}) => {
    Object.keys(state).forEach((stateProp) => {
      delete state[stateProp];
    });
  },
  [MUT.RefProp.CLEAR]: (state: any, param: { viewName: string }) => {
    delete state[param.viewName];
  },
  [MUT.RefProp.SET_FIELD]: (state: any, valuePath: PairValuePath) => insertValueInStoreByPath(state, valuePath),
  [MUT.RefProp.SET_FORM_FIELDS]: (state: any, valuePathDefinitions: PairValuePath[]) => {
    (valuePathDefinitions || []).map((valuePath) => insertValueInStoreByPath(state, valuePath));
  },
  [MUT.RefProp.SET_PROPS_COLLECTION]: (
    state: any,
    { path, props, overwrite }: { path: string; props: any; overwrite: boolean },
  ) => {
    if (state.$getPropertyByPath(path) === undefined) {
      Vue.set(state, path, props);
    } else {
      if (overwrite) {
        Vue.set(state, path, { ...state.$getPropertyByPath(path), ...props });
      } else {
        Vue.set(state, path, { ...props, ...state.$getPropertyByPath(path) });
      }
    }

    return state;
  },
};

export default mutations;

const insertValueInStoreByPath = (state: any, { path, value }: PairValuePath) => {
  path.split(/[.[\]]+/).reduce(
    function(prev, key, index, array) {
      if (array.length === index + 1) {
        if (prev[key] === undefined) {
          Vue.set(prev, key, value);
        } else {
          // eslint-disable-next-line no-param-reassign
          prev[key] = value;
        }
      } else if (prev[key] === undefined) {
        Vue.set(prev, key, {}); //create object keeping it reactive
      }
      return prev[key];
    },

    state,
  );
};
