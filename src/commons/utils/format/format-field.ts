import { ENUM, ACT } from '@COMMONS/constants';
import Resource from '../conectivity/resource';
import store from '@COMMONS/utils/main/store';
import Vue from 'vue';
import Vuex from 'vuex';

interface Address {
  FullAddress: string;
}
interface ActivityType {
  Description: string;
}

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

export const scaleFactor: {
  [index in any]: number;
} = {
  U: 1,
  MIL: 1000,
  MILL: 1000000,
};

export const moneyFormatTypes = [ENUM.FormatType.CURRENCY, ENUM.FormatType.MONEY, ENUM.FormatType.AMOUNT];
export const numberFormatTypes = [ENUM.FormatType.NUMBER, ENUM.FormatType.INTEGER];
export const percentFormatTypes = [ENUM.FormatType.PERCENT, ENUM.FormatType.PERCENTAGE];
export const ratiosFormatTypes = [ENUM.FormatType.RATIO];

export default function(
  value: any,
  type: ENUM.FormatType,
  style?: ENUM.FormatStyle,
  extraParameter?: any,
  originFormatDMY?: boolean,
) {
  value = value !== null ? value : undefined;
  if (value === undefined) {
    return '-';
  }
  if (moneyFormatTypes.includes(type)) {
    extraParameter = extraParameter ? extraParameter : { style: 'currency', currency: 'EUR' };
    return formatearMoneda(Number(value), extraParameter);
  } else if (numberFormatTypes.includes(type)) {
    return formatearNumero(
      (value !== undefined ? value : '').toString(),
      type !== ENUM.FormatType.INTEGER ? extraParameter : 0,
    );
  } else if (type === ENUM.FormatType.TEXT) {
    return formatearTexto((value !== undefined ? value : '').toString());
  } else if (type === ENUM.FormatType.DATE) {
    // Si originFormatDMY si no viene suponemos que el formato de la fecha es en español
    return formatearFecha((value !== undefined ? value : '').toString());
  } else if (type === ENUM.FormatType.ACTIVITYTYPE) {
    return formatActivityType(value);
  } else if (type === ENUM.FormatType.YEAR) {
    return formatearAno((value !== undefined ? value : '').toString());
  } else if (type === ENUM.FormatType.ADDRESTYPE) {
    return formatearDireccion(value);
  } else if (type === ENUM.FormatType.IMAGE && style === ENUM.FormatStyle.IMAGETEXT) {
    return extraParameter !== undefined ? extraParameter.toString() : value;
  } else if (percentFormatTypes.includes(type)) {
    return formatearPorcentaje(value, extraParameter);
  } else if (ratiosFormatTypes.includes(type)) {
    return formatearRatio(value, extraParameter);
  } else {
    return value;
  }
}

function solveChromeFormat(valor: number, options: any): string {
  return valor.toLocaleString('de-DE', options);
}

function formatearPorcentaje(valor: number, decimales: number = 2): string {
  return `${formatearNumero(valor, decimales)} %`;
}

function formatearMoneda(valor: number, options: any): any {
  //Existe un bug en chome cuando el lenguaje es ES y el valor es > 999 y < 10000, se usa el formato italiano solo en este caso para solucionarlo
  let valorFormateado = '';
  if (navigator.languages[0] == 'es-ES') {
    if (scaleFactor[options.scale]) {
      valorFormateado = addScaleToCurrency(
        solveChromeFormat(valor / scaleFactor[options.scale], options),
        options.scale,
      );
    } else {
      valorFormateado = solveChromeFormat(valor, options);
    }
  } else {
    if (scaleFactor[options.scale]) {
      valorFormateado = addScaleToCurrency(
        (valor / scaleFactor[options.scale]).toLocaleString(navigator.languages[0], options),
        options.scale,
      );
    } else {
      valorFormateado = valor.toLocaleString(navigator.languages[0], options);
    }
  }
  return valorFormateado;
}

function formatearRatio(valor: number, decimales: any): any {
  return formatearNumero(valor, decimales);
}

function addScaleToCurrency(value: string, scale: string): string {
  if (scale !== ENUM.Scales.U) {
    return value.replace(/\s/g, ` ${scale} `);
  } else {
    return value;
  }
}

function formatearAno(valor: string): number {
  return new Date(valor).getFullYear();
}

function formatearNumero(valor: string | number, decimales: number): string {
  let languaje = navigator.language;
  languaje = Number(valor) > 999 && Number(valor) < 10000 && languaje == 'es-ES' && isChrome ? 'de-DE' : languaje;

  // @ts-ignore
  return Number(valor).toLocaleString(languaje, {
    minimumFractionDigits: !isNaN(decimales) ? decimales : 2,
    maximumFractionDigits: !isNaN(decimales) ? decimales : 2,
  });
}

function formatActivityType(value: ActivityType) {
  return value.Description;
}

function formatearDireccion(valor: Address): string {
  return valor.FullAddress;
}

function formatearTexto(valor: string): string {
  return valor;
}

//TODO OPtimizar, formatear
// si traducir fecha est
function formatearFecha(valor: string): string {
  let valorAux: string = valor.replace(/^\/|\/$/g, '');
  let valorAuxSplitted = valorAux.split('/');

  if (valorAuxSplitted.length === 3) {
    //Formato dia/mes/año
    let stringDate = valorAux;
    let date = new Date(`${valorAuxSplitted[1]}/${valorAuxSplitted[0]}/${valorAuxSplitted[2]}`);

    if (isNaN(date.getTime())) date = new Date(stringDate);

    return date.toLocaleDateString().replace(/\b(\d\/)/g, '0$1');
  } else if (!isNaN(Date.parse(valor))) {
    return new Date(valor).toLocaleDateString().replace(/\b(\d\/)/g, '0$1');
  } else {
    valorAux = valorAux.slice(5, -6);
    let dateAux = new Date(parseInt(valorAux));
    return dateAux.toLocaleDateString().replace(/\b(\d\/)/g, '0$1');
  }
}
