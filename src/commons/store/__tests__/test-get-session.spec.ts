import sessionGetters from '@/commons/store/session/get-session';
import { ENUM } from '@COMMONS/constants';

describe('get-session.ts', () => {
  const currentSessionVal = { Token: 'tok1', UserName: 'userName1' };

  describe('getToken', () => {
    let state: any = {};

    it('Call to getToken without token', () => {
      //@ts-ignore
      expect(sessionGetters.getToken(state)()).toEqual(ENUM.AppState.NO_TOKEN);
    });

    it('Call to getToken with token', () => {
      state.currentSession = currentSessionVal;
      //@ts-ignore
      expect(sessionGetters.getToken(state)()).toEqual(currentSessionVal.Token);
    });
  });

  describe('userName', () => {
    let state: any = {};

    it('Call to userName without token', () => {
      //@ts-ignore
      expect(sessionGetters.userName(state)()).toEqual(ENUM.AppState.NO_TOKEN);
    });

    it('Call to userName with token', () => {
      state.currentSession = currentSessionVal;
      //@ts-ignore
      expect(sessionGetters.userName(state)()).toEqual(currentSessionVal.UserName);
    });
  });
});
