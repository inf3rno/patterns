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
var quotedPatternFragment = patterns.quote("a-z");
var pattern = patterns.compile(quotedPatternFragment);
console.log(pattern.match("a-z")); // {value:"a-z"}
console.log(pattern.match("abc")); // undefined
```