import actions from './act-logger';
import getters from './get-logger';
import mutations from './mut-logger';
import { ENUM } from '@COMMONS/constants';
import { ErrorDescription } from '@COMMONS/utils/main/error-handler';

export interface LogEntry {
  time: string;
  type: string;
  displayed: boolean;
}

export interface InfoLogEntry extends LogEntry {}

export interface ErrorLogEntry extends LogEntry {
  error: Error;
  stack?: string;
}

export interface ServerLogEntry extends LogEntry {
  //resource?: Resource;
  resourceId?: String;
  verb?: ENUM.ConectionVerb;
}

export interface LogDescription {
  type: string;
  error?: ErrorDescription;
  resourceId?: String;
  verb?: ENUM.ConectionVerb;
}

export interface LoggerState {
  errorLog: ErrorLogEntry[];
  infoLog: InfoLogEntry[];
  serverLog: ServerLogEntry[];
}

export default {
  state: (): LoggerState => ({
    errorLog: [],
    infoLog: [],
    serverLog: [],
  }),
  mutations,
  actions,
  getters,
};
