import loggerActions from '@/commons/store/logger/act-logger';
import { ACT, ERROR, MUT } from '@/commons/constants';

describe('act-logger.ts', () => {
  describe(ACT.Logger.LogError, () => {
    let commit = jest.fn((enumText, errorInfoLog) => {
      expect(enumText).toMatch(MUT.Logger.LOG_ERROR);

      if (errorDescription.stack)
        expect(errorInfoLog).toEqual({
          type: ERROR.Code.CODE_UNHANDLED,
          error: errorDescription,
          stack: errorDescription.stack,
        });
      else expect(errorInfoLog).toEqual(errorDescription);
    });

    let errorDescription: any = {};

    it('Call to logError without stack', () => {
      //@ts-ignore
      loggerActions[ACT.Logger.LogError]({ commit }, errorDescription);
    });

    errorDescription.stack = 'content';

    it('Call to logError with stack', () => {
      //@ts-ignore
      loggerActions[ACT.Logger.LogError]({ commit }, errorDescription);
    });
  });

  describe(ACT.Logger.LogInfo, () => {
    let commit = jest.fn((enumType, log) => {
      expect(enumType).toMatch(MUT.Logger.LOG_INFO);
      expect(log).toEqual(logVar);
    });

    let logVar = { logContent: 'content' };

    it('Call to logInfo', () => {
      //@ts-ignore
      loggerActions[ACT.Logger.LogInfo]({ commit }, logVar);
    });
  });

  describe(ACT.Logger.LogServer, () => {
    let commit = jest.fn((enumType, log) => {
      expect(enumType).toMatch(MUT.Logger.LOG_SERVER);
      expect(log).toEqual(logVar);
    });

    let logVar = { logContent: 'content' };

    it('Call to logServer', () => {
      //@ts-ignore
      loggerActions[ACT.Logger.LogServer]({ commit }, logVar);
    });
  });

  describe(ACT.Logger.CleanErrorsLog, () => {
    let commit = jest.fn((enumType) => {
      expect(enumType).toMatch(MUT.Logger.SET_ERRORS_AS_SHOWN);
    });

    it('Call to cleanErrorsLog', () => {
      //@ts-ignore
      loggerActions[ACT.Logger.CleanErrorsLog]({ commit });
    });
  });

  describe(ACT.Logger.CleanServerLog, () => {
    let commit = jest.fn((enumType) => {
      expect(enumType).toMatch(MUT.Logger.SET_SERVER_AS_SHOWN);
    });

    it('Call to cleanServerLog', () => {
      //@ts-ignore
      loggerActions[ACT.Logger.CleanServerLog]({ commit });
    });
  });
});
