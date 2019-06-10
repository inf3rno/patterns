var PatternFragment = require("./PatternFragment");

function findAndEscape(string, finder){
    if (!finder.global)
        throw new Exception("Global regex is required.");
    return string.replace(finder, "\\$&");
}
var regexControlCharacterFinder = new RegExp("[" + findAndEscape("\\^${}[]().*+?|-/", /./g) + "]", "g");

function Quote(string) {
    if (typeof(string) !== "string")
        throw new Error("String required for Quote.");
    this.pattern = findAndEscape(string, regexControlCharacterFinder);
}
Quote.prototype = Object.create(PatternFragment.prototype);
Quote.prototype.constructor = Quote;
module.exports = Quote;