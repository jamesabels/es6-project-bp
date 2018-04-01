module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "eslintIgnore": ["webpack.config.js", "karma.conf.js", 'tests/**/*.js']
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "no-console": [
            "error",
            { allow: ['log', 'warn', 'error'] }
        ],
        "linebreak-style": [
            "error",
            "unix"
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