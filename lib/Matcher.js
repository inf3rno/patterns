var Pattern = require("./Pattern");
var Match = require("./Match");

function Matcher(pattern, transformation) {
    if (!(pattern instanceof Pattern))
        throw new Error("Pattern is required.");
    if (!(transformation instanceof Function))
        throw new Error("Transformation is required.");
    this.regex = new RegExp(pattern.code, "g");
    this.transformation = transformation;
}
Matcher.prototype = {
    constructor: Matcher,
    findNext: function (string, position) {
        if (position === undefined)
            position = 0;
        if (isNaN(position))
            throw new Error("Position must be a number.");
        if (position%1)
            throw new Error("Position must be integer.");
        if (position < 0)
            position = string.length-position;
        if (position < 0)
            throw new Error("Position cannot be more negative than the length.");
        if (position >= string.length)
            return;
        this.regex.lastIndex = position;
        var regexResult = this.regex.exec(string);
        if (!regexResult)
            return;
        var matchingPosition = regexResult.index;
        var followingPosition = this.regex.lastIndex;
        var capturingGroupValues = [];
        var value = this.transformation.apply(null, capturingGroupValues);
        return new Match(value, matchingPosition, followingPosition);
    }
};


module.exports = Matcher;