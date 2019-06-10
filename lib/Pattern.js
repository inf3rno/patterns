var PatternFragment = require("./PatternFragment");

function Pattern(fragment) {
    if (!(fragment instanceof PatternFragment))
        throw new Error("Pattern fragment is required.");
    this.regex = new RegExp(fragment.pattern, "g");
}
Pattern.prototype = {
    constructor: Pattern,
    match: function (string) {
        var capturingGroups = this.regex.exec(string);
        if (!capturingGroups)
            return ;
        return new Match({
            value: capturingGroups[0]
        });
    }
};

function Match(properties){
    Object.assign(this, properties);
}

module.exports = Pattern;