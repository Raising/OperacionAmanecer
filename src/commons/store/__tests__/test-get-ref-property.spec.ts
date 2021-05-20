import refPropertyGetters from '@/commons/store/refProperty/get-ref-property';

describe('get-ref-property.ts', () => {
  describe('fieldByPath', () => {
    it('Call', () => {
      let state = {
        home: {
          prop1: 'val1',
        },
      };

      //@ts-ignore
      expect(refPropertyGetters.fieldByPath(state)('home.prop1')).toEqual(state.home.prop1);
    });
  });
});
