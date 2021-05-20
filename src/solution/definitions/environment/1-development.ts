import { ENUM } from '@COMMONS/constants'; // '../enum-backend';

const projectUrlMap: { [serverApp in ENUM.backendProject]?: string } = {
  [ENUM.backendProject.LOGIN]: 'https://ne-dev-mon-login',
  [ENUM.backendProject.FLOW_DEFINITION_SERVER]: 'http://localhost:8000',
};

export default projectUrlMap;
