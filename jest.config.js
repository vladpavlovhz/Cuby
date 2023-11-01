// module.exports = {
//     preset: '@testing-library/svelte',
//     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
//     transform: {
//       '^.+\\.svelte$': 'svelte-jester',
//       '^.+\\.js$': 'babel-jest',
//     },
//   };

module.exports = {
  moduleFileExtensions: ['mjs', 'svelte'],
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  testPathIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.svelte', 'src/**/*.js'],
  coveragePathIgnorePatterns: ['node_modules'],
};


  