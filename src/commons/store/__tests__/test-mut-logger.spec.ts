import loggerMutations from '@/commons/store/logger/mut-logger';
import { ERROR, MUT } from '@/commons/constants';

describe('mut-logger.ts', () => {
  describe(MUT.Logger.LOG_ERROR, () => {
    let state = { errorLog: [] };

    let errorDescription = {
      type: 'typeVal',
      error: 'errorVal',
      stack: 'stackVal',
    };

    let hopedObj = {
      type: errorDescription.type,
      error: errorDescription.error,
      stack: errorDescription.stack,
      time: new Date().getTime().toString(),
      displayed: false,
    };

    it('Call to logError', () => {
      //@ts-ignore
      loggerMutations[MUT.Logger.LOG_ERROR](state, errorDescription);

      const returnedObj: any = state.errorLog[0];

      expect(returnedObj.type).toBe(hopedObj.type);
      expect(returnedObj.error).toBe(hopedObj.error);
      expect(returnedObj.displayed).toBe(hopedObj.displayed);
    });
  });

  describe(MUT.Logger.LOG_SERVER, () => {
    let state = { serverLog: [] };

    let log = {
      resourceId: 'resourceIdVal',
      verb: 'verbVal',
      type: 'typeVal',
    };

    let hopedObj = {
      resourceId: log.resourceId,
      verb: log.verb,
      type: log.type,
      time: new Date().getTime().toString(),
      displayed: false,
    };

    it('Call to logServer', () => {
      //@ts-ignore
      loggerMutations[MUT.Logger.LOG_SERVER](state, log);

      const returnedObj: any = state.serverLog[0];

      expect(returnedObj.resourceId).toBe(hopedObj.resourceId);
      expect(returnedObj.verb).toBe(hopedObj.verb);
      expect(returnedObj.type).toBe(hopedObj.type);
      expect(returnedObj.displayed).toBe(hopedObj.displayed);
    });
  });

  describe(MUT.Logger.LOG_INFO, () => {
    it('Call to logInfo', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      loggerMutations[MUT.Logger.LOG_INFO]();
      expect(consoleSpy).toHaveBeenCalled();
    });
  });

  describe(MUT.Logger.SET_ERRORS_AS_SHOWN, () => {
    let state = { errorLog: [{ displayed: false }] };

    it('Call to setErrorsAsShown', () => {
      loggerMutations[MUT.Logger.SET_ERRORS_AS_SHOWN](state);
      expect(state.errorLog[0].displayed).toBeTruthy();
    });
  });

  describe(MUT.Logger.SET_SERVER_AS_SHOWN, () => {
    let state = { serverLog: [{ displayed: false }] };

    it('Call to setServersAsShown', () => {
      loggerMutations[MUT.Logger.SET_SERVER_AS_SHOWN](state);
      expect(state.serverLog[0].displayed).toBeTruthy();
    });
  });
});
