module.exports = {
	rootDir: __dirname,
	collectCoverageFrom: ['src/**/*.{js,ts,tsx}', '!**/*-test.{js,ts,tsx}'],
	preset: 'solid-jest/preset/browser',
	// preset: 'solid-jest/preset/node', // for node
	projects: ['<rootDir>/jest.config.js'],
	setupFilesAfterEnv: ['raf/polyfill', '@wordpress/jest-console', '<rootDir>/jest.setup.js']
};
