var Quote = require("./Quote");
var Pattern = require("./Pattern");

var patterns = {};
patterns.quote = function (string){
    return new Quote(string);
};
patterns.compile = function (fragment){
    return new Pattern(fragment);
};
module.exports = patterns;