module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/_{app,document}.tsx',
    '!**/tests/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  moduleDirectories: ['node_modules', './'],
}
