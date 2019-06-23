var Literal = require("./Literal");
var Matcher = require("./Matcher");

var patterns = {};
patterns.literal = function (string){
    return new Literal(string);
};
patterns.compile = function (pattern){
    return new Matcher(pattern);
};
module.exports = patterns;