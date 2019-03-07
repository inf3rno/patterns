# patterns
[![Build Status](https://travis-ci.org/inf3rno/patterns.svg?branch=master)](https://travis-ci.org/inf3rno/patterns)
Parsing function parameter list even for ES6 syntax.

```sh
npm install @inf3rno/patterns
```

```js
var patterns = require("@inf3rno/patterns");
```

**quote**
```js
var pattern = new RegExp(patterns.quote("a-z"));
console.log(pattern.test("a-z")); // true
console.log(pattern.test("abc")); // false
```