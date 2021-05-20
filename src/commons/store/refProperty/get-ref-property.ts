export default {
  fieldByPath: (state: any) => (path: string) => {
    return path.split(/[.[\]]+/).reduce(function(prev, key) {
      return prev !== undefined ? prev[key] : undefined;
    }, state);
  },
};
