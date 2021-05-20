import '@COMMONS/utils/main/js-enchancement';
import Vue from 'vue';
import {} from '../flow-edit/store-flow-edit';

describe('mut-flow-edit.ts', () => {
  // describe(MUT.DynamicDashboard.ADD_DYNAMIC_COMPONENT, () => {
  //   let state = { items: [] };
  //   let component1 = { data: 'val1' };
  //   let component2: DynamicComponent = {
  //     id: '12',
  //     dimensions: { x: 10, y: 10 },
  //     position: { x: 10, y: 10 },
  //     refComponent: { name: 'View1' },
  //   };
  //   beforeAll(() => {
  //     jest.spyOn(Vue, 'set').mockImplementation((stateItems, componentId, component) => {
  //       expect(stateItems).toBe(state.items);
  //       expect(componentId).toBeDefined();
  //       //@ts-ignore
  //       state.items[componentId] = component;
  //     });
  //   });
  //   it('Call to addDynamicComponent without id', () => {
  //     //@ts-ignore
  //     dynamicDashboardMutations[MUT.DynamicDashboard.ADD_DYNAMIC_COMPONENT](state, { component: component1 });
  //     //@ts-ignore
  //     expect(state.items[component1.id]).toBeDefined();
  //   });
  //   it('Call to addDynamicComponent with id', () => {
  //     //@ts-ignore
  //     dynamicDashboardMutations[MUT.DynamicDashboard.ADD_DYNAMIC_COMPONENT](state, { component: component2 });
  //     //@ts-ignore
  //     expect(state.items[component2.id].id).toBeDefined();
  //   });
  //   afterAll(() => {
  //     jest.clearAllMocks();
  //   });
  // });
  // describe(MUT.DynamicDashboard.REMOVE_DYNAMIC_COMPONENT, () => {
  //   let state = { items: [] };
  //   let componentVal: DynamicComponent = {
  //     id: '12',
  //     dimensions: { x: 10, y: 10 },
  //     position: { x: 10, y: 10 },
  //     refComponent: { name: 'View1' },
  //   };
  //   //@ts-ignore
  //   state.items[componentVal.id] = componentVal;
  //   it('Call to removeDynamicComponent', () => {
  //     //@ts-ignore
  //     dynamicDashboardMutations[MUT.DynamicDashboard.REMOVE_DYNAMIC_COMPONENT](state, { id: componentVal.id });
  //     //@ts-ignore
  //     expect(Object.keys(state.items)).toHaveLength(0);
  //   });
  // });
  // describe(MUT.DynamicDashboard.MODIFY_DYNAMIC_COMPONENT, () => {
  //   let state = { items: [] };
  //   let componentVal: DynamicComponent = {
  //     id: '12',
  //     dimensions: { x: 10, y: 10 },
  //     position: { x: 10, y: 10 },
  //     refComponent: { name: 'View1' },
  //   };
  //   let componentValMod: DynamicComponent = {
  //     id: '12',
  //     dimensions: { x: 10, y: 10 },
  //     position: { x: 10, y: 10 },
  //     refComponent: { name: 'View123' },
  //   };
  //   //@ts-ignore
  //   state.items[componentVal.id] = componentVal;
  //   it('Call to removeDynamicComponent', () => {
  //     jest.spyOn(Vue, 'set').mockImplementation((stateItems, componentId, component) => {
  //       //@ts-ignore
  //       state.items[componentId] = component;
  //     });
  //     //@ts-ignore
  //     dynamicDashboardMutations[MUT.DynamicDashboard.MODIFY_DYNAMIC_COMPONENT](state, { component: componentValMod });
  //     //@ts-ignore
  //     expect(state.items[componentVal.id]).toEqual(componentValMod);
  //   });
  //   afterAll(() => {
  //     jest.clearAllMocks();
  //   });
  // });
});
