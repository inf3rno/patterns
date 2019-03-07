const expect = require("chai").expect;
const quote = require("../lib/quote");

describe("quote", function () {

    it("should escape special characters in the given string", function () {
        var specialCharacterList = "\\^${}[]().*+?|-/";
        var findSpecialCharacterList = new RegExp(quote(specialCharacterList));
        expect(findSpecialCharacterList.test(specialCharacterList)).to.equal(true);

        var letters = "abcdefgh";
        var aToZ = "a-z";
        var findAToZ = new RegExp(quote(aToZ));
        expect(findAToZ.test(letters)).to.equal(false);
        expect(findAToZ.test(aToZ)).to.equal(true);
    });

});