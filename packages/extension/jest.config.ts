const JestConfig = {
  testTimeout: 20000,
  setupFiles: ['./jest.setup.ts'],
  verbose: true,
  preset: 'ts-jest',

  roots: ['<rootDir>'],
  rootDir: '.',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  // projects: ['<rootDir>/packages/client'],

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  testMatch: [
    '**/__test__/**/*.(spec|test).[jt]s?(x)',
    '**/*.(spec|test).ts?(x)',
    // '<rootDir>/packages/d42paas-official/**/*.(spec|test).ts?(x)',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  modulePaths: ['node_modules'],
  moduleDirectories: ['node_modules', 'packages/client/src'],
  transformIgnorePatterns: ['dist/'],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',

    '^~/(.*)$': '<rootDir>/src/$1',
  },
};

export default JestConfig;
