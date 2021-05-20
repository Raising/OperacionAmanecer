import { ENUM } from '@COMMONS/constants';
import { resourceParam } from './location-tools';
import { CreateElement, VNode, Component } from 'vue';
import { fullProperty } from './resource';
import { CustomPromisify } from 'util';
import { ThrowError } from '../main/error-handler';

interface customField {
  DefaultValue: any;
  FormatFieldType: number;
  CustomFieldId: number;
  AmbitType: number;
  AnalysisMeasureFlag: boolean;
  BusinessUnitId: any;
  ClassificationCriteriaERPId: any;
  CorporationId: number;
  CreationDate: any;
  CreationUserId: any;
  CustomFieldName: string;
  CustomeFieldDescr: string;
  DimensionFlag: boolean;
  FTPUpdated: boolean;
  FieldList: any;
  FilterFlag: boolean;
  MeasureFlag: boolean;
  MeasureType: number;
  OrderNbr: number;
  TrackingListFlag: boolean;
  UpdateDate: string;
  UpdateUserId: number;
  VirtualFieldSP: any;
}

export interface FilterConfig extends resourceParam.property {
  type?: ENUM.FilterType;
  subType?: string;
  renderParam?: any;
  parsedRenderParam?: any;
  customField?: customField;
  forceUpdate?: boolean;
}

export interface FilterDefinition {
  baseValidation?: ENUM.ValidationRule;
  render: (createElement: CreateElement, vmodel: fullProperty) => VNode;
  customFieldValueToComponentValue?: (value: any) => any;
}

export const filtersDefinitions: { [filter in ENUM.FilterType]: FilterDefinition } = {
  [ENUM.FilterType.RANGE]: {
    render: (createElement, vmodel) => {
      return createElement('ax-form-multi-range-slider', {
        class: { 'is-invalid': vmodel.validate !== undefined && vmodel.validate() },
        attrs: {
          value: vmodel,
          showInfo: true,
          ...(vmodel.config.parsedRenderParam || vmodel.config.renderParam),
        },
        props: {},
      });
    },
  },
  [ENUM.FilterType.NUMERIC]: {
    render: (createElement, vmodel) => {
      return createElement('ax-form-numeric', {
        class: { 'is-invalid': vmodel.validate !== undefined && vmodel.validate() },
        attrs: { value: vmodel },
        props: {},
      });
    },
  },
  [ENUM.FilterType.SLIDERSELECTOR]: {
    render: (createElement, vmodel) => {
      return createElement('ax-form-input', {
        class: { 'is-invalid': vmodel.validate !== undefined && vmodel.validate() },
        attrs: { type: 'range', ...(vmodel.config.parsedRenderParam || vmodel.config.renderParam) },
        props: {},
        on: {
          input: (newValue: any) => vmodel.set(newValue),
        },
      });
    },
  },
  [ENUM.FilterType.TEXT]: {
    render: (createElement, vmodel) => {
      return createElement('div', {}, [
        createElement('ax-form-input', {
          class: { 'is-invalid': vmodel.validate !== undefined && vmodel.validate() },
          attrs: { value: vmodel.get() },
          props: {},
          on: {
            input: (newValue: any) => vmodel.set(newValue),
          },
        }),
      ]);
    },
  },
  [ENUM.FilterType.TREESELECT]: {
    render: (createElement, vmodel) => {
      return createElement('ax-form-treeselect', {
        class: { 'is-invalid': vmodel.validate !== undefined && vmodel.validate() },
        attrs: { ...(vmodel.config.parsedRenderParam || vmodel.config.renderParam), multiple: true },
        props: {},
        on: {
          input: (newValue: any) => vmodel.set(newValue),
        },
      });
    },
    customFieldValueToComponentValue: (customField) => {
      return {
        options: customField.FieldList.map((item: any) => {
          return { id: item.StringStr, label: item.StringStr };
        }),
      };
    },
  },
  [ENUM.FilterType.SELECT]: {
    render: function(createElement, vmodel) {
      return createElement('ax-form-select', {
        class: { 'is-invalid': vmodel.validate !== undefined && vmodel.validate() },
        attrs: {
          ...(vmodel.config.parsedRenderParam || vmodel.config.renderParam),
          multiple: false,
        },
        props: {},
        on: {
          input: (newValue: any) => vmodel.set(newValue),
        },
      });
    },
    customFieldValueToComponentValue: (customField) => {
      return {
        value: '',
        options: customField.FieldList.map((item: any) => {
          return { value: item.ListCode, text: item.ListDescr };
        }),
      };
    },
  },
  [ENUM.FilterType.DATE]: {
    render: (createElement, vmodel) => {
      return createElement('ax-form-date-range', {
        class: { 'is-invalid': vmodel.validate !== undefined && vmodel.validate() },
        attrs: { value: vmodel },
        on: {
          input: (newValue: any) => vmodel.set(newValue),
        },
      });
    },
  },
  [ENUM.FilterType.PHONE]: {
    render: (createElement, vmodel) => {
      return createElement('ax-form-input', {
        class: { 'is-invalid': vmodel.validate !== undefined && vmodel.validate() },
        attrs: { value: vmodel.get(), type: 'tel' },
        on: {
          input: (newValue: any) => vmodel.set(newValue),
        },
      });
    },
  },
};

export default (filterConfig: FilterConfig) => {
  let instancedDefinition;
  if (filterConfig.type !== undefined) {
    instancedDefinition = filtersDefinitions[filterConfig.type];
  } else {
    ThrowError('You are trying to create a auto-filter component without defining its type', new Error());
  }

  return instancedDefinition;
};

export { customField };
