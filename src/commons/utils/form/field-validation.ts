import { ActionContext } from 'vuex';
import { ENUM, ACT, ERROR } from '@COMMONS/constants';

export interface ValidationDescription {
  rule: ENUM.ValidationRule;
  params?: any;
}

/**
 * view is a param for every rule so you can get information from the context,
 * for example check if some other field is defined or some global vale like current date
 * remember you have access to store getter from the view context view.$store.getters
 */
const ValidationImplementation: { [name in ENUM.ValidationRule]: (value: any, params: any, view: any) => boolean } = {
  [ENUM.ValidationRule.NOT_EMPTY]: (value, params, view) => {
    return value !== undefined && value !== null && value !== '' && (!Array.isArray(value) || value.length > 0);
  },
  [ENUM.ValidationRule.IS_EMPTY]: (value, params, view) => {
    return value === undefined || value === null || value === '' || value.length === 0;
  },
  [ENUM.ValidationRule.IS_STRING]: (value, params, view) => {
    return typeof value === 'string';
  },
  [ENUM.ValidationRule.NOT_STRING]: (value, params, view) => {
    return !(typeof value === 'string');
  },
  [ENUM.ValidationRule.IS_BOOLEAN]: (value, params, view) => {
    return typeof value === 'boolean';
  },
  [ENUM.ValidationRule.NOT_BOOLEAN]: (value, params, view) => {
    return !(typeof value === 'boolean');
  },
  [ENUM.ValidationRule.IS_ARRAY]: (value, params, view) => {
    return Array.isArray(value);
  },
  [ENUM.ValidationRule.NOT_ARRAY]: (value, params, view) => {
    return !Array.isArray(value);
  },
  [ENUM.ValidationRule.EVERY_ELEMENT_IS_IN_COLLECTION]: (value, params, view) => {
    if (!Array.isArray(value) || !Array.isArray(params)) {
      console.error('No arrays detect');
      return false;
    }
    if (value.length > params.length) {
      console.error('The array is bigger that collection');
      return false;
    }
    if (value.length === 0 && params.length === 0) {
      return true;
    }

    if (value.length !== 0) {
      return value.every((element) => params.indexOf(element) !== -1);
    }

    return false;
  },
  [ENUM.ValidationRule.SOME_ELEMENT_IS_IN_COLLECTION]: (value, params, view) => {
    if (!Array.isArray(value) || !Array.isArray(params)) {
      console.error('No arrays detect');
      return false;
    }

    if (value.length === 0) {
      console.error('Empty array');
      return false;
    }
    return value.some((element) => params.indexOf(element) !== -1);
  },
  [ENUM.ValidationRule.NOT_IN_COLLECTION]: (value, params, view) => {
    if (params !== undefined && params.length !== undefined) {
      return params.indexOf(value) === -1;
    }
    return true;
  },
  [ENUM.ValidationRule.IS_IN_COLLECTION]: (value, params, view) => {
    if (params !== undefined && params.length !== undefined) {
      return params.indexOf(value) !== -1;
    }
    return false;
  },
  [ENUM.ValidationRule.NOT_FALSY]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null) return false;
    else return !!value;
  },
  [ENUM.ValidationRule.IS_FALSY]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null) return true;
    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    } else {
      return !value;
    }
  },
  [ENUM.ValidationRule.GREATER_STRING_LENGTH]: (value, params, view) => {
    return typeof value !== 'undefined' && value.toString().length > parseInt(params);
  },
  [ENUM.ValidationRule.EQUAL_STRING_LENGTH]: (value, params, view) => {
    return typeof value !== 'undefined' && value.toString().length === parseInt(params);
  },
  [ENUM.ValidationRule.LESSER_STRING_LENGTH]: (value, params, view) => {
    return typeof value !== 'undefined' && value.toString().length < parseInt(params);
  },
  [ENUM.ValidationRule.GREATER_OR_EQUAL_STRING_LENGTH]: (value, params, view) => {
    return typeof value !== 'undefined' && value.toString().length >= parseInt(params);
  },
  [ENUM.ValidationRule.LESSER_OR_EQUAL_STRING_LENGTH]: (value, params, view) => {
    return typeof value !== 'undefined' && value.toString().length <= parseInt(params);
  },
  [ENUM.ValidationRule.GREATER_NUMERIC]: (value, params, view) => {
    if (typeof value === 'string') {
      value = value.indexOf(',') !== -1 ? value.replace(',', '.') : value;
      value = +value;
    }
    if (typeof params === 'object') {
      params = params.propertyValue;
    }
    if (isNaN(value)) return false;
    return value > params;
  },
  [ENUM.ValidationRule.GREATER_OR_EQUAL_NUMERIC]: (value, params, view) => {
    if (typeof value === 'string') {
      value = value.indexOf(',') !== -1 ? value.replace(',', '.') : value;
      value = +value;
    }
    if (isNaN(value)) return false;
    return value >= params;
  },
  [ENUM.ValidationRule.LESSER_NUMERIC]: (value, params, view) => {
    if (typeof value === 'string') {
      value = value.indexOf(',') !== -1 ? value.replace(',', '.') : value;
      value = +value;
    }
    if (isNaN(value)) return false;
    return value < params;
  },
  [ENUM.ValidationRule.LESSER_OR_EQUAL_NUMERIC]: (value, params, view) => {
    if (typeof value === 'string') {
      value = value.indexOf(',') !== -1 ? value.replace(',', '.') : value;
      value = +value;
    }
    if (isNaN(value)) return false;
    return value <= params;
  },
  [ENUM.ValidationRule.GREATER_YEAR_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const year = newDate.getFullYear();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return year > currentYear;
  },
  [ENUM.ValidationRule.LESSER_YEAR_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const year = newDate.getFullYear();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return year < currentYear;
  },
  [ENUM.ValidationRule.EQUAL_YEAR_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const year = newDate.getFullYear();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return year == currentYear;
  },
  [ENUM.ValidationRule.GREATER_OR_EQUAL_YEAR_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const year = newDate.getFullYear();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return year >= currentYear;
  },
  [ENUM.ValidationRule.LESSER_OR_EQUAL_YEAR_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const year = newDate.getFullYear();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return year <= currentYear;
  },
  [ENUM.ValidationRule.GREATER_DATE_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const currentDateinmili = Date.now();
    const datemili = newDate.valueOf();

    return datemili > currentDateinmili;
  },
  [ENUM.ValidationRule.LESSER_DATE_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const currentDateinmili = Date.now();
    const datemili = newDate.valueOf();

    return datemili < currentDateinmili;
  },
  [ENUM.ValidationRule.EQUAL_DATE_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const today = new Date();
    const todaydate = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
    const newdate = new Date(newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate());
    const datemili = newdate.valueOf();
    const todaymili = todaydate.valueOf();

    return datemili == todaymili;
  },
  [ENUM.ValidationRule.GREATER_OR_EQUAL_DATE_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const currentDateinmili = Date.now();
    const datemili = newDate.valueOf();

    return datemili >= currentDateinmili;
  },
  [ENUM.ValidationRule.LESSER_OR_EQUAL_DATE_THAN_CURRENT]: (value, params, view) => {
    let newDate;
    if (typeof value !== 'undefined' && value !== null) {
      value = value.toString();
      newDate = new Date(value);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const currentDateinmili = Date.now();
    const datemili = newDate.valueOf();

    return datemili <= currentDateinmili;
  },
  [ENUM.ValidationRule.GREATER_DATE_OR_EQUAL]: (value, params, view) => {
    let newDate;
    let referenceDate;

    if (typeof value !== 'undefined' && value !== null && typeof params !== 'undefined' && params !== null) {
      value = value.toString();
      newDate = new Date(value);
      params = params.toString();
      referenceDate = new Date(params);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const referencemili = referenceDate.valueOf();
    const datemili = newDate.valueOf();

    return datemili >= referencemili;
  },
  [ENUM.ValidationRule.LESSER_DATE_OR_EQUAL]: (value, params, view) => {
    let newDate;
    let referenceDate;

    if (typeof value !== 'undefined' && value !== null && typeof params !== 'undefined' && params !== null) {
      value = value.toString();
      newDate = new Date(value);
      params = params.toString();
      referenceDate = new Date(params);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const referencemili = referenceDate.valueOf();
    const datemili = newDate.valueOf();

    return datemili <= referencemili;
  },
  [ENUM.ValidationRule.GREATER_DATE]: (value, params, view) => {
    let newDate;
    let referenceDate;

    if (typeof value !== 'undefined' && value !== null && typeof params !== 'undefined' && params !== null) {
      value = value.toString();
      newDate = new Date(value);
      params = params.toString();
      referenceDate = new Date(params);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const referencemili = referenceDate.valueOf();
    const datemili = newDate.valueOf();

    return datemili > referencemili;
  },
  [ENUM.ValidationRule.LESSER_DATE]: (value, params, view) => {
    let newDate;
    let referenceDate;

    if (typeof value !== 'undefined' && value !== null && typeof params !== 'undefined' && params !== null) {
      value = value.toString();
      newDate = new Date(value);
      params = params.toString();
      referenceDate = new Date(params);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const referencemili = referenceDate.valueOf();
    const datemili = newDate.valueOf();

    return datemili < referencemili;
  },
  [ENUM.ValidationRule.EQUAL_DATE]: (value, params, view) => {
    let newDate;
    let referenceDate;

    if (typeof value !== 'undefined' && value !== null && typeof params !== 'undefined' && params !== null) {
      value = value.toString();
      newDate = new Date(value);
      params = params.toString();
      referenceDate = new Date(params);
    } else {
      console.error('undefined or null value');
      return false;
    }
    const referencemili = referenceDate.valueOf();
    const datemili = newDate.valueOf();

    return datemili == referencemili;
  },
  [ENUM.ValidationRule.HAS]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null || typeof params === 'undefined' || params === null) {
      return false;
    }
    return String(params).indexOf(String(value)) !== -1;
  },
  [ENUM.ValidationRule.NOT_HAS]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null || typeof params === 'undefined' || params === null) {
      return false;
    }
    return String(params).indexOf(String(value)) === -1;
  },
  [ENUM.ValidationRule.EQUAL_STRING]: (value, params, view) => {
    let result;
    if (typeof params === 'object' && params.propertyValue) result = String(value) === String(params.propertyValue);
    else result = String(value) === String(params);
    return result;
  },
  [ENUM.ValidationRule.NOT_EQUAL_STRING]: (value, params, view) => {
    let result;
    if (typeof params === 'object' && params.propertyValue) result = String(value) !== String(params.propertyValue);
    else result = String(value) !== String(params);
    return result;
  },
  [ENUM.ValidationRule.IS_NUMERIC]: (value, params, view) => {
    return !isNaN(value);
  },
  [ENUM.ValidationRule.IS_COD_POSTAL]: (value, params, view) => {
    let postacode;
    if (typeof value === 'undefined' || value === null || value === '') {
      return true;
    } else {
      postacode = parseInt(value);
    }
    return !isNaN(postacode) && postacode >= 1000 && postacode <= 52999;
  },
  [ENUM.ValidationRule.IS_TELEPHONE]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null || value === '') {
      return true;
    }
    const regex = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
    return regex.test(value);
  },
  [ENUM.ValidationRule.IS_CURRENCY]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null || value === '') {
      return true;
    }
    const regexEn = /^[-]?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$/gm;
    const regexEs = /^[-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]+)(,[0-9][0-9])?$/gm;
    return regexEn.test(value) || regexEs.test(value);
  },
  [ENUM.ValidationRule.IS_DATE]: (value, params, view) => {
    let separator;
    if (typeof value === 'undefined' || value === null || value === '') {
      return true;
    }
    if (String(value).indexOf('/') !== -1) {
      separator = '/';
    } else if (String(value).indexOf('-') !== -1) {
      separator = '-';
    } else {
      console.error('date separator incorrect');
      return false;
    }
    const stringdate = value.split(separator);

    const dateddmmyyyy =
      stringdate.length == 3 &&
      stringdate[2].length == 4 &&
      stringdate[2] > 0 &&
      stringdate[0] > 0 &&
      stringdate[0] <= 31 &&
      stringdate[1] > 0 &&
      stringdate[1] <= 12;

    const dateyyyymmdd =
      stringdate.length == 3 &&
      stringdate[0].length == 4 &&
      stringdate[0] > 0 &&
      stringdate[2] > 0 &&
      stringdate[2] <= 31 &&
      stringdate[1] > 0 &&
      stringdate[1] <= 12;

    if (dateddmmyyyy || dateyyyymmdd) {
      return true;
    } else {
      console.error('date incorrect');
      return false;
    }
  },
  [ENUM.ValidationRule.IS_DATE_FORMATED_IN_DD_MM_YYYY]: (value, params, view) => {
    let separator;
    if (typeof value === 'undefined' || value === null) {
      return false;
    }
    if (String(value).indexOf('/') !== -1) {
      separator = '/';
    } else if (String(value).indexOf('-') !== -1) {
      separator = '-';
    } else {
      console.error('date separator incorrect');
      return false;
    }
    const stringdate = value.split(separator);
    if (
      stringdate.length == 3 &&
      stringdate[2].length == 4 &&
      stringdate[0] > 0 &&
      stringdate[0] <= 31 &&
      stringdate[1] > 0 &&
      stringdate[1] <= 12 &&
      stringdate[2] > 0
    ) {
      return true;
    } else {
      console.error('date incorrect');
      return false;
    }
  },
  [ENUM.ValidationRule.IS_DATE_FORMATED_IN_YYYY_MM_DD]: (value, params, view) => {
    let separator;
    if (typeof value === 'undefined' || value === null) {
      return false;
    }
    if (String(value).indexOf('/') !== -1) {
      separator = '/';
    } else if (String(value).indexOf('-') !== -1) {
      separator = '-';
    } else {
      console.error('date separator incorrect');
      return false;
    }
    const stringdate = value.split(separator);
    if (
      stringdate.length == 3 &&
      stringdate[0].length == 4 &&
      stringdate[2] > 0 &&
      stringdate[2] <= 31 &&
      stringdate[1] > 0 &&
      stringdate[1] <= 12 &&
      stringdate[0] > 0
    ) {
      return true;
    } else {
      console.error('date incorrect');
      return false;
    }
  },

  [ENUM.ValidationRule.IS_TIME]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null) {
      return false;
    }
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/gm;
    return regex.test(value);
  },
  [ENUM.ValidationRule.IS_IDENTITY_DOCUMENT]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null) {
      return false;
    }

    const regexNIENIF = /^((([x-zX-Z])|([lmLM])){1}([-]?)((\d){7})([-]?)([a-zA-Z]{1}))|((\d{8})([-]?)([a-zA-Z]))$/gm;
    const regexCIF = /^([abcdefghjklmnpqrsuvmABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9a-jA-J])$/gm;

    return regexNIENIF.test(value) || regexCIF.test(value);
  },
  [ENUM.ValidationRule.IS_IBAN]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null) {
      return false;
    }
    const regex = /^[a-zA-Z]{2}[0-9]{2}\s?[a-zA-Z0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?$/gm;
    return regex.test(value);
  },
  [ENUM.ValidationRule.IS_EMAIL]: (value, params, view) => {
    if (typeof value === 'undefined' || value === null) {
      return false;
    }
    const regex = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+\.([a-z0-9-]+.)*([a-z]{2,4})$/gm;
    return regex.test(value);
  },
  [ENUM.ValidationRule.IS_EQUAL_THAN_VIEW_PROP]: (value, params, view) => {
    const viewProp = view.$getPropertyByPath(params);

    if (typeof viewProp === 'object') {
      return viewProp.get() === value;
    } else {
      return viewProp === value;
    }
  },
  [ENUM.ValidationRule.MIN_ELEMENTS_ON_ARRAY]: (value, params, view) => {
    let result = false;
    if (!Array.isArray(value)) console.error('No arrays detect');
    else if (!params || !params.length) console.error('Params length no detect');
    else result = value.length >= params.length;

    return result;
  },
  [ENUM.ValidationRule.EQUALS_ELEMENTS_ON_ARRAY]: (value, params, view) => {
    let result = false;
    if (!Array.isArray(value)) console.error('No arrays detect');
    else if (!params || !params.length) console.error('Params length no detect');
    else result = value.length === params.length;

    return result;
  },
  [ENUM.ValidationRule.SUM_NUMERIC_ELEMENT_MATRIX_IS_GREATER_ZERO]: (value, params, view) => {
    let result = false;
    let excludedIndex: Array<any> = [];
    if (params && Array.isArray(params.excludeIndex)) {
      excludedIndex = params.excludeIndex;
    }
    value.map((row: any) => {
      const sumRowNumberElement: any = Object.keys(row)
        .map((element: any) => row[element])
        .filter((elementNumber: any, index: number) => !isNaN(elementNumber) && !excludedIndex.includes(index))
        .reduce((a: number, b: number) => Number(a) + Number(b), 0);
      if (sumRowNumberElement > 0) {
        result = true;
      }
    });
    return result;
  },
  [ENUM.ValidationRule.SUM_NUMERIC_ELEMENT_ARRAY_OF_OBJECT_IS_GREATER_ZERO]: (value, params, view) => {
    let result = false;
    result = value.reduce((acc: any, el: any) => {
      if (sumAllArrayValues(el[params.key]) > 0) {
        acc = true;
      }
      return acc;
    }, false);

    return result;
  },
  [ENUM.ValidationRule.NUMERIC_ELEMENT_ARRAY_OF_OBJECT_GREATER_THAN_ZERO]: (value, params, view) => {
    let result = false;
    result = value.reduce((acc: any, el: any) => {
      if (countArrayValuesHigherThan(el[params.key], 0) > params.length) {
        acc = true;
      }
      return acc;
    }, false);
    return result;
  },
  [ENUM.ValidationRule.NUMERIC_ELEMENT_MATRIX_GREATER_THAN_ZERO]: (value, params, view) => {
    let result = false;
    result = value.reduce((acc: any, el: any) => {
      if (countArrayValuesHigherThan(el, 0) > params.length) {
        acc = true;
      }
      return acc;
    }, false);
    return result;
  },
  [ENUM.ValidationRule.FIND_PROPERTY_IN_OBJECT_ARRAY]: (value, params, view) => {
    let result = false;
    if (Array.isArray(value)) {
      result = value.find((el: any) => {
        return typeof el === 'object' && el[params.propertyKey] === params.propertyValue;
      });
    }
    return result;
  },
};

