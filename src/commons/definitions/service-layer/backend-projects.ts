import { ENUM } from '@COMMONS/constants';

import DEV from '@SOLUTION/definitions/environment/1-development';
import TEST from '@SOLUTION/definitions/environment/2-test';
import PRE from '@SOLUTION/definitions/environment/3-pre';
import PRO from '@SOLUTION/definitions/environment/4-pro';

const enviroments = { DEV, TEST, PRO, PRE };

export const GetServerAppPath = (serverProjectId: ENUM.backendProject) => {
  //@ts-ignore
  let enviroment = enviroments[process.env.NODE_ENV || 'DEV'];
  return enviroment[serverProjectId];
};

const backendUrl = (backendProject: ENUM.backendProject) => (service: TemplateStringsArray | string) => (
  endpoint: TemplateStringsArray | string,
) => {
  let serviceStr = Array.isArray(service) ? service[0] : service;
  serviceStr += serviceStr === '' ? '' : '/';
  return `${GetServerAppPath(backendProject)}/${serviceStr}${Array.isArray(endpoint) ? endpoint[0] : endpoint}`;
};

export namespace Backend {
  /** START HERRAMIENTA GESTION */
  export namespace LOGIN {
    export const Login_SVC = backendUrl(ENUM.backendProject.LOGIN)`v1`;
  }
  export namespace FLOW_DEFINITION_SERVER {
    export const Flow = backendUrl(ENUM.backendProject.FLOW_DEFINITION_SERVER)`flowdefinition`;
  }
}
