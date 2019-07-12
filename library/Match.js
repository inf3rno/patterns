function Match(value, position, followingPosition) {
    if (isNaN(position) || position<0 || position%1)
        throw new Error("Invalid position.");
    if (isNaN(followingPosition) || followingPosition<=position || followingPosition%1)
        throw new Error("Invalid following position.");
    this.value = value;
    this.position = position;
    this.length = followingPosition - position;
    this.followingPosition = followingPosition;
}

module.exports = Match;