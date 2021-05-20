export enum ServerError {
  COMMONS_LOGIN_SERVICE_REFERENCE_ERROR = 'COMMONS_LOGIN_SERVICE_REFERENCE_ERROR',
}

export enum ResourceState {
  LOADING = 'LOADING',
  SERVER_ERROR = 'SERVER_ERROR',
  COMPLETE = 'COMPLETE',
  NOT_REQUESTED = 'NOT_REQUESTED',
  WRONG_RESOURCE_CONFIGURATION = 'WRONG_RESOURCE_CONFIGURATION',
  MOCK = 'MOCK',
  ABORT_CALL = 'ABORT_CALL',
}

export enum ConectionOperation {
  ENTITY_FETCH = 'ENTITY_FETCH',
  ENTITY_CREATE = 'ENTITY_CREATE',
  ENTITY_UPDATE = 'ENTITY_UPDATE',
  ENTITY_DELETE = 'ENTITY_DELETE',
  COLLECTION_FETCH = 'COLLECTION_FETCH',
  COLLECTION_UPDATE = 'COLLECTION_UPDATE',
  ACT = 'ACT',
  FETCH_GRID = 'FETCH_GRID',
}

//Metodos aceptados por el estandar HTTP
export enum ConectionVerb {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  CONNECT = 'CONNECT',
  HEAD = 'HEAD',
  PATCH = 'PATCH',
  TRACE = 'TRACE',
}
