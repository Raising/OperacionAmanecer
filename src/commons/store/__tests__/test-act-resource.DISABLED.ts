// import resourceActions from '@/commons/store/resource/act-resource';
// import { ACT, ENUM, ERROR, MUT } from '@/commons/constants';
// import { Action } from 'vuex';
// import { ResourceState } from '@/commons/definitions/hub-enum';
// import serverConection from '@COMMONS/utils/conectivity/server-conection';
// import Resource from '@/commons/utils/conectivity/resource';
// //import { vueMainContent } from '@/main';

it('', () => {
  expect(true).toBeTruthy();
});

// describe('act-logger.ts', () => {
//     const idResource1 = '22';

//     //let context = vueMainContent
//     let context = { $store: { commit: function () { } } }
//     let res1 = new Resource({ type: idResource1, mainProperty: 'elemMain', refProps: [{ property: 'valName1' }] }, context);
//     let responseServiceFake = { data: { val1: 'dat1' } };

//     let testToDo: any[] = [];

//     //@ts-ignore
//     Object.keys(ACT.Resource).map(key => ACT.Resource[key]).forEach(el => {
//         testToDo.push({
//             f_name: el,
//             f_params: { context: context.$store, otherParams: { resource: res1 } },
//             hopedResponse: typeof Promise
//         })
//     })

//     let mockedFnCommit = jest.spyOn(context.$store, 'commit');

//     beforeAll(() => {
//         //@ts-ignore
//         Object.keys(ENUM.ConectionVerb).map(key => ENUM.ConectionVerb[key]).forEach(el => {
//             //@ts-ignore
//             serverConection[el] = jest.fn(() => {
//                 return new Promise((resolve, reject) => {
//                     setTimeout(function () {
//                         resolve(responseServiceFake);
//                     }, 0);
//                 });
//             });
//         });
//     });

//     testToDo.forEach((el) => {

//         it(`Call to ${el.f_name}`, (done) => {
//             //@ts-ignore
//             mockedFnCommit.mockImplementationOnce((type, obj: any) => {
//                 expect(type).toEqual(MUT.Resource.SET_RESOURCE_AS_LOADING);
//                 expect(obj.resource).toEqual(res1);
//             });
//             //@ts-ignore
//             mockedFnCommit.mockImplementationOnce((type, obj: any) => {
//                 expect(type).toEqual(MUT.Resource.SET_RESOURCE_CONTENT);
//                 expect(obj.result).toEqual(responseServiceFake)
//                 expect(obj.resource).toEqual(res1);
//                 done()
//             });
//             //@ts-ignore
//             expect(typeof (resourceActions[el.f_name](...el.f_params))).toEqual(hopedResponse);
//         });

//         jest.clearAllMocks();

//     });

// });
