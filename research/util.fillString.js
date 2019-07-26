function fillString(character, length) {
    if (character === undefined || length === undefined)
        throw new Error("Missing argument(s).");
    return new Array(length).join(character);
}

module.exports = fillString;