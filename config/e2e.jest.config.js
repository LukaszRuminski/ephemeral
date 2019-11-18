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
    "roots": ["<rootDir>","<rootDir>/e2e/"],
    "testMatch": ["**/e2e/*.test.[jt]s?(x)"],
    "testPathIgnorePatterns": [
        "<rootDir>/.next/",
        "<rootDir>/out/",
        "<rootDir>/node_modules/",
    ]
}
