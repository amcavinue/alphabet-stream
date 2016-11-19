var stream = require('stream');

function Numbers(options) {
    stream.Readable.call(this, options);
    this._start = 0;
    this._end = 25;
    this._curr = this._start;
}

Numbers.prototype = Object.create(stream.Readable.prototype);
Numbers.prototype.constructor = Numbers;

Numbers.prototype._read = function() {
    var num = String.fromCharCode(this._curr);
    var buf = new Buffer(num, 'utf8');
    this.push(buf);
    this._curr++;
    if (this._curr === this._end) {
        this.push(null);
    }
};

module.exports = Numbers;
