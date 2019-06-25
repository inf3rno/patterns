var Literal = require("./Literal");
var Matcher = require("./Matcher");
var transformations = require("./transformations");

var patterns = {};
patterns.literal = function (string) {
    return new Literal(string);
};
patterns.compile = function (pattern, transformation) {
    return new Matcher(pattern, transformation);
};
patterns.transformations = transformations;
module.exports = patterns;