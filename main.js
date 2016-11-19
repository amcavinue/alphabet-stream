var Alphabet = require('./streams/alphabet');
var Cache = require('./streams/cache');
var Numbers = require('./streams/numbers');
var alpha = new Alphabet();
var numbers = new Numbers();
var cache = new Cache('alpha1');
var cacheNum = new Cache('num1');

alpha.pipe(cache);

cache.on('finish', function() {
    console.log('Cache store:');
    for (var key in Cache.store) {
        console.log(key, ':', Cache.store[key]);
    }
});

numbers.pipe(cacheNum);

cacheNum.on('finish', function() {
    console.log('Cache store:');
    for (var key in Cache.store) {
        console.log(key, ':', Cache.store[key]);
    }
});
