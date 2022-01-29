import path from "path";

export default {
    "rootDir": path.resolve(".."),
    "roots": [
        "<rootDir>/lib",
        "<rootDir>/test/lib"
    ],
    "transform": {
        "^.+\\.ts$": "ts-jest"
    },
    "testRegex": "^.+spec\\.ts$",
    "moduleFileExtensions": ["ts", "js"],
    "collectCoverage": true,
    "collectCoverageFrom": ["<rootDir>/lib/**/*.ts"]
};
