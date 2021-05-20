// import '@COMMONS/utils/main/js-enchancement';

// import Vue from 'vue';
// import { DynamicComponent } from '../field-entities/store-dynamic-dashboard

// describe('act-dynamic-dashboard.ts', () => {
//   describe(ACT.DynamicDashboard.addDynamicComponent, () => {
//     it('Call to addDynamicComponent', () => {
//       let params = {
//         position: { x: 10, y: 10 },
//         schema: { dimensions: { x: 2, y: 2 }, refComponent: { name: 'View1' } },
//       };
//       let hopedComp = { position: params.position, ...params.schema };
//       let commit = (type: MUT.DynamicDashboard, data: any) => {
//         expect(type).toEqual(MUT.DynamicDashboard.ADD_DYNAMIC_COMPONENT);
//         expect(data.component).toEqual(hopedComp);
//       };
//       //@ts-ignore
//       dynamicDashboardActions[ACT.DynamicDashboard.addDynamicComponent]({ commit }, params);
//     });
//   });

//   describe(ACT.DynamicDashboard.removeDynamicComponent, () => {
//     it('Call to removeDynamicComponent', () => {
//       let params = { id: '21' };
//       let commit = (type: MUT.DynamicDashboard, data: any) => {
//         expect(type).toEqual(MUT.DynamicDashboard.REMOVE_DYNAMIC_COMPONENT);
//         expect(data.id).toEqual(params.id);
//       };
//       //@ts-ignore
//       dynamicDashboardActions[ACT.DynamicDashboard.removeDynamicComponent]({ commit }, params);
//     });
//   });

//   describe(ACT.DynamicDashboard.modifyDynamicComponent, () => {
//     it('Call to modifyDynamicComponent', () => {
//       let componentVal = {
//         id: '21',
//         position: { x: 10, y: 10 },
//         dimensions: { x: 2, y: 2 },
//         refComponent: { name: 'View1' },
//       };
//       let commit = jest.fn((type: MUT.DynamicDashboard, data: any) => {
//         expect(type).toEqual(MUT.DynamicDashboard.MODIFY_DYNAMIC_COMPONENT);
//         expect(data).toEqual({ component: componentVal });
//       });
//       let context: any = { getters: {}, commit };
//       context.getters.canPlaceDynamicComponentInPosition = () => true;
//       //@ts-ignore
//       dynamicDashboardActions[ACT.DynamicDashboard.modifyDynamicComponent](context, { component: componentVal });
//     });
//   });
// });
