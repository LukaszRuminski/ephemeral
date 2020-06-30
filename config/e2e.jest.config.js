module.exports = {
    "preset": "jest-puppeteer",
    "transform": {
        "^.+\\.js$": "babel-jest"
    },
    "modulePathIgnorePatterns": [
        "<rootDir>/temp"
    ],
    "verbose": true,
    "rootDir": "..",
    "roots": ["<rootDir>"],
    "testMatch": ["**/*.e2e.[jt]s?(x)"],
    "testPathIgnorePatterns": [
        "<rootDir>/.next/",
        "<rootDir>/out/",
        "<rootDir>/node_modules/",
    ]
}
