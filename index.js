// index.js

var random = function(a, b) {
    if(b === undefined) {
        b = 0;
    }
    return a + Math.random() * (b - a);
}


var randomFloor = function(a, b) {
    return Math.floor(random(a, b));
}


var randomGaussian = function(n) {
    if( n === undefined) n = 6;
    var rand = 0;
  
    for (var i = 0; i < n; i += 1) {
        rand += Math.random();
    }
  
    return rand / n
}

var getRandomElement = function(ary) {
    return ary[randomFloor(ary.length)];
}


var randomUtils = {
    random,
    randomFloor,
    randomGaussian,
    getRandomElement
}


module.exports = randomUtils;