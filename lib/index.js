var crypto = require('crypto');
var Canvas = require('canvas');
var _ = require('lodash');
var bu = require('./bufutil');
var fmt = require('util').format;
var unpack = require('./unpack');
var bright = require('./bright');

function fprint(buf, len) {
	if (len > 64)
		throw new Error(fmt("sha512 can only generate 64B of data: %dB requested", len));
	
	return _(crypto.createHash('sha512').update(buf).digest())
		.groupBy(function (x, k) { return Math.floor(k/len); })
		.reduce(bu.xor);
}


function idhash(str, n, minFill, maxFill) {
	var buf = new Buffer(str.length + 1);
	buf.write(str);
	
	for (var i=0; i<0x100; i++) {
		buf[buf.length - 1] = i;
		var f = fprint(buf, Math.ceil(n/8)+6);
		var pixels = _(f.slice(6))
			.map(function (x) { return unpack(x); })
			.flatten().take(n);
			
		var setPixels = pixels.filter().size();

		var c = [ f.slice(0, 3), f.slice(3, 6)];
		c.sort(bright.cmp);
		
		if (setPixels > (minFill * n) && setPixels < (maxFill * n))
			return {
				colors: c.map(function (x) { return x.toString('hex'); }),
				pixels: pixels.value()
			};
	}
	throw new Error(fmt("String '''%s''' unhashable in single-byte search space.", str));
}


function reflect(id, dimension) {
	var mid = Math.ceil(dimension / 2);
	var odd = Boolean(dimension % 2);
	
	var pic = [];
	for (var row=0; row<dimension; row++) {
		pic[row] = [];
		for (var col=0; col<dimension; col++) {
			var p = (row * mid) + col;
			if (col>=mid) {
				var d = mid - (odd ? 1 : 0) - col;
				var ad = Math.abs(d);
				p = (row * mid) + mid - 1 - ad;
			}
			pic[row][col] = id.pixels[p];
//			console.error(fmt("looking for %d, of %d for %d,%d", p, id.pixels.length, row, col))
		}
	}
	return pic;
}

function retricon(str, opts) {
	opts = _.merge({}, retricon.defaults, opts);
	
	var dimension = opts.tiles;
	var pixelSize = opts.pixelSize;
	var border = opts.pixelPadding;
	
	var mid = Math.ceil(dimension / 2);
	var id = idhash(str, mid * dimension, opts.minFill, opts.maxFill);
	var pic = reflect(id, dimension);
	var csize = (pixelSize * dimension) + (opts.imagePadding * 2);
	var c = Canvas.createCanvas(csize, csize);
	var ctx = c.getContext('2d');
	
	
	if (_.isString(opts.bgColor)) {
		ctx.fillStyle = opts.bgColor;
	} else if (_.isNumber(opts.bgColor)) {
		ctx.fillStyle = '#' + id.colors[opts.bgColor];
	}
	
	if (! _.isNull(opts.bgColor))
		ctx.fillRect(0, 0, csize, csize);

	var drawOp = ctx.fillRect.bind(ctx);

	if (_.isString(opts.pixelColor)) {
		ctx.fillStyle = opts.pixelColor;
	} else if (_.isNumber(opts.pixelColor)) {
		ctx.fillStyle = '#' + id.colors[opts.pixelColor];
	} else {
		drawOp = ctx.clearRect.bind(ctx);
	}
	
	for (var x=0; x<dimension; x++)
		for (var y=0; y<dimension; y++)
			if (pic[y][x])
				drawOp((x*pixelSize) + border + opts.imagePadding,
							(y*pixelSize) + border + opts.imagePadding,
							pixelSize - (border * 2),
							pixelSize - (border * 2));
	return c;
}

retricon.defaults = {
	pixelSize: 10,
	bgColor: null,
	pixelPadding: 0,
	imagePadding: 0,
	tiles: 5,
	minFill: 0.3,
	maxFill: 0.90,
	pixelColor: 0
};

retricon.style = {
	github: {
		pixelSize: 70,
		bgColor: '#F0F0F0',
		pixelPadding: -1,
		imagePadding: 35,
		tiles: 5
	},
	gravatar: {
		tiles: 8,
		bgColor: 1
	},
	mono: {
		bgColor: '#F0F0F0',
		pixelColor: '#000000',
		tiles: 6,
		pixelSize: 12,
		pixelPadding: -1,
		imagePadding: 6
	},
	mosaic: {
		imagePadding: 2,
		pixelPadding: 1,
		pixelSize: 16,
		bgColor: '#F0F0F0'
	},
	mini: {
		pixelSize: 10,
		pixelPadding: 1,
		tiles: 3,
		bgColor: 0,
		pixelColor: 1
	},
	window: {
		pixelColor: null,
		bgColor: 0,
		imagePadding: 2,
		pixelPadding: 1,
		pixelSize: 16
	}
};

module.exports = retricon;
