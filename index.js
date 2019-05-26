// index.js

var defaultTo = function(value, defaultValue) {
    return isNaN(value) ? defaultValue : value;
}

Math.randomGaussian = function(mean, standardDeviation) {

    standardDeviation = defaultTo(standardDeviation, 0.25);

    if (Math.randomGaussian.nextGaussian !== undefined) {
        var nextGaussian = Math.randomGaussian.nextGaussian;
        delete Math.randomGaussian.nextGaussian;
        return (nextGaussian * standardDeviation) + mean;
    } else {
        var v1, v2, s, multiplier;
        do {
            v1 = 2 * Math.random() - 1; // between -1 and 1
            v2 = 2 * Math.random() - 1; // between -1 and 1
            s = v1 * v1 + v2 * v2;
        } while (s >= 1 || s == 0);
        multiplier = Math.sqrt(-2 * Math.log(s) / s);
        Math.randomGaussian.nextGaussian = v2 * multiplier;
        return (v1 * multiplier * standardDeviation) + mean;
    }

};


var random = function(a, b) {
	if(b === undefined) {
		b = 0;
	}
	return a + Math.random() * (b - a);
}


var randomFloor = function(a, b) {
	return Math.floor(random(a, b));
}


var randomGaussian = function() {
	let rnd;

	do {
		rnd = Math.randomGaussian(0.5, 0.5);
	} while(rnd < 0 || rnd > 1);

	return rnd;
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