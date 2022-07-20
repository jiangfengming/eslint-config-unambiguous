# eslint-config-unambiguous
Unambiguous eslint rules.

## Install

```
npm install eslint eslint-config-unambiguous --save-dev
```

## Usage:
Create `.eslintrc.js` at the root of your project:

```js
module.exports = {
  extends: 'unambiguous',

  // set env
  env: {
    browser: true,
    node: true
  },

  // overrides
  "rules": {
    // ...
  }
};
```
