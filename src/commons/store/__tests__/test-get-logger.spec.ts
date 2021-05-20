import loggerGetters from '@/commons/store/logger/get-logger';
import { LogEntry, LoggerState, ErrorLogEntry } from '../logger/store-logger';

describe('get-logger.ts', () => {
  describe('getNotDisplayedErrorLogs', () => {
    it('Call', () => {
      //@ts-ignore
      let state: LoggerState = { errorLog: [{ displayed: true }, { displayed: false }] };

      expect(loggerGetters.getNotDisplayedErrorLogs(state)()).toEqual(
        state.errorLog.filter((log: ErrorLogEntry) => !log.displayed),
      );
    });
  });

  describe('getNotDisplayedServerLogs', () => {
    it('Call', () => {
      let state = { serverLog: [{ displayed: true }, { displayed: false }] };
      //@ts-ignore
      expect(loggerGetters.getNotDisplayedServerLogs(state)()).toEqual(
        //@ts-ignore
        state.serverLog.filter((log: ErrorLogEntry) => !log.displayed),
      );
    });
  });

  describe('getNotDisplayedInfoLogs', () => {
    it('Call', () => {
      let state = { infoLog: [{ displayed: true }, { displayed: false }] };

      //@ts-ignore
      expect(loggerGetters.getNotDisplayedInfoLogs(state)()).toEqual(
        //@ts-ignore
        state.infoLog.filter((log: LogEntry) => !log.displayed),
      );
    });
  });
});
