var Alphabet = require('./streams/alphabet');
var alpha = new Alphabet();
alpha.on('data', function(chunk) {
    console.log(chunk.toString());
});