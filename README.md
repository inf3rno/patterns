# patterns
[![Build Status](https://travis-ci.org/inf3rno/patterns.svg?branch=master)](https://travis-ci.org/inf3rno/patterns)
Parsing function parameter list even for ES6 syntax.

```sh
npm install @inf3rno/patterns
```

```js
var p = require("@inf3rno/patterns");
```

**literal**

Takes the given string literally and creates a pattern from it.
```js
var azPattern = p.literal("a-z");
var azMatcher = p.compile(azPattern);
console.log(azMatcher.findNext("a-z")); // {Match object}
console.log(azMatcher.findNext("abc")); // undefined
```
*Note: you cannot inject regex code directly in this lib, you can only generate it.*

