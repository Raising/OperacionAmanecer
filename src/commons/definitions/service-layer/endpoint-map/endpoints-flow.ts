import { ENUM, RES } from '@COMMONS/constants';
import { resourceParam } from '@COMMONS/utils/conectivity/location-tools';
import { Backend } from '../backend-projects';
import OPS = ENUM.ConectionOperation;
import Resource from '@COMMONS/utils/conectivity/resource';
import { UserSesion } from '@/commons/store/session/store-session';

const locations: {
  [resource in ENUM.CommonsResource | RES]?: Partial<
    { [verb in OPS]?: resourceParam.locationConfig } & { server?: string }
  >;
} = {
  [ENUM.CommonsResource.FLOW_GRAPH]: {
    [OPS.ENTITY_FETCH]: {
      path: Backend.FLOW_DEFINITION_SERVER.Flow`game/:gameId/flow/:flowId`,
    },
    [OPS.COLLECTION_FETCH]: {
      path: Backend.FLOW_DEFINITION_SERVER.Flow`game/:gameId`,
    },
    [OPS.ENTITY_UPDATE]: {
      path: Backend.FLOW_DEFINITION_SERVER.Flow`game/:gameId/flow/:flowId`,
    },
  },
};
export { locations };
export default locations;
