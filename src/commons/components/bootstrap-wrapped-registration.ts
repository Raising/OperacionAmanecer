import Factory from '@COMMONS/utils/factory/factory';
import BootstrapWrapper from './atoms/bootstrap-wrapper.vue';
import * as BootstrapVueComponents from 'bootstrap-vue';

//load all the cmopnentes of bootstrapvue with a wrapper.
Object.keys(BootstrapVueComponents)
  .filter((prop: String) => prop.startsWith('B'))
  .filter(
    (prop: String) =>
      // @ts-ignore
      typeof BootstrapVueComponents[prop] === 'function' || typeof BootstrapVueComponents[prop].render === 'function',
  )
  .filter((name: string) => ['BModal', 'BFormInput'].indexOf(name) === -1)
  .map((prop: String) => prop.$pascalToKebabCase().substr(3))
  .map((componentName: String) => {
    return Factory.component(`ax-${componentName}`, {
      extends: BootstrapWrapper,
      name: `ax-${componentName}`,
      data: () => ({ component: `b-${componentName}` }),
    });
  });
