var crypto = require('crypto');
var Canvas = require('canvas');
var _ = require('lodash');
var bu = require('./bufutil');
var fmt = require('util').format;

function fprint(buf, len) {
	return _(crypto.createHash('sha512').update(buf).digest())
		.groupBy(function (x, k) { return Math.floor(k/len); })
		.reduce(bu.xor);
}

function idhash(str, n, min) {
	var buf = new Buffer(str.length + 1);
	buf.write(str);
	
	for (var i=0; i<0x100; i++) {
		buf[buf.length - 1] = i;
		var f = fprint(buf, n+3);
		var pixels = _(f.slice(3)).map(function (x) { return x > 0x7f; });
		if (pixels.filter().size() > min)
			return {
				color: f.slice(0, 3).toString('hex'),
				pixels: pixels.value()
			};
	}
	throw new Exception(fmt("String '''%s''' unhashable in single-byte search space.", str));
}

function retricon(str, pixelSize, border) {
	var id = idhash(str, 15, 5);
	var pic = [];
	for (var row=0; row<5; row++) {
		pic[row] = [];
		for (var col=0; col<5; col++) {
			var p = (row * 3) + col;
			if (col>=3) {
				p -= 2 * (col - 2);
			}
			pic[row][col] = id.pixels[p];
		}
	}
	
	var c = new Canvas(pixelSize * 5, pixelSize * 5);
	var ctx = c.getContext('2d');
	
	ctx.fillStyle = '#' + id.color;
	
	for (var x=0; x<5; x++)
		for (var y=0; y<5; y++)
			if (pic[y][x])
				ctx.fillRect((x*pixelSize) + border, (y*pixelSize) + border, pixelSize - (border * 2), pixelSize - (border * 2));
	
	return c;
}

module.exports = retricon;