const sumAllArrayValues = (array: any) => {
  return Object.keys(array)
    .map((element: any) => array[element])
    .filter((elementNumber: any) => !isNaN(elementNumber))
    .reduce((a: number, b: number) => a + b, 0);
};

const countArrayValuesHigherThan = (array: any, value: number) => {
  return Object.keys(array)
    .map((element: any) => array[element])
    .filter((elementNumber: any) => !isNaN(elementNumber) && elementNumber > value).length;
};

/**
 * this is the components from where this field is called
 * @param description
 */
const GetValidateFunction = (view: any, fieldValueGetter: Function, description: ValidationDescription[] | boolean) =>
  function (): boolean {
    if (typeof description === 'boolean') return description;
    //if (description[0] === undefined) return true;

    if (
      description.every((des: ValidationDescription) => {
        return des === undefined;
      })
    ) {
      return true;
    }
    const validation = description.reduce((acc: boolean, des: ValidationDescription) => {
      return acc
        ? des !== undefined
          ? ValidationImplementation[des.rule](fieldValueGetter(), des.params, view)
          : true
        : false;
    }, true);

    return validation;
    //return true;
  };

const ValidateFields = (view: any, fieldsToValidate: string[]): boolean => {
  return fieldsToValidate.reduce((acc: boolean, fieldName: string) => {
    acc = acc && view.field[fieldName].validate();
    return acc;
  }, true);
};

export { ValidateFields, GetValidateFunction, ValidationImplementation };
