module.exports = {
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.jsx?$": `<rootDir>/test/jest-preprocess.js`,
    },
    testRegex: "(\\.|/)(test|spec)\\.([tj]sx?)$",
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/test/fileMock.js`,
    },
    moduleFileExtensions: [ "ts", "tsx", "js", "jsx", "json", "node" ],
    testPathIgnorePatterns: [`node_modules`, `.cache`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    setupFiles: [`<rootDir>/test/loadershim.js`],
};