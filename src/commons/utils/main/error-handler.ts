import { ActionContext } from 'vuex';
import { ACT, ERROR } from '@COMMONS/constants';

export interface ErrorDescription {
  stack?: string;
  type: string;
  error: Error;
  httpStatus?: number;
}

const ThrowError = (errorType: string, error: Error) => {
  throw DefineError(errorType, error);
};

const DefineError = (errorType: string, error: Error, httpStatus?: number): ErrorDescription => ({
  type: errorType,
  error,
  httpStatus,
});

const ActionErrorHandler = (
  context: ActionContext<any, any>,
  errorObject: ErrorDescription,
  originalArguments: any,
) => {
  context.dispatch(ACT.Logger.LogError, errorObject);
};

export { ThrowError, DefineError, ActionErrorHandler };
