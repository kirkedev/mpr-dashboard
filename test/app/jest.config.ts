import path from "path";

export default {
    "rootDir": path.resolve(".."),
    "roots": [
        "<rootDir>/app",
        "<rootDir>/test/app"
    ],
    "transform": {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.svelte$": "svelte-jester"
    },
    "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"],
    "testEnvironment": "jsdom",
    "testRegex": "^.+spec\\.ts$",
    "moduleFileExtensions": ["js", "ts", "svelte"],
    "collectCoverage": true,
    "collectCoverageFrom": ["<rootDir>/app/**/*.ts", "<rootDir>/app/**/*.svelte"]
};
