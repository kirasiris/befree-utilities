export default {
	preset: "ts-jest/presets/default-esm", // This enables support for ESM in ts-jest
	testEnvironment: "node", // Running in Node.js environment
	roots: ["<rootDir>/__tests__", "<rootDir>/src"], // Look for tests and source in these directories
	testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
	moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Files to process
	transform: {
		"^.+\\.tsx?$": ["ts-jest", { useESM: true }], // Enable ESM support in ts-jest
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Enable babel-jest for JavaScript files
	},
};
