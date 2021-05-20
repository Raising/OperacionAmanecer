import { drawDOM, exportPDF, pdf } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { ACT } from '@COMMONS/constants';
import * as ERROR from '@COMMONS/definitions/hub-error';

// pdf.defineFont({
//   'Core Sans G': `${window.location.origin}/font/CoreSansG-Regular.ttf`,
//   // 'Source Sans Pro': 'https://cdn.jsdelivr.net/npm/source-sans-pro@3.6.0/TTF/SourceSansPro-Regular.ttf',
//   // 'Source Sans Pro|Bold': 'https://cdn.jsdelivr.net/npm/source-sans-pro@3.6.0/TTF/SourceSansPro-Bold.ttf',
//   // 'Source Sans Pro|Bold|Italic': 'https://cdn.jsdelivr.net/npm/source-sans-pro@3.6.0/TTF/SourceSansPro-BoldIt.ttf',
//   // 'Source Sans Pro|Italic': 'https://cdn.jsdelivr.net/npm/source-sans-pro@3.6.0/TTF/SourceSansPro-It.ttf',
// });

//Tamaños de un A4 para una resolución de 96ppp
const A4Size = {
  a4Widthpx: 595,
  a4Height: 842,
};

const pixelSize = 0.0264583333;
const cmSize = 37.7952755906;
const headerMargin = 40;
const minHeightForRender = 6;
const breakClass = 'page-break';
const mediaBreakpoint = 1400;
const debug = false;

const createPDF = async (
  context: any,
  element: any,
  params: { filename: string; marginScale?: number | string; landScape?: boolean },
  widgetIdentifier: string | undefined = undefined,
  asBlob: boolean = false,
) => {
  await beforePDFPrinting(element);

  const defaultTopMargin = 2;
  const defaultRightMargin = 1;
  const defaultBottomMargin = 2;
  const defaultLeftMargin = 1;
  const marginsScale: any = isNaN(Number(params.marginScale)) ? Number(params.marginScale) : params.marginScale;

  let a4Widthpx = A4Size.a4Widthpx;
  let a4Height = A4Size.a4Height;
  // let landScapeOrientation: boolean = params.landScape ? params.landScape : elementWidth > elementHeight ? true : false;
  let landScapeOrientation: boolean = params.landScape ? params.landScape : false;

  // if (landScapeOrientation) {
  //   let oldWidth = a4Widthpx;
  //   a4Widthpx = a4Height;
  //   a4Height = oldWidth;
  // }

  // landScapeOrientation = false;

  const marginTop = marginsScale * defaultTopMargin;
  const marginBottom = marginsScale * defaultBottomMargin;
  const margins = {
    left: `${marginsScale * defaultLeftMargin}cm`,
    top: `${marginTop}cm`,
    right: `${marginsScale * defaultRightMargin}cm`,
    bottom: `${marginBottom}cm`,
  };

  let scaleFactor = Number((1920 / a4Widthpx).toFixed(2));

  if (!widgetIdentifier)
    addPageBreaks(element, (marginTop + 6.18) * cmSize + (marginBottom + 6.18) * cmSize, scaleFactor);
  hideWidgets(element, widgetIdentifier);

  if (scaleFactor > 1) {
    scaleFactor = 1 / scaleFactor;
  }

  // const point1 = { res: 1180, escale: 0.6 };
  // const point2 = { res: 1661, escale: 0.4 };
  // let scalefactor = Number(
  //   ((elementWidth - point1.res) * ((point2.escale - point1.escale) / (point2.res - point1.res)) + point1.escale).toFixed(
  //     2,
  //   ),
  // );

  let result = await drawDOM(element, {
    margin: margins,
    paperSize: 'A4',
    avoidLinks: true,
    landscape: landScapeOrientation,
    scale: scaleFactor,
    forcePageBreak: `.${breakClass}`,
    repeatHeaders: false,
    ...params,
  })
    .then(function(group: any) {
      return exportPDF(group);
    })
    .then(function(data: any) {
      removePageBreaks(element);
      hideWidgets(element, widgetIdentifier);
      if (asBlob) {
        let blob = getBlob(data);
        return blob;
      } else {
        saveAs(data, params.filename + '.pdf');
      }
    })
    .catch((error: Error) => {
      context.dispatch(ACT.Logger.LogError, {
        type: ERROR.Code.CODE_UNHANDLED,
        error,
      });

      throw error;
    });

  return result;
};

