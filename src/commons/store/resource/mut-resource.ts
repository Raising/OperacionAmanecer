import Vue from 'vue';
import { ENUM, MUT, RES } from '@COMMONS/constants';
import { resourceParam } from '@COMMONS/utils/conectivity/location-tools';
import Resource from '@COMMONS/utils/conectivity/resource';
import { Mutation } from 'vuex';
import { ResourceState } from './store-resource';

const mutations: { [mutation in MUT.Resource]: Mutation<ResourceState> } = {
  [MUT.Resource.DELETE_ALL_STATE]: (state, param: {}) => {
    Object.keys(state).forEach((stateProp) => {
      Vue.set(state, stateProp, {});
    });
  },

  [MUT.Resource.SET_RESOURCE_CONTENT]: (
    state,
    { result, resource, freeze = true }: { result: any; resource: Resource; freeze: boolean },
  ) => {
    if (resource.mainProperty !== '') {
      const propValue = resource.refProps[resource.mainProperty].get();
      if (state.loaded[resource.id] === undefined) {
        Vue.set(state.loaded, resource.id, {});
      }
      Vue.set(state.loaded[resource.id], propValue || 'NoValue', freeze ? Object.freeze(result) : result);
    } else {
      Vue.set(state.loaded, resource.id, freeze ? Object.freeze(result) : result);
    }

    return state;
  },

  [MUT.Resource.SET_RESOURCE_AS_LOADING]: (state, { resource }: { resource: Resource }) => {
    if (resource.mainProperty !== '') {
      const propValue = resource.refProps[resource.mainProperty].get();
      if (state.loaded[resource.id] === undefined) {
        Vue.set(state.loaded, resource.id, {});
      }
      Vue.set(state.loaded[resource.id], propValue || 'NoValue', ENUM.ResourceState.LOADING);
    } else {
      Vue.set(state.loaded, resource.id, ENUM.ResourceState.LOADING);
    }

    return state;
  },

  [MUT.Resource.CLEAN]: (state, { resourceId }: { resourceId: string }) => {
    delete state.loaded[resourceId];
    return state;
  },

  [MUT.Resource.CLEAN_ALL]: (state) => {
    Vue.set(state, 'loaded', {});
    return state;
  },
};

export default mutations;
