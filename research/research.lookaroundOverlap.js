var positiveLookahead = /\d(?=\d)/g;
var negativeLookahead = /\d(?!\d)/g;
var positiveLookbehind = /(?<=\d)\d/g;
var negativeLookbehind = /(?<!\d)\d/g;

var string = "0123456789";

function findNext(regex, string, position){
    regex.lastIndex = position;
    var match = regex.exec(string);
    if (match)
        return {
            string: string,
            regex: regex,
            position: position,
            match: match[0],
            range: {from: match.index, to: regex.lastIndex, size: match[0].length}
        };
    else
        return {
            string: string,
            regex: regex,
            position: position,
            match: null
        };
}

console.log("positiveLookahead", findNext(positiveLookahead, string, 5));
console.log("negativeLookahead", findNext(negativeLookahead, string, 5));
console.log("lookahead overlaps, because it continues with 6 after 5 instead of 7");
console.log("so the lookahead is not part of the match or the lastIndex is not based on it");

console.log("positiveLookbehind", findNext(positiveLookbehind, string, 5));
console.log("negativeLookbehind", findNext(negativeLookbehind, string, 5));
console.log("lookbehind overlaps, so if I give 5 as starting position, then the regex checks the characters prior 5");
