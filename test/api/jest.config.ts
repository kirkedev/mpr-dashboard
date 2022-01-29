import path from "path";

export default {
    "rootDir": path.resolve(".."),
    "roots": [
        "<rootDir>/api",
        "<rootDir>/test/api"
    ],
    "globalSetup": "./test/api/setup.ts",
    "globalTeardown": "./test/api/teardown.ts",
    "transform": {
        "^.+\\.ts$": "ts-jest"
    },
    "testRegex": "^.+spec\\.ts$",
    "moduleFileExtensions": ["ts", "js"],
    "collectCoverage": true,
    "collectCoverageFrom": ["<rootDir>/api/**/*.ts"]
};
