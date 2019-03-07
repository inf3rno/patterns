var specialCharacters = "\\^${}[]().*+?|-/";
var escapeCharacter = "\\";
var anyCharacter = ".";
var findAnyCharacter = new RegExp(anyCharacter, "g");
var findSpecialCharacters = new RegExp("[" + specialCharacters.replace(findAnyCharacter, escapeCharacter + "$&") + "]", "g");

function quote(string) {
    if (typeof(string) !== "string")
        throw new Error("String required for quote.");
    return string.replace(findSpecialCharacters, escapeCharacter + "$&");
}

module.exports = quote;