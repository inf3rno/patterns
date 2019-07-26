function findNext(regex, string, position){
    if (regex === undefined || string === undefined || position === undefined)
        throw new Error("Missing argument(s).");
    regex.lastIndex = position;
    var match = regex.exec(string);
    if (match)
        return {
            string: string,
            regex: regex,
            position: position,
            match: match[0],
            range: {from: match.index, to: regex.lastIndex, size: match[0].length},
            groups: match.slice(1)
        };
    else
        return {
            string: string,
            regex: regex,
            position: position,
            match: null
        };
}

module.exports = findNext;