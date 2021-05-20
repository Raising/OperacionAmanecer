// import '@COMMONS/utils/main/js-enchancement';

// import Vue from 'vue';
// import { DashboardState, DynamicComponent } from '../field-entities/store-dynamic-dashboard

// const placementTestDefinition = (
//   id: string,
//   dimensions: { x: number; y: number },
//   position: { x: number; y: number },
//   result: boolean,
// ) => {
//   return {
//     obj: { id, dimensions, position, refComponent: { name: 'TEST' } },
//     expectedResponse: result,
//   };
// };

// describe('get-dynamic-dashboard.ts', () => {
//   let state: DashboardState = {
//     items: {
//       id1: { id: 'id1', dimensions: { x: 2, y: 1 }, position: { x: 0, y: 0 }, refComponent: { name: 'TEST' } },
//       id2: { id: 'id2', dimensions: { x: 4, y: 2 }, position: { x: 3, y: 0 }, refComponent: { name: 'TEST' } },
//       id3: { id: 'id3', dimensions: { x: 2, y: 3 }, position: { x: 0, y: 1 }, refComponent: { name: 'TEST' } },
//     },
//     dimensions: { x: 8, y: 4 },
//     avaliableSchemas: [],
//   };

//   describe('canPlaceDynamicComponentInPosition', () => {
//     let itemsToAdd = [
//       placementTestDefinition('id4', { x: 2, y: 2 }, { x: 3, y: 2 }, true),
//       placementTestDefinition('id5', { x: 2, y: 2 }, { x: 3, y: 1 }, false),
//       placementTestDefinition('id1', { x: 2, y: 1 }, { x: 1, y: 0 }, true),
//       placementTestDefinition('id6', { x: 2, y: 2 }, { x: 7, y: 3 }, false),
//       placementTestDefinition('id7', { x: 1, y: 1 }, { x: 7, y: 3 }, true),
//     ];

//     let testPositionResponse = (params: { obj: DynamicComponent; expectedResponse: boolean }, index: number) => {
//       it(`Call to canPlaceDynamicComponentInPosition - ${index}`, () => {
//         expect(dynamicDashboardGetters.canPlaceDynamicComponentInPosition(state)(params.obj)).toBe(
//           params.expectedResponse,
//         );
//       });
//     };

//     itemsToAdd.forEach(testPositionResponse);
//   });

//   describe('getInDashboardItems', () => {
//     expect(dynamicDashboardGetters.getInDashboardItems(state)()).toEqual(Object.values(state.items));
//   });

//   describe('getDashboardItemSchemas', () => {
//     expect(dynamicDashboardGetters.getDashboardItemSchemas(state)()).toEqual(state.avaliableSchemas);
//   });

//   describe('getDashboardDimensions', () => {
//     expect(dynamicDashboardGetters.getDashboardDimensions(state)()).toEqual(state.dimensions);
//   });
// });
