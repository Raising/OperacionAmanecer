module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    '@COMMONS/(.*)$': '<rootDir>/src/commons/$1',
    '@MODELS/(.*)$': '<rootDir>/models/$1',
    '@SOLUTION/(.*)$': '<rootDir>/src/solution/$1',
    '@DASHBOARD/(.*)$': '<rootDir>/src/modules/dashboard/$1',
    '@FLOWEDIT/(.*)$': '<rootDir>/src/modules/flow-edit/$1',
    '@HQ/(.*)$': '<rootDir>/src/modules/headquarters/$1',
  },
};
