import refPropertyMutations from '@/commons/store/refProperty/mut-ref-property.ts';
import { MUT } from '@COMMONS/constants';
import { RefPropState } from '../refProperty/store-ref-property';
import Vue from 'vue';

describe('mut-ref-property.ts', () => {
  describe(MUT.RefProp.DELETE_ALL_STATE, () => {
    let state = { prop1: 'val1' };

    it('Call to deleteAllState', () => {
      refPropertyMutations[MUT.RefProp.DELETE_ALL_STATE](state);
      expect(Object.keys(state)).toHaveLength(0);
    });
  });
  describe(MUT.RefProp.CLEAR, () => {
    let state = { view1: { val1: 'val1' } };
    let viewId = { viewName: 'view1' };

    it('Call to clear', () => {
      refPropertyMutations[MUT.RefProp.CLEAR](state, viewId);
      expect(Object.keys(state)).toHaveLength(0);
    });
  });

  describe(MUT.RefProp.SET_FIELD, () => {
    let state: RefPropState = {};
    let valuePath = { value: 'val', path: 'home.pru1' };

    it('Call to setField', () => {
      refPropertyMutations[MUT.RefProp.SET_FIELD](state, valuePath);
      expect(state.home.pru1).toEqual('val');
    });
  });

  describe(MUT.RefProp.SET_FORM_FIELDS, () => {
    it('Call to setFormFields with values', () => {
      let state: RefPropState = {};
      let valuesPath: any = [{ value: 'val', path: 'home.pru1' }];
      refPropertyMutations[MUT.RefProp.SET_FORM_FIELDS](state, valuesPath);
      expect(state.home.pru1).toEqual('val');
    });

    it('Call to setFormFields without values', () => {
      let state: RefPropState = {};
      expect(refPropertyMutations[MUT.RefProp.SET_FORM_FIELDS](state, undefined)).toEqual(undefined);
    });
  });

  describe(MUT.RefProp.SET_PROPS_COLLECTION, () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Call to setPropsCollection without_values', () => {
      let state: RefPropState = { $getPropertyByPath: () => undefined };
      let params: { path: string; props: any; overwrite: boolean } = { path: 'path1', props: [], overwrite: false };

      const setVueMock = jest.spyOn(Vue, 'set');
      setVueMock.mockImplementation((p_state, p_path, p_props) => {
        expect(p_state).toEqual(state);
        expect(p_path).toEqual(params.path);
        expect(p_props).toEqual(params.props);
      });

      expect(refPropertyMutations[MUT.RefProp.SET_PROPS_COLLECTION](state, params)).toEqual(state);
    });

    it('Call to setPropsCollection no_overwrite', () => {
      let state: RefPropState = { $getPropertyByPath: () => ({ prop1: 'val1' }) };
      let params: { path: string; props: any; overwrite: boolean } = {
        path: '',
        props: { prop1: 'val1_rewrited' },
        overwrite: false,
      };

      const setVueMock = jest.spyOn(Vue, 'set');
      setVueMock.mockImplementation((p_state, p_path, p_props: any) => {
        expect(p_state).toEqual(state);
        expect(p_path).toEqual(params.path);
        expect(p_props['prop1']).toEqual('val1');
      });

      expect(refPropertyMutations[MUT.RefProp.SET_PROPS_COLLECTION](state, params)).toEqual(state);
    });

    it('Call to setPropsCollection overwrite', () => {
      let state: RefPropState = { $getPropertyByPath: () => ({ prop1: 'val1' }) };
      let params: { path: string; props: any; overwrite: boolean } = {
        path: '',
        props: { prop1: 'val1_rewrited' },
        overwrite: true,
      };

      const setVueMock = jest.spyOn(Vue, 'set');
      setVueMock.mockImplementation((p_state, p_path, p_props: any) => {
        expect(p_state).toEqual(state);
        expect(p_path).toEqual(params.path);
        expect(p_props['prop1']).toEqual('val1_rewrited');
      });

      expect(refPropertyMutations[MUT.RefProp.SET_PROPS_COLLECTION](state, params)).toEqual(state);
    });
  });
});
