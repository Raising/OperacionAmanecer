import { VueConstructor } from 'vue/types/umd';

import BaseEndPoints from '@COMMONS/definitions/service-layer/endpoints';
import * as HQ from '@HQ/loader';
// import * as DASHBOARD from '@DASHBOARD/loader';
//import * as DEFAULT from '@DEFAULT/loader';

const FunctionalModules = [...HQ.FunctionalModules];
const StoreModules = { ...HQ.StoreModules };
const EndPoints = { ...BaseEndPoints };

export { FunctionalModules, StoreModules, EndPoints };
