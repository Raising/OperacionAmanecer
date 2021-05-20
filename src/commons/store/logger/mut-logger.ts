import Vue from 'vue';
import { ENUM, MUT, ERROR } from '@COMMONS/constants';
import { LogDescription, LoggerState } from './store-logger';
import { ErrorDescription } from '@COMMONS/utils/main/error-handler';

const mutations: { [mutation in MUT.Logger]: any } = {
  [MUT.Logger.LOG_ERROR]: (state: LoggerState, errorDescription: ErrorDescription) => {
    state.errorLog.push({
      type: errorDescription.type,
      error: errorDescription.error,
      stack: errorDescription.stack,
      time: new Date().getTime().toString(),
      displayed: false,
    });
  },
  [MUT.Logger.LOG_SERVER]: (state: LoggerState, log: LogDescription) => {
    state.serverLog.push({
      resourceId: log.resourceId,
      verb: log.verb,
      type: log.type,

      time: new Date().getTime().toString(),
      displayed: false,
    });
  },
  [MUT.Logger.LOG_INFO]: (state: LoggerState, log: LogDescription) => {
    console.error(ERROR.Code.NOT_IMPLEMENTED);
  },

  [MUT.Logger.SET_ERRORS_AS_SHOWN]: (state: LoggerState) => {
    state.errorLog
      .filter((log) => log.displayed === false)
      .map((log) => {
        log.displayed = true;
      });
  },
  [MUT.Logger.SET_SERVER_AS_SHOWN]: (state: LoggerState) => {
    state.serverLog
      .filter((log) => log.displayed === false)
      .map((log) => {
        log.displayed = true;
      });
  },
};

export default mutations;
