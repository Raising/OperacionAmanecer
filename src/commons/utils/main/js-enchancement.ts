interface Array<T> {
  $firstDefined(): T;
}

interface Object {
  $functionObjectAgregation(name: string, aditionalObjectProperties: any): () => Object;
  $getPropertyByPath(path?: string): any;
  $map(mapFunction: (element: any) => any): any;
  $filter(filterFunction: (element: any) => any): any;
  $singleDeepMerge: (firstObj: any) => any;
  $deepMerge: (baseObj: any, firstObj: any, secondObj: any) => any;
  $setCamelCasePropertyNamesRecursive: (type: 'upper' | 'lower') => any;
  $id: string;
  _lastID: number;
}

interface Function {
  $functionObjectAgregation(name: string, aditionalObjectProperties: any): () => Object;
}

interface String {
  $pascalToKebabCase: () => string;
  $autoId: () => string;
}

interface Number {
  $lerp: (min:number,max:number) => number
}

Object.defineProperty(Object.prototype, '_lastID', {
  writable: true,
  value: 0,
});

Object.defineProperty(Object.prototype, '$id', {
  get: function() {
    if (this._ID === undefined) {
      this._ID = Object.prototype._lastID++;
    }
    return this._ID;
  },
});

Object.defineProperty(Object.prototype, '$setCamelCasePropertyNamesRecursive', {
  writable: false,
  value: function(type: 'upper' | 'lower', maps?: { [newProp: string]: string }) {
    let newObject: { [pop: string]: any } = {};
    if (typeof this !== 'object' || this === null) {
      return this;
    } else if (Array.isArray(this)) {
      return this.map((el: any) => el.$setCamelCasePropertyNamesRecursive(type, maps));
    } else {
      Object.keys(this).map((propName: string) => {
        let propNewName;
        if (maps && maps[propName] !== undefined) {
          propNewName = maps[propName];
        } else {
          propNewName =
            (type === 'upper' ? propName.charAt(0).toUpperCase() : propName.charAt(0).toLowerCase()) +
            propName.slice(1);
        }
        newObject[propNewName] =
          this[propName] === null || this[propName] === undefined
            ? this[propName]
            : this[propName].$setCamelCasePropertyNamesRecursive(type, maps);
      });
    }
    return newObject;
  },
});

//create  function that generate the same object than the starting one plus the properties of the object pased as param
Object.defineProperty(Object.prototype, '$functionObjectAgregation', {
  writable: false,
  value: function(name: string, aditionalObjectProperties: any) {
    return function(this: any) {
      return Object.assign({}, this, {
        [name]:
          typeof aditionalObjectProperties === 'function'
            ? aditionalObjectProperties.call(this, this)
            : aditionalObjectProperties,
      });
    };
  },
});

Object.defineProperty(Object.prototype, '$deepMerge', {
  writable: false,
  value: function(baseObj: any, ...mergeableObjets: Array<any>) {
    Array.from(mergeableObjets).reduce((baseObjAcc, obj: any) => {
      return baseObjAcc.$singleDeepMerge(obj);
    }, baseObj);

    return baseObj;
  },
});

Object.defineProperty(Object.prototype, '$singleDeepMerge', {
  writable: false,
  value: function(this: any, firstObj: any) {
    Object.keys(firstObj).map((key) => {
      let objectTypeName = Object.prototype.toString.call(firstObj[key]);

      if (objectTypeName !== '[object Object]' && objectTypeName !== '[object Array]') {
        // nodo hoja
        this[key] = firstObj[key];
      } else {
        if (this[key] === undefined) {
          if (objectTypeName === '[object Object]') {
            this[key] = {};
          } else {
            this[key] = [];
          }
        }
        this[key] = this[key].$singleDeepMerge(firstObj[key]);
      }
    });
    return this;
  },
});

//create  function that generate the same object than the one created by the starting function plus the properties of the object pased as param
Object.defineProperty(Function.prototype, '$functionObjectAgregation', {
  writable: false,
  value: function(name: string, aditionalObjectProperties: any) {
    const previousObjectGenerator = this;
    return function(this: any, param: any) {
      return Object.assign({}, previousObjectGenerator.call(this, param), {
        [name]:
          typeof aditionalObjectProperties === 'function'
            ? aditionalObjectProperties.call(this, param)
            : aditionalObjectProperties,
      });
    };
  },
});

/**
 * returns the child property of the object in the location dictated by the path param, no path param means the base object,
 * is undefined safe so it wont throw error if there is mising any of the nodes
 *
 * When reaching for elements of an array you can access to them for the id of the element instead of the array position
 * knowing the propertyName that represent the Id the format is some.path.array.[[propertyName||idValue]]
 *
 */
Object.defineProperty(Object.prototype, '$getPropertyByPath', {
  value: function(path?: string) {
    if (!path) return this;
    return path.split(/[.]+/).reduce(function(prev, key) {
      if (Array.isArray(prev) && key.startsWith('[[') && key.endsWith(']]')) {
        let [idPropertyName, value] = key.slice(2, -2).split('||');
        return prev.find((el) => el[idPropertyName] == value);
      }
      return prev !== undefined && prev !== null && prev !== null ? prev[key] : undefined;
    }, this);
  },
});

/**
 * works as the array map, iterating over the enumerable properties of the object but the params of the map function are the element and the key
 */
Object.defineProperty(Object.prototype, '$map', {
  value: function(mapFunction: Function) {
    return Object.keys(this).reduce((acc: any, key: string) => {
      acc[key] = mapFunction(this[key], key);
      return acc;
    }, {});
  },
});

/**
 * works as the array map, iterating over the enumerable properties of the object but the params of the map function are the element and the key
 */
Object.defineProperty(Object.prototype, '$filter', {
  value: function(filterFunction: Function) {
    return Object.keys(this).reduce((acc: any, key: string) => {
      if (filterFunction(this[key], key)) {
        acc[key] = this[key];
      }
      return acc;
    }, {});
  },
});

/**
 * return the first element of the array that is not undefined
 */
Object.defineProperty(Array.prototype, '$firstDefined', {
  value: function() {
    return this.reduce((acc: any, el: any) => {
      if (acc !== undefined) return acc;
      return el;
    });
  },
});

/**
 * return  create an object of arrays grouped by the property served indexed by the value of the property
 */
// type groupArray = {[groupSharedValue:string]:Array<any>};
// Object.defineProperty(Array.prototype, '$groupBy', {
//   value: function(groupProperty:string) {
//     let groupedObject :groupArray = {};

//     this.reduce((acc: groupArray, el: any) => {
//       let groupPropValue = el[groupProperty];
//       if (acc[groupPropValue] === undefined){
//         acc[groupPropValue] = [];
//       }
//       acc[groupPropValue].push(el);
//       return acc;
//     },groupedObject);
//   },
// });

/**
 *
 */
Object.defineProperty(String.prototype, '$pascalToKebabCase', {
  value: function() {
    return this.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  },
});

let CURRENT_ID = 0;
Object.defineProperty(String.prototype, '$autoId', {
  value: function() {
    return this + '_' + CURRENT_ID++;
  },
});


Object.defineProperty(Number.prototype, '$lerp', {
  value: function(min:number,max:number) {
    let dif = (max - min);
    return (this - min )/dif;
  },
});

