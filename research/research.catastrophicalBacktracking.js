var findNext = require("./util.findNext");
var fillString = require("./util.fillString");
var Benchmark = require("benchmark");

var regexes = {
    evilRegex: /^(a+)+$/g,
    atomicGroupedEvilRegex: /^(?=((a+)+))\1$/g,
    harmlessRegex: /^a+$/g
};
var repetitions = [5,10,15,20];

var suite = new Benchmark.Suite();
for (var label in regexes){
    var regex = regexes[label];
    for (var repetition of repetitions)
        suite.add(`${label} ${repetition}`, (function (regex, string){
            return function (){
                findNext(regex, string, 0);
            };
        })(regex, fillString("a", repetition) + "x"))
}

suite.on("cycle", function (event) {
    console.log(String(event.target));
});

suite.run({
    async: true
});

/*
    evilRegex 5 x 8,677,885 ops/sec +0.13% (96 runs sampled)
    evilRegex 10 x 298,196 ops/sec +0.11% (94 runs sampled)
    evilRegex 15 x 9,647 ops/sec +0.32% (96 runs sampled)
    evilRegex 20 x 303 ops/sec +0.13% (89 runs sampled)

    atomicGroupedEvilRegex 5 x 29,604,446 ops/sec +0.09% (94 runs sampled)
    atomicGroupedEvilRegex 10 x 25,516,035 ops/sec +0.05% (98 runs sampled)
    atomicGroupedEvilRegex 15 x 21,713,026 ops/sec +0.06% (92 runs sampled)
    atomicGroupedEvilRegex 20 x 19,400,455 ops/sec +0.11% (93 runs sampled)

    harmlessRegex 5 x 34,988,384 ops/sec +0.24% (97 runs sampled)
    harmlessRegex 10 x 27,500,940 ops/sec +0.22% (98 runs sampled)
    harmlessRegex 15 x 21,007,819 ops/sec +0.54% (96 runs sampled)
    harmlessRegex 20 x 17,173,619 ops/sec +0.23% (92 runs sampled)
*/

// so atomic grouping really helps to solve backtracking problems
// I tried out with evil 30 too, it was around 10 secs/op or 0.1 ops/sec, so really slow
// we should stay below 10 msecs/op, so above 100 ops/sec even for very long texts
// I think with both harmless and atomic grouped evil regexes we can fulfill that