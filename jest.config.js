module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: {
                // allow js in typescript
                allowJs: true,
            },
        },
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "ts-jest",
    roots: ["./src"],
    testEnvironment: "node",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    transform: { "\\.ts$": ["ts-jest"] },
};
