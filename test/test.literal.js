const expect = require("chai").expect;
const patterns = require("..");

describe("literal", function () {

    it("should escape regex control characters in the given string", function () {
        var regexControlCharacters = "\\^${}[]().*+?|-/";
        var regexControlCharactersPattern = patterns.literal(regexControlCharacters);
        var regexControlCharactersMatcher = patterns.compile(regexControlCharactersPattern);
        expect(!!(regexControlCharactersMatcher.findNext(regexControlCharacters))).to.equal(true);
        expect(regexControlCharactersMatcher.findNext("abcdef")).to.equal(undefined);
    });

});