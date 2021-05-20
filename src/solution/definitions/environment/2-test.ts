//import { backendProject } from '../enum-backend';
import { ENUM } from '@COMMONS/constants'; // '../enum-backend';
const projectUrlMap: { [serverApp in ENUM.backendProject]?: string } = {
  [ENUM.backendProject.LOGIN]: '//ne-test-mon-search',
};

export default projectUrlMap;
