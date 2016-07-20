Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
};

Number.prototype.toInt = String.prototype.toInt = function() {
    return parseInt(this, 10);
};
