import sessionActions from '@/commons/store/session/act-session';
import { ACT, ERROR, MUT } from '@/commons/constants';

import cookie from '@COMMONS/utils/main/cookie';

describe('act-session.ts', () => {
  beforeAll(() => {
    jest.spyOn(cookie, 'set').mockImplementation(() => {});
  });

  describe(ACT.Session.LogIn, () => {
    it('Call to logIn', () => {
      let functObj = {
        commit: (type: any, userSessionObject: any) => {
          expect(type).toEqual(MUT.Session.SET_SESSION);
          expect(userSessionObject).toEqual(userSessionObjectVal);
        },
        dispatch: () => {},
      };
      let userSessionObjectVal = {
        Token: 'tok1',
      };

      //@ts-ignore
      sessionActions[ACT.Session.LogIn](functObj, userSessionObjectVal);
    });
  });

  describe(ACT.Session.LogOut, () => {
    it('Call to logOut', () => {
      let functObj = {
        commit: (type: any) => {},
        dispatch: () => {},
      };

      let mockOfCommit = jest.spyOn(functObj, 'commit');

      mockOfCommit.mockImplementationOnce((type: any) => {
        expect(type).toEqual(MUT.Session.DELETE_SESSION);
      });
      mockOfCommit.mockImplementationOnce((type: any) => {
        expect(type).toEqual(MUT.RefProp.DELETE_ALL_STATE);
      });
      mockOfCommit.mockImplementationOnce((type: any) => {
        expect(type).toEqual(MUT.Resource.DELETE_ALL_STATE);
      });

      //@ts-ignore
      sessionActions[ACT.Session.LogOut](functObj);
    });
  });

  describe(ACT.Session.SaveLogInInfo, () => {
    it('Call to saveLogInInfo', () => {
      let functObj = {
        commit: (type: any, userSessionObject: any) => {
          expect(type).toEqual(MUT.Session.SET_SESSION);
          expect(userSessionObject).toEqual(userSessionObjectVal);
        },
        dispatch: () => {},
      };
      let userSessionObjectVal = {
        Token: 'tok1',
      };

      //@ts-ignore
      sessionActions[ACT.Session.SaveLogInInfo](functObj, userSessionObjectVal);
    });
  });
});
