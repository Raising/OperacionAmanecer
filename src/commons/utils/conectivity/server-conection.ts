import { ENUM, ACT, ERROR } from '@COMMONS/constants';
import { ActionContext } from 'vuex';
import { ThrowError, DefineError } from '../main/error-handler';
import store from '@COMMONS/utils/main/store';
import { resourceParam } from '@COMMONS/utils/conectivity/location-tools';
import Resource from './resource';

type serverCallFunction = (
  context: ActionContext<any, any>,
  params: {
    url: string;
    data?: any;
    resource: Resource;
    mappingFunction: Function;
    conectionVerb?: ENUM.ConectionVerb;
    endpointConfig?: resourceParam.locationConfig;
  },
) => Promise<any>;
type serverCallFunctionWithMethod = (
  context: ActionContext<any, any>,
  params: {
    method: ENUM.ConectionVerb;
    url: string;
    data: any;
    resource: Resource;
    mappingFunction: Function;
    conectionVerb?: ENUM.ConectionVerb;
    encode?: string;
    endpointConfig?: resourceParam.locationConfig;
  },
) => Promise<any>;

interface ServerActions {
  post: serverCallFunction;
  fetch: serverCallFunction;
  put: serverCallFunction;
  delete: serverCallFunction;
  options: serverCallFunction;
}

const curryHttpRequest: (method: ENUM.ConectionVerb) => serverCallFunction = (method) => (
  context,
  { url, data, resource, mappingFunction, conectionVerb, endpointConfig },
) => {
  let verb: ENUM.ConectionVerb = conectionVerb || method;

  return httpRequest(context, { url, data, method: verb, resource, mappingFunction, endpointConfig });
};

const serverActions: { [verb in ENUM.ConectionVerb]: serverCallFunction } = {
  [ENUM.ConectionVerb.POST]: curryHttpRequest(ENUM.ConectionVerb.POST),
  [ENUM.ConectionVerb.GET]: curryHttpRequest(ENUM.ConectionVerb.GET),
  [ENUM.ConectionVerb.PUT]: curryHttpRequest(ENUM.ConectionVerb.PUT),
  [ENUM.ConectionVerb.DELETE]: curryHttpRequest(ENUM.ConectionVerb.DELETE),
  [ENUM.ConectionVerb.OPTIONS]: curryHttpRequest(ENUM.ConectionVerb.OPTIONS),
  [ENUM.ConectionVerb.CONNECT]: curryHttpRequest(ENUM.ConectionVerb.CONNECT),
  [ENUM.ConectionVerb.HEAD]: curryHttpRequest(ENUM.ConectionVerb.HEAD),
  [ENUM.ConectionVerb.PATCH]: curryHttpRequest(ENUM.ConectionVerb.PATCH),
  [ENUM.ConectionVerb.TRACE]: curryHttpRequest(ENUM.ConectionVerb.TRACE),
};

const httpRequest: serverCallFunctionWithMethod = async (
  context,
  { url, method, data = '', resource, mappingFunction, endpointConfig },
) => {
  let readyToSendData: any;
  let encode = 'JSON';
  try {
    const dataHasFile =
      Object.keys(data).find(
        (prop) => data[prop] !== undefined && data[prop] !== null && data[prop].constructor === File,
      ) !== undefined;

    if (dataHasFile) {
      readyToSendData = new FormData();
      Object.keys(data).forEach((prop: any) => {
        readyToSendData.append(prop, data[prop]);
      });

      encode = 'RAW';
    } else {
      readyToSendData = JSON.stringify(data);
    }
  } catch (error) {
    ThrowError(ERROR.Conection.FAIL_TO_PARSE_FROM_JSON, error);
  }
  return callToServer(context, {
    method,
    url,
    data: readyToSendData,
    resource,
    mappingFunction,
    encode,
    endpointConfig,
  }).then((result: any) => {
    context.dispatch(ACT.Logger.LogServer, { type: url, resourceId: resource.id, verb: method });

    return result;
  });
};

let callToServer: serverCallFunctionWithMethod = async (
  context,
  { method, url, data, resource, mappingFunction, encode = 'JSON', endpointConfig },
) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();

    xhttp.open(String(method), url, true);
    if (encode === 'JSON') {
      xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    }

    // if (context.getters.getToken() && context.getters.getToken() != ENUM.AppState.NO_TOKEN) {
    //   xhttp.setRequestHeader('UserNameToken', context.getters.getToken());
    // }

    if (endpointConfig !== undefined && endpointConfig.xhttpProperties !== undefined) {
      Object.keys(endpointConfig.xhttpProperties).forEach((propName) => {
        //@ts-ignore
        xhttp[propName] = endpointConfig.xhttpProperties[propName];
      });
    }

    // if (resource.type.toString() === 'INSURED_INVOICE_CONTRACTS') {
    //   xhttp.responseType = 'arraybuffer';
    // }
    xhttp.onerror = reject;

    xhttp.send(data);

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4) {
        let response;

        const contentType = xhttp.getResponseHeader('content-type') || '';
        const regexContentTypeJson = new RegExp('application/json');
        const regexContentTypeText = new RegExp('text/plain');
        if (
          regexContentTypeJson.test(contentType) ||
          regexContentTypeText.test(contentType) ||
          contentType === '' ||
          contentType === undefined
        ) {
          try {
            response = JSON.parse(xhttp.response);
          } catch (error) {
            if (xhttp.response !== '') {
              reject(DefineError(ERROR.Conection.FAIL_TO_PARSE_FROM_JSON, error));
            }
          }
        } else {
          response = xhttp.response;
        }

        if (xhttp.status === 200 || xhttp.status === 204) {
          if (typeof response === 'object' && response.CodeError) {
            reject(DefineError(response.CodeError, { name: 'axesor-server-error', message: response.CodeError }));
          }
          resolve(mappingFunction(response, xhttp));
        } else {
          //axesor errro object
          if (typeof response === 'object') {
            reject(
              DefineError(response.CodeError, { name: 'axesor-server-error', message: response.Error }, xhttp.status),
            );
          } else {
            reject(DefineError(`Error: ${xhttp.status}`, { name: 'Comunication Error', message: xhttp.statusText }));
          }
        }
      }
    };
  });
};

const uriParamParser = (url: string) => {
  return url;
};

export default serverActions;

export { uriParamParser };
