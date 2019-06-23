var Quote = require("./q");
var Matcher = require("./Matcher");

var patterns = {};
patterns.quote = function (string){
    return new Quote(string);
};
patterns.compile = function (pattern){
    return new Matcher(pattern);
};
module.exports = patterns;