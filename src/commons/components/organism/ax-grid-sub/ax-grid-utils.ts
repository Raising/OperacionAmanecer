import { ENUM } from '@COMMONS/constants';
import Utils from '@COMMONS/utils/format/format-field';

function GetIcon(row: any) {
  let style: string = '';
  if (row.field.key === ENUM.ColumnName.RESULT_CODE) {
    /*switch (row.item[ENUM.ColumnName.RESULT_CODE]) {
      case 1:
        style = 'check-green-circle-outline-icon';
        break;
      case 2:
        style = 'help-circle-outline-icon'; //aprobar con condiciones????
        break;
      case 3:
        style = 'close-red-circle-outline-icon';
        break;
      case 4:
        style = 'alert-blue-circle-outline-icon';
        break;
    }*/
  } else if (row.field.key === ENUM.ColumnName.ADMSTATUS_ID) {
    switch (row.item[ENUM.ColumnName.ADMSTATUS_ID]) {
      case 0:
        style = ''; // "Sin datos"
        break;
      case 1:
        style = 'eye-icon';
        break;
      case 2:
        style = 'help-icon';
        break;
      case 3:
        style = 'magnify-little-icon';
        break;
      case 4:
        style = 'thumb-up-icon';
        break;
      case 5:
        style = 'counter-offer-aproved-icon';
        break;
      case 6:
        style = 'thumb-down-icon';
        break;
      case 7:
        style = 'forced-approval-icon';
        break;
      case 8:
        style = 'rubbish-icon';
        break;
      case 9:
        style = 'forced-denied-icon';
        break;
    }
  } else if (row.field.key === ENUM.ColumnName.VER_DETALLE) {
    style = 'magnify-icon';
  } else if (row.field.key === ENUM.ColumnName.STATUS_READ) {
    switch (row.item[ENUM.ColumnName.STATUS_READ]) {
      case true:
        style = 'mail-open-icon';
        break;
      case false:
        style = 'mail-icon';
        break;
    }
  }
  return style;
}

function ControlFormatField(field: any, row: any, resource: any) {
  const value = row.item[field.key];
  const type: ENUM.FormatType = field.valueType;
  const style: ENUM.FormatStyle = field.columnStyle;
  let extraParameter: any = undefined;
  if (field.valueType === ENUM.FormatType.IMAGE && row.field.key === ENUM.ColumnName.ADMSTATUS_ID) {
    const status: Array<any> = resource
      .content()
      .groupedData.Menus[0].MenuItems.concat(resource.content().groupedData.Menus[1].MenuItems);
    const menuAux: any = status.find((menu: any) => menu.Cod === row.item[ENUM.ColumnName.ADMSTATUS_ID]);
    extraParameter = menuAux.Result;
  }

  if (field.valueType === ENUM.FormatType.IMAGE && row.field.key === ENUM.ColumnName.RESULT_CODE) {
    extraParameter = row.item[ENUM.ColumnName.RESULT_NAME];
  }
  return type != ENUM.FormatType.TEXT ? Utils(value, type, style, extraParameter) : value;
}

export default { GetIcon, ControlFormatField };
