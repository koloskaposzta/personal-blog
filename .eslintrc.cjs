module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "node": true
},
    "extends": "plugin:astro/recommended",
    "overrides": [
        {
            "files": ["*.astro"],
            "parser": "astro-eslint-parser"
        }
    ]
}