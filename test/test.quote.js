const expect = require("chai").expect;
const patterns = require("..");

describe("quote", function () {

    it("should escape special characters in the given string", function () {
        var specialCharacters = "\\^${}[]().*+?|-/";
        var specialCharactersFinder = patterns.compile(patterns.quote(specialCharacters));
        expect(specialCharactersFinder.match(specialCharacters).value).to.equal(specialCharacters);
        expect(specialCharactersFinder.match("abcdef")).to.equal(undefined);
    });

});