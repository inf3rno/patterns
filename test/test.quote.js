const expect = require("chai").expect;
const patterns = require("..");

describe("quote", function () {

    it("should escape regex control characters in the given string", function () {
        var listOfRegexControlCharacters = "\\^${}[]().*+?|-/";
        var regexControlCharacterListPattern = patterns.quote(listOfRegexControlCharacters);
        var regexControlCharacterListMatcher = patterns.compile(regexControlCharacterListPattern);
        expect(!!(regexControlCharacterListMatcher.findNext(listOfRegexControlCharacters))).to.equal(true);
        expect(regexControlCharacterListMatcher.findNext("abcdef")).to.equal(undefined);
    });

});