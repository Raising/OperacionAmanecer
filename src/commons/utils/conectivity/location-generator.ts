import { EndPoints } from '@SOLUTION/current-project';
import { defaultFilterToQueryParser, defaultPropsToQueryParser, resourceParam } from './location-tools';
import { ENUM, ERROR, ACT } from '@COMMONS/constants';
import { ActionContext } from 'vuex';
import { ThrowError } from '../main/error-handler';
import { isUndefined } from 'util';

const locations: any = EndPoints;

const createLocation = (resourceVerb: resourceParam.locationConfig, queryData: resourceParam.locationQuery) => {
  let path = resourceVerb.path;
  let pathPropsParser = resourceVerb.pathPropsParser || defaultPropsToQueryParser;
  let queryFilterParser = resourceVerb.queryFilterParser || defaultFilterToQueryParser;
  path = pathPropsParser(path, queryData);
  path = queryFilterParser(path, queryData);

  return path;
};
const NO_MAP = (el: any) => el;

export default (context: ActionContext<any, any>, locationQuery: resourceParam.locationQuery) => {
  let { resource, verb, data } = locationQuery;

  let resourceConfig = locations[resource.type];

  if (resourceConfig !== undefined) {
    let resVerb: resourceParam.locationConfig = resourceConfig[verb];
    if (resVerb !== undefined) {
      return {
        url: createLocation(resVerb, locationQuery),
        data: resVerb.formatSendData === undefined ? data : resVerb.formatSendData(resource)(data),
        mappingFunction: resVerb.mapResult === undefined ? NO_MAP : resVerb.mapResult(resource),
        conectionVerb: resVerb.conectionVerb,
        mock: resVerb.mock,
        endpointConfig: resVerb,
      };
    }
  }

  ThrowError(ERROR.Resource.NOT_DEFINED_LOCATION, new Error(`${resource.type} does not have '${verb}' defined`));
  return {
    url: ERROR.Resource.NOT_DEFINED_LOCATION,
    data: {},
    mappingFunction: NO_MAP,
    conectionVerb: resourceConfig[verb],
  };
};
