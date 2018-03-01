module.exports = {
    setupFiles: [
        "./jest.setup.js"
    ],
    transform: {
        ".(ts|tsx)": "./node_modules/ts-jest/preprocessor.js"
    },
    testRegex: "(/src/.*\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],
    moduleNameMapper: {
        "\\.(css|sss)$": "identity-obj-proxy"
    },
    moduleDirectories: [
        "node_modules",
        "./src"
    ]
}