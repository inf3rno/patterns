var Pattern = require("./Pattern");

function findAndEscape(string, regex) {
    if (!regex.global)
        throw new Error("Global regex is required.");
    return string.replace(regex, "\\$&");
}
var regexControlCharacters = "\\^${}[]().*+?|-/";
var characterClassForRegexControlCharacters = "[" + findAndEscape(regexControlCharacters, /./g) + "]";
var regexControlCharacterFinder = new RegExp(characterClassForRegexControlCharacters, "g");

function Literal(string) {
    if (typeof(string) !== "string")
        throw new Error("String required for Quote.");
    var code = findAndEscape(string, regexControlCharacterFinder);
    Pattern.call(this, code);
}
Literal.prototype = Object.create(Pattern.prototype);
Literal.prototype.constructor = Literal;
module.exports = Literal;