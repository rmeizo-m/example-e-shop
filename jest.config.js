module.exports = {
  verbose: true,
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js|jsx}'],
  coverageReporters: ['json', 'lcov', 'clover'],
  setupTestFrameworkScriptFile: '<rootDir>/src/testUtils/setupEnzyme.js',
  moduleNameMapper: {
    '\\.(svg|pcss|jpg|png)$': '<rootDir>/src/testUtils/svgMock.js',
  },
};
