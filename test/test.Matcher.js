const expect = require("chai").expect;
const patterns = require("..");

describe("Matcher", function () {

    it("should be able to find the first match from the given position", function () {
        var xPattern = patterns.literal("x");
        var xMatcher = patterns.compile(xPattern, patterns.transformations.none);
        var string = "xxy";
        var match = xMatcher.findNext(string, 0);
        expect(!!match).to.equal(true);
        expect(match.position).to.equal(0);
        expect(match.length).to.equal(1);
        expect(match.followingPosition).to.equal(1);
        expect(match.value).to.equal(undefined);
        expect(xMatcher.findNext(string, 2)).to.equal(undefined);
    });

    it.skip("should be able to find all matches from the given position", function (){
        var xPattern = patterns.literal("x");
        var xMatcher = patterns.compile(xPattern, patterns.transformations.none);
        var string = "xixxix";
        expect(xMatcher.findAll(string, 0).length).to.equal(4);
        expect(xMatcher.findAll(string, 3).length).to.equal(2);
    });

});