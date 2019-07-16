console.log("we use lookbehind in this research, it was added in ES 2018");

var findNext = require("./findNext");

var positiveLookahead = /\d(?=\d)/g;
var negativeLookahead = /\d(?!\d)/g;
var positiveLookbehind = /(?<=\d)\d/g;
var negativeLookbehind = /(?<!\d)\d/g;

var string = "0123456789";

console.log("positiveLookahead", findNext(positiveLookahead, string, 5));
console.log("negativeLookahead", findNext(negativeLookahead, string, 5));
console.log("lookahead overlaps, because it continues with 6 after 5 instead of 7");
console.log("so the lookahead is not part of the match or the lastIndex is not based on it");

console.log("positiveLookbehind", findNext(positiveLookbehind, string, 5));
console.log("negativeLookbehind", findNext(negativeLookbehind, string, 5));
console.log("lookbehind overlaps, so if I give 5 as starting position, then the regex checks the characters prior 5");

var digitLookbehindForCharPattern = /(?<=\d)[a-z]/g;
var string2 = "12ab";
console.log("lookbehind", findNext(digitLookbehindForCharPattern, string2, 0));
console.log("lookbehindBeforeThePreviousMatch", findNext(digitLookbehindForCharPattern, string2, 3));

console.log("according to the results the lookbehind cannot be before the previous match");
var digitLookbehindForCharPatternB = /(?<=\d[a-z]*)[a-z]/g;
console.log("lookbehind", findNext(digitLookbehindForCharPatternB, string2, 0));
console.log("lookbehindBeforeThePreviousMatchWhenPatternIsCovered", findNext(digitLookbehindForCharPatternB, string2, 3));

console.log("if there is no gap between the lookbehind and the pattern, then it can be before the previous match");

var string3 = "aabb";
var lookbehindBeforePreviousMatchPattern = /(?<=(a(?:ab)?))(b)/g;
console.log("lookbehind", findNext(lookbehindBeforePreviousMatchPattern, string3, 0));
console.log("lookbehindBeforePreviousLookbehind", findNext(lookbehindBeforePreviousMatchPattern, string3, 3));

console.log("it is possible to have a lookbehind before the lookbehind of a previous match");

var string4 = "bac";
var lookbehindStartsBeforePreviousPatternChunk = /a(?<=ba)c/g;
console.log("lookbehindStartsBeforePreviousPatternChunk", findNext(lookbehindStartsBeforePreviousPatternChunk, string4, 0));

console.log("it is possible to start a lookbehind before the previous pattern chunk, but it should cover the previous chunk too");