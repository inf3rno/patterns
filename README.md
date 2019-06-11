# patterns
[![Build Status](https://travis-ci.org/inf3rno/patterns.svg?branch=master)](https://travis-ci.org/inf3rno/patterns)
Parsing function parameter list even for ES6 syntax.

```sh
npm install @inf3rno/patterns
```

```js
var p = require("@inf3rno/patterns");
```

**quote**
```js
var azPattern = p.quote("a-z");
var azMatcher = p.compile(azPattern);
console.log(azMatcher.findNext("a-z")); // {value:[]}
console.log(azMatcher.findNext("abc")); // undefined
```