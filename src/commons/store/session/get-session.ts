import { ENUM } from '@COMMONS/constants';
import { SessionState } from './store-session';

export default {
  getToken: (state: SessionState) => () => (state.currentSession || { Token: ENUM.AppState.NO_TOKEN }).Token,
  userName: (state: SessionState) => () => (state.currentSession || { UserName: ENUM.AppState.NO_TOKEN }).UserName,
};
