# eslint-config-enough
The most useful eslint rules that just enough.

Usage:
Create `.eslintrc.js` at the root of your project:
```js
module.exports = {
  extends: 'enough',

  // es6 has set by default
  env: {
    browser: true,
    commonjs: true
  },

  // overrides
  "rules": {
  }
}
```
