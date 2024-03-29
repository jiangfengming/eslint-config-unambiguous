module.exports = {
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  "env": {
    "es6": true
  },

  // https://github.com/eslint/eslint/blob/master/conf/eslint.json
  "extends": "eslint:recommended",

  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 13,
    "ecmaFeatures": {
      "jsx": true
    }
  },

  // http://eslint.org/docs/rules/
  "rules": {
    /*
     * Possible Errors
     */

    // disallow unnecessary parentheses
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false }],

    // disallow negating the left operand of relational operators
    "no-unsafe-negation": "error",

    // enforce valid JSDoc comments
    "valid-jsdoc": "error",

    /*
     * Best Practices
     */

    // enforce return statements in callbacks of array methods
    "array-callback-return": "error",

    // enforce consistent brace style for all control statements
    "curly": ["error", "all"],

    // enforce consistent newlines before and after dots
    "dot-location": ["error", "property"],

    // enforce dot notation whenever possible
    "dot-notation": "error",

    // require the use of === and !==
    "eqeqeq": "error",

    // disallow the use of arguments.caller or arguments.callee
    "no-caller": "error",

    // disallow unnecessary calls to .bind()
    "no-extra-bind": "error",

    // disallow unnecessary labels
    "no-extra-label": "error",

    // disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": "error",

    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "error",

    // disallow the use of eval()-like methods
    "no-implied-eval": "error",

    // disallow the use of the __iterator__ property
    "no-iterator": "error",

    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",

    // disallow multiple spaces
    "no-multi-spaces": "error",

    // disallow new operators with the String, Number, and Boolean objects
    "no-new-wrappers": "error",

    // disallow octal escape sequences in string literals
    "no-octal-escape": "error",

    // disallow the use of the __proto__ property
    "no-proto": "error",

    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",

    // disallow unused expressions
    "no-unused-expressions": "error",

    // disallow unnecessary calls to .call() and .apply()
    "no-useless-call": "error",

    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": "error",

    // disallow unnecessary escape characters
    "no-useless-escape": "error",

    // disallow void operators
    "no-void": "error",

    // require parentheses around immediate function invocations
    "wrap-iife": "error",

    // require or disallow “Yoda” conditions
    "yoda": "error",

    /*
     * Variables
     */

    // disallow labels that share a name with a variable
    "no-label-var": "error",

    // disallow initializing variables to undefined
    "no-undef-init": "error",

    /*
     * Node.js and CommonJS
     */

    // disallow new operators with calls to require
    "no-new-require": "error",

    /*
     * Stylistic Issues
     */

    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": "error",

    // enforce consistent spacing inside single-line blocks
    "block-spacing": "error",

    // enforce consistent brace style for blocks
    "brace-style": "error",

    // require or disallow trailing commas
    "comma-dangle": "error",

    // enforce consistent spacing before and after commas
    "comma-spacing": "error",

    // enforce consistent comma style
    "comma-style": "error",

    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": "error",

    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": "error",

    // enforce consistent indentation
    "indent": ["error", 2, { "SwitchCase": 1 }],

    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": "error",

    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": "error",

    // enforce consistent spacing before and after keywords
    "keyword-spacing": "error",

    // enforce consistent linebreak style
    "linebreak-style": "error",

    // enforce a maximum line length
    "max-len": ["error", {
      "code": 120,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],

    // require constructor names to begin with a capital letter
    "new-cap": "error",

    // require parentheses when invoking a constructor with no arguments
    "new-parens": "error",

    // disallow Array constructors
    "no-array-constructor": "error",

    // disallow multiple empty lines
    "no-multiple-empty-lines": ["error", { "max": 1 }],

    // disallow Object constructors
    "no-new-object": "error",

    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "error",

    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": "error",

    // disallow whitespace before properties
    "no-whitespace-before-property": "error",

    // enforce consistent spacing inside braces
    "object-curly-spacing": ["error", "always"],

    // enforce placing object properties on separate lines
    "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],

    // require or disallow padding within blocks
    "padded-blocks": ["error", "never"],

    // require or disallow padding lines between statements
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "import", "next": "*"},
      { "blankLine": "never", "prev": "import", "next": "import"},

      {
          "blankLine": "always",
          "prev": "*",
          "next": ["block-like", "multiline-expression", "multiline-const", "multiline-let", "export"]
      },

      {
        "blankLine": "always",
        "prev": ["block-like", "multiline-expression", "multiline-const", "multiline-let"],
        "next": "*"
      },

      { "blankLine": "any", "prev": "export", "next": "export" }
    ],

    // require quotes around object literal property names
    "quote-props": ["error", "as-needed"],

    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": ["error", "single"],

    // enforce consistent spacing before and after semicolons
    "semi-spacing": "error",

    // require or disallow semicolons instead of ASI
    "semi": "error",

    // enforce consistent spacing before blocks
    "space-before-blocks": "error",

    // enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": ["error", "never"],

    // enforce consistent spacing inside parentheses
    "space-in-parens": "error",

    // require spacing around infix operators
    "space-infix-ops": "error",

    // enforce consistent spacing before or after unary operators
    "space-unary-ops": "error",

    // enforce consistent spacing after the // or /* in a comment
    "spaced-comment": "error",

    // require or disallow Unicode byte order mark (BOM)
    "unicode-bom": "error",


    /*
     * ECMAScript 6
     */

    // require braces around arrow function bodies
    "arrow-body-style": "error",

    // require parentheses around arrow function arguments
    "arrow-parens": ["error", "as-needed"],

    // enforce consistent spacing before and after the arrow in arrow functions
    "arrow-spacing": "error",

    // enforce consistent spacing around * operators in generator functions
    "generator-star-spacing": ["error", "after"],

    // disallow duplicate module imports
    "no-duplicate-imports": "error",

    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": "error",

    // disallow unnecessary constructors
    "no-useless-constructor": "error",

    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "error",

    // require let or const instead of var
    "no-var": "error",

    // require or disallow method and property shorthand syntax for object literals
    "object-shorthand": "error",

    // require arrow functions as callbacks
    "prefer-arrow-callback": "error",

    // require const declarations for variables that are never reassigned after declared
    "prefer-const": "error",

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "error",

    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": "error",

    // require or disallow spacing around embedded expressions of template strings
    "template-curly-spacing": "error",

    // require or disallow spacing around the * in yield* expressions
    "yield-star-spacing": "error",
  }
}
