function findNext(regex, string, position){
    regex.lastIndex = position;
    var match = regex.exec(string);
    if (match)
        return {
            string: string,
            regex: regex,
            position: position,
            match: match[0],
            range: {from: match.index, to: regex.lastIndex, size: match[0].length}
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