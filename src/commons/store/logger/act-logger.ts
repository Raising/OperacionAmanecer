import { LogDescription, LoggerState } from './store-logger';

import { ACT, MUT, ERROR } from '@COMMONS/constants';
import { Action } from 'vuex';
import { ErrorDescription } from '@COMMONS/utils/main/error-handler';
import { ENUM } from '@COMMONS/constants';

const actions: { [key in ACT.Logger]: Action<LoggerState, any> } = {
  [ACT.Logger.LogError]: async ({ commit }, errorDescription: ErrorDescription | Error) => {
    let errorInLogFormat: any;
    //@ts-ignore
    if (errorDescription.stack !== undefined) {
      errorInLogFormat = {
        type: ERROR.Code.CODE_UNHANDLED,
        error: errorDescription,
        stack: errorDescription.stack,
      };
    } else {
      errorInLogFormat = errorDescription;
    }
    return commit(MUT.Logger.LOG_ERROR, errorInLogFormat);
  },
  [ACT.Logger.LogInfo]: async ({ commit }, log: LogDescription) => {
    return commit(MUT.Logger.LOG_INFO, log);
  },
  [ACT.Logger.LogServer]: async ({ commit }, log: LogDescription) => {
    return commit(MUT.Logger.LOG_SERVER, log);
  },
  [ACT.Logger.CleanErrorsLog]: async ({ commit, state }) => {
    return commit(MUT.Logger.SET_ERRORS_AS_SHOWN);
  },
  [ACT.Logger.CleanServerLog]: async ({ commit, state }) => {
    return commit(MUT.Logger.SET_SERVER_AS_SHOWN);
  },
};

export default actions;
