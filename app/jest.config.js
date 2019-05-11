module.exports = {
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
	setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
	testMatch: ['**/__tests__/**/*.test.tsx'],
	coveragePathIgnorePatterns: ['node_modules', 'coverage', '/__.*__/', 'jest.config.js'],
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['**/**/*.tsx?'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'test-utils/(.*)': '<rootDir>/src/test-utils/$1',
		'Components/(.*)': '<rootDir>/src/components/$1',
		'Views/(.*)': '<rootDir>/src/views/$1',
		'Types/(.*)': '<rootDir>/src/types/$1',
		'Providers/(.*)': '<rootDir>/src/providers/$1',
	},
}
