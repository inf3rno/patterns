const expect = require("chai").expect;
const patterns = require("..");

describe("literal", function () {

    it("should escape regex control characters in the given string", function () {
        var azPattern = patterns.literal("[a-z]+");
        var azMatcher = patterns.compile(azPattern, patterns.transformations.none);
        expect(!!azMatcher.findNext("[a-z]+")).to.equal(true);
        expect(!!azMatcher.findNext("abc")).to.equal(false);
    });

});