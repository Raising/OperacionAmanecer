import { VueConstructor } from 'vue/types/umd';

import BaseEndPoints from '@COMMONS/definitions/service-layer/endpoints';
import * as HQ from '@HQ/loader';
// import * as DASHBOARD from '@DASHBOARD/loader';
//import * as DEFAULT from '@DEFAULT/loader';

let FunctionalModules = [...HQ.FunctionalModules];
let StoreModules = { ...HQ.StoreModules };
let EndPoints = { ...BaseEndPoints };

export { FunctionalModules, StoreModules, EndPoints };
