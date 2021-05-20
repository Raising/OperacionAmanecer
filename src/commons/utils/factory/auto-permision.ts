import { axViewDescription } from './factory';
import { ENUM } from '@COMMONS/constants';
import { getPermission } from '../main/permission';

export default (viewDescription: axViewDescription) => {
  const dataDescription = viewDescription.data;
  viewDescription.data = function(context: any) {
    return Object.assign({}, typeof dataDescription === 'function' ? dataDescription(context) : dataDescription, {
      ENUM: ENUM,
      permission: (permissionCode: ENUM.Permission) => getPermission(context, permissionCode),
    });
  };
};
