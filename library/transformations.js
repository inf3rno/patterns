var transformations = {
    none: function (){
        if (arguments.length)
            throw new Error("The none transformation should not get any argument.");
    }
};

module.exports = transformations;