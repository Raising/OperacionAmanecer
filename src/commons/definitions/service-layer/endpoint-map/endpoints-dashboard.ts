import { ENUM, RES } from '@COMMONS/constants';
import { resourceParam } from '@COMMONS/utils/conectivity/location-tools';
import { Backend } from '../backend-projects';
import OPS = ENUM.ConectionOperation;
import Resource from '@COMMONS/utils/conectivity/resource';
import { UserSesion } from '@/commons/store/session/store-session';

let mockId = 1;
const dataLoadMockEntity = (country: string, criticality: number, status: string, name: string) => {
  return { id: mockId++, country, status, criticality, name };
};

let dataloadMock: any[] = [];
['ES', 'FR', 'PT', 'PE'].forEach((country) =>
  [1, 2, 3, 4].forEach((crit) =>
    ['done', 'blocked', 'reviewd'].forEach((status) =>
      dataloadMock.push(dataLoadMockEntity(country, crit, status, `${country}_${crit}_${status}`)),
    ),
  ),
);

const locations: {
  [resource in ENUM.CommonsResource | RES]?: Partial<
    { [verb in OPS]?: resourceParam.locationConfig } & { server?: string }
  >;
} = {
  [ENUM.CommonsResource.DATA_LOAD]: {
    [OPS.COLLECTION_FETCH]: {
      path: '',
      mock: dataloadMock,
      mapResult: (resource: Resource) => (result: any[]) => {
        let filteredResult = result;
        if (resource.filters.country.get()) {
          filteredResult = result.filter((el) => el.country === resource.filters.country.get());
        }
        return filteredResult;
      },
    },
  },
};

export default locations;
