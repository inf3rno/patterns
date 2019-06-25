const expect = require("chai").expect;
const patterns = require("..");

describe("capturing groups", function () {

    describe("transformations", function () {

        it.skip("should contain a many values to array transformation", function () {
            var input = [1,2,3];
            var output = patterns.transformations.many(...input);
            expect(output).to.eql(input);
        });

        it.skip("should contain a transformation that allows only a single value and echoes it", function () {
            var input = 1;
            var ouput = patterns.transformations.one(1);
            expect(ouput).to.equal(input);
            expect(function (){
                patterns.transformations.one(1,2,3);
            }).to.throw();
        });

        it("should contain a compile transformation for no capturing groups", function (){
            expect(patterns.transformations.none).to.not.throw();
            expect(function (){
                patterns.transformations.none(undefined);
            }).to.throw();
        });

    });

    it.skip("should throw if no pattern or no transformation was passed to capture", function (){
        expect(function (){
            patterns.capture();
        }).to.throw();
        expect(function (){
            patterns.capture(patterns.literal("a"));
        }).to.throw();
        expect(function (){
            patterns.capture(undefined, patterns.transformations.many);
        }).to.throw();
        expect(function (){
            patterns.capture(patterns.literal("a"), patterns.transformations.many);
        }).to.not.throw();
    });

    it.skip("should not add any value to the match if no capturing group was passed to compile", function () {
        var a = patterns.literal("a");
        var b = patterns.literal("b");
        var ab = patterns.concatenate(a, b);
        var abMatcher = patterns.compile(ab, patterns.transformations.many);
        var match = abMatcher.findNext("ab");
        expect(match.value).to.eql([]);
    });

    it.skip("should add the captured value of each of the capturing groups to the match if they were passed to compile", function () {
        var a = patterns.literal("a");
        var b = patterns.literal("b");
        var c = patterns.literal("c");
        var abc = patterns.concatenate(a, b, c);
        var abcMatcher = patterns.compile(abc,
            patterns.capture(a, patterns.transformations.many),
            patterns.capture(b, patterns.transformations.many),
            patterns.capture(c, patterns.transformations.many),
            patterns.transformations.many
        );
        var match = abcMatcher.findNext("abc");
        expect(match.value).to.eql([["a"], ["b"], ["c"]])
    });

    it.skip("should add multiple captured values for a capturing group if the captured pattern was reused in the compiled pattern", function () {
        var a = patterns.literal("a");
        var digit = patterns.digit();
        var aAndDigits = patterns.concatenate(a, digit, digit, digit);
        var aAndDigitsMatcher = patterns.compile(aAndDigits,
            patterns.capture(a, patterns.transformations.many),
            patterns.capture(digit, patterns.transformations.many),
            patterns.transformations.many
        );
        var match = aAndDigitsMatcher.findNext("a123");
        expect(match.value).to.eql([["a"], ["1", "2", "3"]]);
    });

    it.skip("should add multiple captured values for a capturing group if multiple patterns were selected by it", function () {
        var a = patterns.literal("a");
        var b = patterns.literal("b");
        var c = patterns.literal("c");
        var abc = patterns.concatenate(a, b, c);
        var abcMatcher = patterns.compile(abc,
            patterns.capture(a, patterns.transformations.many),
            patterns.capture(b, c, patterns.transformations.many),
            patterns.transformations.many
        );
        var match = abcMatcher.findNext("abc");
        expect(match.value).to.eql([["a"], ["b", "c"]])
    });

    it.skip("should support custom transformations for capturing groups and for the compiled pattern", function () {
        var a = patterns.literal("a");
        var digit = patterns.digit();
        var aAndDigits = patterns.concatenate(a, digit, digit, digit);
        var captureDigitsAndTransformToNumber = patterns.capture(digit, function (digit1, digit2, digit3) {
            return Number(digit1 + digit2 + digit3);
        });
        var aAndDigitsMatcher = patterns.compile(aAndDigits, captureDigitsAndTransformToNumber, function (number) {
            return number;
        });
        var match = aAndDigitsMatcher.findNext("a123");
        expect(match.value).to.equal(123);
    });


});