import Vue from 'vue';
import Vuex, { ActionContext, Module, Store } from 'vuex';

import CommonsStoreModules from '@COMMONS/store/hub-store';
import { StoreModules as CurrentProjectStoreModules } from '@SOLUTION/current-project';

const StoreModules = {
  ...CommonsStoreModules,
  ...CurrentProjectStoreModules,
};

import { ActionErrorHandler } from '@COMMONS/utils/main/error-handler';

Vue.use(Vuex);

const addWrappers = (storeModule: Module<any, any>) => {
  storeModule.actions = (storeModule.actions || []).$map(addErrorWrapperToAction);
  return storeModule;
};

const addErrorWrapperToAction = (action: any) => (context: ActionContext<AnalyserNode, any>, ...args: any[]) => {
  return action(context, ...args).catch((error: any) => {
    ActionErrorHandler(context, error, args);
    console.error(error);
    throw error;
  });
};

const store = new Vuex.Store({ modules: StoreModules.$map(addWrappers) });

export default (init?: boolean): Store<any> => {
  if (init) {
    Object.values(StoreModules).forEach((module: any) => {
      if (module.init) {
        module.init(store);
      }
    });
  }
  return store;
};

const RegisterWrappedModule = (moduleName: string, storeModule: Module<any, any>) =>
  store.registerModule(moduleName, addWrappers(storeModule));

export { RegisterWrappedModule };
