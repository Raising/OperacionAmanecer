import resourceLocation from '@COMMONS/utils/conectivity/location-generator';
import { resourceParam } from '@COMMONS/utils/conectivity/location-tools';
import { ENUM, ACT, MUT, ERROR } from '@COMMONS/constants';
import Resource from '@COMMONS/utils/conectivity/resource';
import serverConection from '@COMMONS/utils/conectivity/server-conection';
import { ActionContext, Action } from 'vuex';
import { ResourceState } from './store-resource';
import { ThrowError, ErrorDescription } from '@COMMONS/utils/main/error-handler';

import router from '@COMMONS/utils/main/router';
import cookie from '@COMMONS/utils/main/cookie';

import OPS = ENUM.ConectionOperation;

const actions: { [key in ACT.Resource]: Action<ResourceState, any> } = {
  [ACT.Resource.FetchResourceCollection]: async (context, { resource, data }) => {
    return processResourceContentToStore(context, {
      resource,
      ...resourceLocation(context, { resource, verb: OPS.COLLECTION_FETCH }),
    });
  },
  [ACT.Resource.FetchResourceEntity]: async (context, { resource }) => {
    return processResourceContentToStore(context, {
      resource,
      ...resourceLocation(context, { resource, verb: OPS.ENTITY_FETCH }),
    });
  },
  [ACT.Resource.FetchGrid]: async (context, { resource, data }) => {
    return processResourceContentToStore(context, {
      resource,
      ...resourceLocation(context, { resource, verb: OPS.FETCH_GRID, data: data }),
    });
  },
  [ACT.Resource.CreateEntity]: async (context, { resource, data }) => {
    return mockeableServerConection(
      context,
      {
        resource,
        ...resourceLocation(context, { resource, verb: OPS.ENTITY_CREATE, data: data }),
      },
      ENUM.ConectionVerb.POST,
    );
  },

  [ACT.Resource.UpdateEntity]: async (context, { resource, data, merge }) => {
    let newEntityProps = Object.assign({}, merge && resource.isReady() ? resource.content() : {}, data);
    context.commit(MUT.Resource.SET_RESOURCE_CONTENT, { result: newEntityProps, resource });
    return mockeableServerConection(
      context,
      {
        resource,
        ...resourceLocation(context, { resource, verb: OPS.ENTITY_UPDATE, data: newEntityProps }),
      },
      ENUM.ConectionVerb.PUT,
    );
  },

  [ACT.Resource.DeleteEntity]: async (context, { resource, data }) => {
    return mockeableServerConection(
      context,
      {
        resource,
        ...resourceLocation(context, { resource, verb: OPS.ENTITY_DELETE, data: data }),
      },
      ENUM.ConectionVerb.DELETE,
    );
  },
  [ACT.Resource.PostServerAction]: async (context, { resource, data }) => {
    return mockeableServerConection(
      context,
      {
        resource,
        ...resourceLocation(context, { resource, verb: OPS.ACT, data: data }),
      },
      ENUM.ConectionVerb.POST,
    );
  },
};
export default actions;

type resourceResolverFunction = (
  context: ActionContext<any, any>,
  params: {
    resource: Resource;
    resourceId?: string;
    url: string;
    data: any;
    mappingFunction: Function;
    conectionVerb?: ENUM.ConectionVerb;
    mock?: any;
    endpointConfig?: resourceParam.locationConfig;
  },
  verb?: ENUM.ConectionVerb,
) => Promise<any>;

const processResourceContentToStore: resourceResolverFunction = (
  context,
  { resource, url, data, mappingFunction, conectionVerb, mock, endpointConfig },
) => {
  context.commit(MUT.Resource.SET_RESOURCE_AS_LOADING, { resource });
  let verb: ENUM.ConectionVerb = conectionVerb || ENUM.ConectionVerb.GET;

  if (url === ENUM.ResourceState.ABORT_CALL) {
    let result = mappingFunction(ENUM.ResourceState.ABORT_CALL);
    context.commit(MUT.Resource.SET_RESOURCE_CONTENT, { result, resource });
    return Promise.resolve(result);
  }

  return mockeableServerConection(context, { url, data, resource, mappingFunction, mock, endpointConfig }, verb).then(
    (result: any) => {
      context.commit(MUT.Resource.SET_RESOURCE_CONTENT, { result, resource });
      resource.resetLocalMappingCache();
      return result;
    },
  );
};

const mockeableServerConection: resourceResolverFunction = (context, requestSignature, verb?: ENUM.ConectionVerb) => {
  verb = verb || ENUM.ConectionVerb.TRACE; //hsould never get here;
  if (requestSignature.mock !== undefined) {
    return mockedResponse(context, requestSignature);
  }
  return serverConection[verb](context, requestSignature).catch((error: ErrorDescription) => {
    if (
      error.type === ERROR.Conection.ERROR_EXPIRATION_TIME ||
      error.type === ERROR.Conection.ERROR_VALIDATION_TOKEN ||
      (tokenIsExpired(error.type) && context.getters.getRoute() !== '/login')
    ) {
      context.dispatch(ACT.Session.LogOut);
      context.commit(MUT.Resource.CLEAN, { resourceId: ENUM.CommonsResource.INITIAL_LOAD });
      router.push('/login');
    } else {
      throw error;
    }
  });
};

const tokenIsExpired = (error: string) => {
  return error && error.toLowerCase() === 'error: 401';
};

const initCookies = function(initialLoad: any) {
  var expirationSessionDate = new Date().getTime() + 24 * 60 * 60 * 1000;
  cookie.set('i18next', 'es', expirationSessionDate.toString());
};

const mockedResponse: resourceResolverFunction = (
  context,
  { resource, resourceId, url, data, mappingFunction, conectionVerb, mock, endpointConfig },
) => {
  let mockValue = typeof mock === 'function' ? mock({ resource, data, url }) : mock;
  let mockResult = mappingFunction(mockValue);
  context.commit(MUT.Resource.SET_RESOURCE_CONTENT, { result: mappingFunction(mockValue), resource });
  return Promise.resolve(mockResult);
};
