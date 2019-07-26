console.log("we use the `s` flag in this research, it was added in ES 2018");

var findNext = require("./util.findNext");

var lineByLineParserDefault = /(.*),\n/gs;
var lineByLineParserLazy = /(.*?),\n/gs;

var aJSONWithoutLineBreaksInString = '123,\n"Lorem, ipsum.",\n"blabla",\n';

console.log("default", findNext(lineByLineParserDefault, aJSONWithoutLineBreaksInString, 0));
console.log("lazy", findNext(lineByLineParserLazy, aJSONWithoutLineBreaksInString, 0));

console.log("as we can see here the greedy is the default and we can turn on lazy mode with `.*?`");