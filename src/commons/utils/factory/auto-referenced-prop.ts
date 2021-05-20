import { axViewDescription, VueView } from '@COMMONS/utils/factory/factory';
import { MUT, ENUM, ERROR } from '@COMMONS/constants';
import { ValidationDescription, GetValidateFunction } from '../form/field-validation';
import { getConnectedProp } from '../form/store-referenced-property';

export interface RefPropConfig {
  value?: any;
  name: string;
  validation?: ValidationDescription[];
  saveRequired?: boolean;
}

export default (viewDescription: axViewDescription) => {
  let refProps: any[] = viewDescription.refProps || [];
  let computedForms: RefPropConfig[] = refProps.map((el) =>
    typeof el === 'string' ? { name: el, validation: [] } : el,
  );

  viewDescription.data = (viewDescription.data || {}).$functionObjectAgregation(
    'refProp',
    createFullFieldConfigFunction(viewDescription.name, computedForms, viewDescription.secontaryId || ''),
  );

  if (refProps.length > 0) {
    let alreadyInitialized = false;
    viewDescription.beforeMount = (viewDescription.beforeMount || {}).$functionObjectAgregation(
      'initRefProps',
      function(this: VueView) {
        if (!alreadyInitialized || viewDescription.keepAlive !== true) {
          initAutoRefPropsDefault(this, viewDescription.name, computedForms);
          initViewEditingStatus(this, viewDescription.name);
          alreadyInitialized = true;
        }
      },
    );
    if (viewDescription.keepAlive !== true) {
      viewDescription.destroyed = (viewDescription.destroyed || {}).$functionObjectAgregation('cleanRefProps', function(
        this: VueView,
      ) {
        cleanRefPropDefault(this, viewDescription.name);
      });
    }
  }
  return viewDescription;
};

const createFullFieldConfigFunction = (viewName: string, computedForms: RefPropConfig[], secondaryPathProp: string) => (
  view: any,
): { [name: string]: any } => {
  return computedForms.reduce((acc: any, propConfig: RefPropConfig) => {
    acc[propConfig.name] = getConnectedProp({
      path: `${viewName}.${propConfig.name}`,
      context: view,
      propConfig: propConfig,
      secondaryPathProp: secondaryPathProp,
    });

    return acc;
  }, {});
};

const cleanRefPropDefault = (view: any, viewName: string) => {
  view.$store.commit(MUT.RefProp.CLEAR, { viewName });
};

const initAutoRefPropsDefault = (view: any, viewName: string, computedForms: RefPropConfig[]) => {
  if (computedForms.length === 0) return;
  view.$store.commit(
    MUT.RefProp.SET_FORM_FIELDS,
    computedForms
      .filter((refProp) => refProp.value !== undefined)
      .map((refProp) => ({
        path: `${viewName}.${refProp.name}`,
        value: typeof refProp.value === 'function' ? refProp.value.call(view) : refProp.value,
      })),
  );
};

const initViewEditingStatus = (view: any, viewName: string) => {
  view.$store.commit(MUT.Navigation.INIT_EDITSTATUSBYVIEW, {
    viewName: `${viewName}`,
    viewEdited: false,
  });
};
