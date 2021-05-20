export enum MutationName {
  SET_RESOURCE_CONTENT = 'SET_RESOURCE_CONTENT',
  SET_RESOURCE_AS_LOADING = 'SET_RESOURCE_AS_LOADING',
  CLEAN = 'CLEAN',
  CLEAN_ALL = 'CLEAN_ALL',
  DELETE_ALL_STATE = 'DELETE_ALL_STATE',
}

export enum ActionName {
  FetchResourceCollection = 'fetchResourceCollection',
  FetchResourceEntity = 'fetchResourceEntity',
  UpdateEntity = 'updateEntity',
  DeleteEntity = 'deleteEntity',
  CreateEntity = 'createEntity',
  PostServerAction = 'postServerAction',
  FetchGrid = 'fetchGrid',
}
