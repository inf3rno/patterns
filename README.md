# patterns
[![Build Status](https://travis-ci.org/inf3rno/patterns.svg?branch=master)](https://travis-ci.org/inf3rno/patterns)
Parsing function parameter list even for ES6 syntax.

```sh
npm install @inf3rno/patterns
```

```js
var p = require("@inf3rno/patterns"),
    t = p.transformations;
```

**literal**

Takes the given string literally and creates a pattern from it.
```js
var azPattern = p.literal("[a-z]+"); // we take the given string literally, it will be regex escaped
var azMatcher = p.compile(azPattern, t.none); // we don't capture any value, so we can use t.none
console.log(azMatcher.findNext("[a-z]+")); // Matcher {value: undefined, position: 0, length: 6, followingPosition: 6}
console.log(azMatcher.findNext("abc")); // undefined
```