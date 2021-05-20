import resourceMutations from '@/commons/store/resource/mut-resource.ts';
import { ENUM, MUT } from '@COMMONS/constants';
import Vue from 'vue';

describe('mut-resource.ts', () => {
  describe(MUT.Resource.DELETE_ALL_STATE, () => {
    it('Call to deleteAllState', () => {
      let state: any = { val1: 'el1' };

      const setVueMock = jest.spyOn(Vue, 'set');

      setVueMock.mockImplementation((state: any, stateProp: any, val: any) => {
        state[stateProp] = val;
      });

      resourceMutations[MUT.Resource.DELETE_ALL_STATE](state);
      Object.keys(state).forEach((el) => {
        expect(state[el]).toEqual({});
      });
    });
  });

  describe(MUT.Resource.SET_RESOURCE_CONTENT, () => {
    it('Call to setResourceContent without main property and freeze save', () => {
      let stateVal: any = { loaded: {} };
      let resourceVal: any = { id: '22', mainProperty: '', refProps: { el1: { get: () => 'valEl1' } } };
      let resultVal = { dataRes: 'dataValResponse' };

      const setVueMock = jest.spyOn(Vue, 'set');

      setVueMock.mockImplementation((state: any, stateProp: any, val: any) => {
        expect(state).toEqual(stateVal.loaded);
        expect(stateProp).toEqual(resourceVal.id);
        expect(val).toEqual(resultVal);
        expect(() => {
          val.dataRes = 'otherData';
        }).toThrowError();
      });

      expect(
        resourceMutations[MUT.Resource.SET_RESOURCE_CONTENT](stateVal, {
          result: resultVal,
          resource: resourceVal,
          freeze: true,
        }),
      ).toEqual(stateVal);
    });

    it('Call to setResourceContent with main property and not freeze save', () => {
      let stateVal: any = { loaded: {} };
      let resourceVal: any = {
        id: '22',
        mainProperty: 'elemMain',
        refProps: { elemMain: { get: () => 'ValElementMain' } },
      };
      let resultVal = { dataRes: 'dataValResponse' };

      const setVueMock = jest.spyOn(Vue, 'set');

      setVueMock.mockImplementationOnce((state: any, stateProp: any, val: any) => {
        expect(state).toEqual(stateVal.loaded);
        expect(stateProp).toEqual(resourceVal.id);
        expect(val).toEqual({});
        state[stateProp] = val;
      });

      setVueMock.mockImplementationOnce((state: any, stateProp: any, val: any) => {
        expect(state).toEqual({});
        expect(stateProp).toEqual('ValElementMain');
        expect(val).toEqual(resultVal);
        expect(
          (() => {
            val.dataRes = 'otherData';
          })(),
        ).toBeUndefined();
      });

      expect(
        resourceMutations[MUT.Resource.SET_RESOURCE_CONTENT](stateVal, {
          result: resultVal,
          resource: resourceVal,
          freeze: false,
        }),
      ).toEqual(stateVal);
    });
  });

  describe(MUT.Resource.SET_RESOURCE_AS_LOADING, () => {
    it('Call to setResourceAsLoading without main property', () => {
      let stateVal: any = { loaded: {} };
      let resourceVal: any = { id: '22', mainProperty: '' };

      const setVueMock = jest.spyOn(Vue, 'set');

      setVueMock.mockImplementation((state: any, stateProp: any, val: any) => {
        expect(state).toEqual(stateVal.loaded);
        expect(stateProp).toEqual(resourceVal.id);
        expect(val).toEqual(ENUM.ResourceState.LOADING);
      });

      expect(resourceMutations[MUT.Resource.SET_RESOURCE_AS_LOADING](stateVal, { resource: resourceVal })).toEqual(
        stateVal,
      );
    });

    it('Call to setResourceAsLoading with main property', () => {
      let stateVal: any = { loaded: {} };
      let resourceVal: any = {
        id: '22',
        mainProperty: 'elemMain',
        refProps: { elemMain: { get: () => 'ValElementMain' } },
      };

      const setVueMock = jest.spyOn(Vue, 'set');

      setVueMock.mockImplementationOnce((state: any, stateProp: any, val: any) => {
        expect(state).toEqual({});
        expect(stateProp).toEqual('22');
        expect(val).toEqual({});
        state[stateProp] = val;
      });

      setVueMock.mockImplementationOnce((state: any, stateProp: any, val: any) => {
        expect(state).toEqual({});
        expect(stateProp).toEqual('ValElementMain');
        expect(val).toEqual(ENUM.ResourceState.LOADING);
        state[stateProp] = val;
      });

      expect(resourceMutations[MUT.Resource.SET_RESOURCE_AS_LOADING](stateVal, { resource: resourceVal })).toEqual(
        stateVal,
      );
      expect(stateVal).toEqual({ loaded: { '22': { ValElementMain: ENUM.ResourceState.LOADING } } });
    });
  });

  describe(MUT.Resource.CLEAN, () => {
    it('Call to clean', () => {
      let stateVal: any = { loaded: { res1: { val1: 'val1' }, res2: { val21: 'val21' } } };

      expect(resourceMutations[MUT.Resource.CLEAN](stateVal, { resourceId: 'res1' })).toEqual(stateVal);
      expect(stateVal).toEqual({ loaded: { res2: { val21: 'val21' } } });
    });
  });

  describe(MUT.Resource.CLEAN_ALL, () => {
    it('Call to cleanAll', () => {
      let stateVal: any = { loaded: { res1: { val1: 'val1' }, res2: { el1: 'el1' } } };

      const setVueMock = jest.spyOn(Vue, 'set');

      setVueMock.mockImplementation((state: any, stateProp: any, val: any) => {
        state[stateProp] = val;
      });

      expect(resourceMutations[MUT.Resource.CLEAN_ALL](stateVal)).toEqual(stateVal);
      expect(stateVal).toEqual({ loaded: {} });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
