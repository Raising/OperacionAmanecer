import Vue from 'vue';

import AutoRefProp, { RefPropConfig } from './auto-referenced-prop';
import AutoRouter, { autoRouterConfig } from './auto-router';
import AutoPermission from './auto-permision';
import { initResources } from './auto-resource';
import Resource, { resourceConfig } from '@COMMONS/utils/conectivity/resource';

import { RefProp } from '../form/store-referenced-property';

export interface axViewDescription {
  mounted?: any;
  data?: any;
  autoRouter?: autoRouterConfig;
  name: string;
  resources?: { [key: string]: resourceConfig };
  refProps?: (string | RefPropConfig)[];
  computed?: { [name: string]: any };
  secontaryId?: string;
  keepAlive?: boolean;
  [prop: string]: any;
}

interface axComponentDescription {
  resources?: { [key: string]: resourceConfig };
  data?: any;
  secontaryId?: string;
  [prop: string]: any;
}

const customFactory: {
  view: (config: axViewDescription) => any;
  component: (name: string, config: axComponentDescription) => any;
} = Object.create(Vue);

customFactory.view = (viewDescription: axViewDescription) => {
  const navigationNode = AutoRouter(viewDescription);
  AutoPermission(viewDescription);
  AutoRefProp(viewDescription);
  initResources(viewDescription);

  const view = Vue.extend(viewDescription);

  if (navigationNode !== undefined) navigationNode.setviewConstructor(view);
  return Object.assign(view, {
    navigation: navigationNode,
  });
};

customFactory.component = (name: string, componentDescription: Partial<axComponentDescription>) => {
  let description: axViewDescription = { ...componentDescription, name: name.$autoId() };
  initResources(description);
  AutoRefProp(description);
  return Vue.component(name, description);
};

interface VueView extends Vue {
  resource: { [key: string]: Resource };
  refProp: { [key: string]: RefProp };
  $bvModal: any;
  $refs: { [key: string]: VueView };
  [viewDefinedProp: string]: any;
}

export default customFactory;
export { VueView };
