import resourceGetters from '@/commons/store/resource/get-resource';
import { ResourceState } from '../resource/store-resource';

describe('get-resource.ts', () => {
  describe('resourceContent', () => {
    let idResource1 = 'idResource1';
    let idResource2 = 'idResource2';
    let state: ResourceState = {
      loaded: {
        [idResource1]: {
          values: {
            data1: 'content1',
          },
        },
        [idResource2]: {
          data23: 'content23',
        },
      },
      filters: {},
      props: {},
    };

    let res1 = {
      id: idResource1,
      mainProperty: 'elemMain',
      refProps: {
        elemMain: {
          get: () => 'values',
        },
      },
    };

    let res2 = {
      id: idResource2,
      mainProperty: '',
      refProps: {
        elem: {
          get: () => 'values',
        },
      },
    };

    it('Call to resourceContent with main property', () => {
      //@ts-ignore
      expect(resourceGetters.resourceContent(state)(res1)).toEqual({
        data1: 'content1',
      });
    });
    it('Call to resourceContent without main property', () => {
      //@ts-ignore
      expect(resourceGetters.resourceContent(state)(res2)).toEqual({
        data23: 'content23',
      });
    });
  });

  describe('resourceProp', () => {
    let mock_fn = jest.fn(() => {
      return 'valRouted';
    });

    let state: any = {
      loaded: {
        '22': {
          values: {
            data1: { val1: 'content1' },
          },
        },
      },
    };

    state.loaded['22'].values.__proto__.$getPropertyByPath = mock_fn;

    it('Call to resourceProp with path', () => {
      let params = {
        type: 'loaded',
        resourceId: 22,
        property: 'values',
      };
      //@ts-ignore
      expect(resourceGetters.resourceProp(state)(params)).toEqual({ data1: { val1: 'content1' } });
    });

    it('Call to resourceProp without path', () => {
      let params = {
        type: 'loaded',
        resourceId: 22,
        property: 'values',
      };
      //@ts-ignore
      expect(resourceGetters.resourceProp(state)(params, 'data1')).toEqual('valRouted');
    });
  });
});
