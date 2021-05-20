import sessionMutations from '@/commons/store/session/mut-session.ts';
import { MUT } from '@COMMONS/constants';
import Vue from 'vue';

describe('mut-session.ts', () => {
  describe(MUT.Session.SET_SESSION, () => {
    it('Call to setSession', () => {
      let stateVal = { elState1: 'valState1' };
      let userSesionVal = { userName: 'userName1' };

      jest.spyOn(Vue, 'set').mockImplementation((state, sessionType, userSesion) => {
        expect(state).toBe(stateVal);
        expect(sessionType).toEqual('currentSession');
        expect(userSesion).toBe(userSesionVal);
      });
      //@ts-ignore
      sessionMutations[MUT.Session.SET_SESSION](stateVal, userSesionVal);
    });
  });

  describe(MUT.Session.DELETE_SESSION, () => {
    it('Call to deleteSession', () => {
      let stateVal = { elState1: 'valState1' };
      let userSesionVal = { userName: 'userName1' };

      jest.spyOn(Vue, 'set').mockImplementation((state, sessionType, userSesion) => {
        expect(state).toBe(stateVal);
        expect(sessionType).toEqual('currentSession');
        expect(userSesion).toEqual({});
      });
      //@ts-ignore
      sessionMutations[MUT.Session.DELETE_SESSION](stateVal, userSesionVal);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
