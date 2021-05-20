// import { backendProject } from '../enum-backend';
import { ENUM } from '@COMMONS/constants';

const projectUrlMap: { [serverApp in ENUM.backendProject]?: string } = {
  [ENUM.backendProject.LOGIN]: 'https://ne-pro-mon-login',
};

export default projectUrlMap;
