module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "rules": {
        'comma-spacing': [
            "error", { "before": false, "after": true }
        ],
        'computed-property-spacing': [
            "error", "never"
        ],
        'func-style': [
            "error", "declaration", { "allowArrowFunctions": true }
        ],
        'function-call-argument-newline': [
            "error", "never"
        ],
        "lines-between-class-members": [
            "error", "always"
        ],
        "new-cap": [
            "error", { "newIsCap": true, "capIsNew": true }
        ],
        "no-unneeded-ternary": [ 
            "error", {"defaultAssignment": false}
        ],
        "no-multiple-empty-lines": [
            "error", { "max": 1, "maxEOF": 1, "maxBOF": 1 }
        ],
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
            { "blankLine": "any",    "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}
        ],
        "semi-style": [
            "error", "last"
        ],
        "space-infix-ops": [
            "error", { "int32Hint": false }
        ],
        "space-before-function-paren": [
            "error", "never"
        ],
        "arrow-spacing": [
            "error", { "before": true, "after": true }
        ],
        "no-useless-constructor": [
            "error"
        ],
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};