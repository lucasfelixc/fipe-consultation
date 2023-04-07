import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@/components/(.*)$': '<rootDir>/src/components/$1',
    '@/templates/(.*)$': '<rootDir>/src/templates/$1',
    '@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/context/(.*)$',
    '<rootDir>/src/services/(.*)$',
    '<rootDir>/src/styles/(.*)$',
    '<rootDir>/src/utils/(.*)$',
  ],
};

export default createJestConfig(config);
