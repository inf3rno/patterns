var Pattern = require("./Pattern");
var Match = require("./Match");

function Matcher(pattern) {
    if (!(pattern instanceof Pattern))
        throw new Error("Pattern is required.");
    this.regex = new RegExp(pattern.code, "g");
}
Matcher.prototype = {
    constructor: Matcher,
    findNext: function (string) {
        var regexCapturingGroups = this.regex.exec(string);
        if (!regexCapturingGroups)
            return ;
        return new Match([]);
    }
};



module.exports = Matcher;