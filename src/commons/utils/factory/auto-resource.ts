import { axViewDescription } from '@COMMONS/utils/factory/factory';
import Resource, { resourceConfig } from '../conectivity/resource';
var InitializedSingletonResources: { [name: string]: Resource } = {};

const initResources = (viewDescription: Partial<axViewDescription>) => {
  if (viewDescription.resources !== undefined) {
    let resourceConfig = viewDescription.resources;
    let resourceIds: { [resourceType: string]: string } = {};
    //create Resource Object and place them In a object
    let resources = function(component: any) {
      return Object.keys(resourceConfig).reduce((acc: { [name: string]: Resource }, resourcekey: string) => {
        let name = resourceConfig[resourcekey].name || resourcekey;
        resourceConfig[resourcekey].keepAlive = viewDescription.keepAlive;
        if (
          !resourceConfig[resourcekey].singleton ||
          InitializedSingletonResources[resourceConfig[resourcekey].type] === undefined
        ) {
          InitializedSingletonResources[resourcekey] = acc[name];
          acc[name] = new Resource(
            resourceConfig[resourcekey],
            component,
            name,
            viewDescription.keepAlive ? resourceIds[name] : undefined,
          );
          if (resourceConfig[resourcekey].singleton) {
            InitializedSingletonResources[resourceConfig[resourcekey].type] = acc[name];
          }
        } else {
          acc[name] = InitializedSingletonResources[resourceConfig[resourcekey].type];
        }
        resourceIds[name] = acc[name].id;
        return acc;
      }, {});
    };

    //add the resource object to the data of the view to have access to it
    //under resources.RES_NAME
    viewDescription.data = (viewDescription.data || {}).$functionObjectAgregation('resource', resources);
  }
};

const insertResourceInViewInstance = (context: any, newResources: { [key: string]: any }) => {
  let resourcesInstances: { [key: string]: any } = {};

  Object.keys(newResources).forEach((resourceKey: string) => {
    resourcesInstances[resourceKey] = new Resource(newResources[resourceKey], context);
  });
  context.resources = resourcesInstances;
};

export { initResources, insertResourceInViewInstance, InitializedSingletonResources };