const getBlob = (data: any) => {
  var blob = data;

  if (typeof data === 'string') {
    var parts = data.split(';base64,');
    var contentType = parts[0];
    var base64 = atob(parts[1]);
    var array = new Uint8Array(base64.length);

    for (var idx = 0; idx < base64.length; idx++) {
      array[idx] = base64.charCodeAt(idx);
    }

    blob = new Blob([array.buffer], { type: contentType });
  }

  return blob;
};

const addPageBreaks = (node: HTMLElement, margin: any, scaleFactor: number) => {
  const renderArea = scaleFactor * A4Size.a4Height - margin;
  const header: any = node.querySelector('.report-export-header');
  let headerHeight = 0;

  if (header && header.offsetHeight) {
    headerHeight = header.offsetHeight;
  }
  let offsetArea = renderArea - (headerHeight + headerMargin);
  let colsAcc = 0;
  node.querySelectorAll('.ax-widget').forEach((el: any, index: number) => {
    let debugNode = undefined;
    if (debug) {
      debugNode = el.querySelector('span.debugger-pdf-size');
      if (!debugNode) {
        debugNode = document.createElement('span');
        debugNode.classList.add('debugger-pdf-size');
        debugNode.setAttribute('style', 'position: absolute; z-index: 100; right: 32px; color: darblue');
        el.insertBefore(debugNode, el.firstChild);
      }
      debugNode.innerHTML = `OffsetArea: ${offsetArea} <br> ElementHeiht: ${el.offsetHeight}`;
    }

    if (index === 0) {
      offsetArea = getNewOffset(renderArea, offsetArea, el.offsetHeight);
    } else {
      let widgetCols = getNumberOfCols(el);
      if (colsAcc === 6 && widgetCols === 6) {
        colsAcc = 0;
        if (debug) debugNode.innerHTML += ` <br> NewOffsetArea: ${offsetArea}`;
        return;
      } else if (haveToBreak(renderArea, offsetArea, el.offsetHeight)) {
        el.classList.add(breakClass);
        offsetArea = renderArea;
        colsAcc = widgetCols === 6 ? widgetCols : 0;
      } else {
        colsAcc = widgetCols + colsAcc >= 12 ? 0 : widgetCols + colsAcc;
      }

      offsetArea = getNewOffset(renderArea, offsetArea, el.offsetHeight);
    }

    if (debug) debugNode.innerHTML += ` <br> NewOffsetArea: ${offsetArea}`;
  });
};

const removePageBreaks = (node: HTMLElement) => {
  node.querySelectorAll('.ax-widget').forEach((el) => el.classList.remove(breakClass));
};

const getNewOffset = (renderArea: number, offsetArea: number, widgetHeight: number) => {
  return widgetHeight >= offsetArea ? (widgetHeight - offsetArea) % renderArea : offsetArea - widgetHeight;
};

const haveToBreak = (renderArea: number, offsetArea: number, widgetHeight: number) => {
  return (
    (widgetHeight < renderArea && widgetHeight > offsetArea) ||
    (widgetHeight > renderArea && offsetArea <= minHeightForRender)
  );
};

const getNumberOfCols = (node: Element) => {
  let parent: Element | null = node.parentElement;
  return window.innerWidth > mediaBreakpoint && parent && parent.classList.contains('col-sm-6') ? 6 : 12;
};

const hideWidgets = (node: Element, widgetIdentifier: string | undefined) => {
  if (!widgetIdentifier) return;
  node.querySelectorAll('.ax-widget').forEach((el: Element) => {
    if (!el.classList.contains(widgetIdentifier)) el.classList.toggle('force-hide');
  });
};

const beforePDFPrinting = async (element: Element) => {
  if (debug) {
    element.classList.add('debug-pdf-mode');
  }
  // @ts-ignore
  if (window.initialLoad) element.classList.add('new-platform');

  var cc: any = element.querySelectorAll('svg:not(.converted-to-img)');

  let promises: Array<Promise<any>> = [];
  cc.forEach((svg: any) => {
    promises.push(svgToCanvas(svg));
  });

  await Promise.all(promises);
};

const svgToCanvas = (svg: Element) => {
  return new Promise((resolve: any, reject: any) => {
    var svgData = new XMLSerializer().serializeToString(svg);

    var canvas = document.createElement('canvas');
    var ctx: any = canvas.getContext('2d');

    var img = document.createElement('img');
    img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));
    img.classList.add('only-pdf');
    img.setAttribute('style', 'display: none');

    img.onload = function() {
      ctx.drawImage(img, 0, 0);

      if (svg.parentNode) {
        svg.parentNode.insertBefore(img, svg);
      }

      svg.classList.add('converted-to-img');
      resolve(true);
    };
  });
};

export { createPDF };
