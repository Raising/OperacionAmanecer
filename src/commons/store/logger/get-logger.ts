import { LogEntry, LoggerState } from './store-logger';

export default {
  getErrorLog: (state: LoggerState) => () => {},

  getNotDisplayedErrorLogs: (state: LoggerState) => () => {
    return state.errorLog.filter((log: LogEntry) => !log.displayed);
  },
  getNotDisplayedServerLogs: (state: LoggerState) => () => {
    return state.serverLog.filter((log: LogEntry) => !log.displayed);
  },

  getNotDisplayedInfoLogs: (state: LoggerState) => () => {
    return state.infoLog.filter((log: LogEntry) => !log.displayed);
  },
};
