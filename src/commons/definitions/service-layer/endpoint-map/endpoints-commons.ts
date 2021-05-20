import { ENUM, RES } from '@COMMONS/constants';
import { resourceParam } from '@COMMONS/utils/conectivity/location-tools';
import { Backend } from '../backend-projects';
import OPS = ENUM.ConectionOperation;
import Resource from '@COMMONS/utils/conectivity/resource';
import { UserSesion } from '@/commons/store/session/store-session';

const mockSession: UserSesion = {
  Token: 'TOKEN-1234567890',
  UserName: 'MockUser',
};

const locations: {
  [resource in ENUM.CommonsResource | RES]?: Partial<
    { [verb in OPS]?: resourceParam.locationConfig } & { server?: string }
  >;
} = {
  [ENUM.CommonsResource.SESSION]: {
    [OPS.ACT]: {
      path: Backend.LOGIN.Login_SVC`login`,
      mock: mockSession,
    },
  },
  [ENUM.CommonsResource.PASSWORD]: {
    [OPS.ACT]: {
      path: Backend.LOGIN.Login_SVC`SendRecoveryPassword`,
    },
    [OPS.ENTITY_CREATE]: {
      path: Backend.LOGIN.Login_SVC`ResetNewPasswordNoToken`,
      conectionVerb: ENUM.ConectionVerb.PUT,
      propNameCamelType: 'upper',
    },
    [OPS.ENTITY_UPDATE]: {
      path: Backend.LOGIN.Login_SVC`ChangePassword`,
      propNameCamelType: 'upper',
    },
  },

  [ENUM.CommonsResource.PERMISSION]: {
    [OPS.ENTITY_FETCH]: {
      path: 'CommonConfiguration.UserConfiguration.Permissions',
    },
  },
};

export default locations;
