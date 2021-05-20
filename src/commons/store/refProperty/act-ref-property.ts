import { ACT } from '@COMMONS/constants';
import { Action } from 'vuex';
import { RefPropState } from './store-ref-property';

export enum ActionName {}

const actions: { [mutation in ACT.RefProp]: Action<RefPropState, any> } = {};
export default actions;
