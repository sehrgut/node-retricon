function brightness(r, g, b) {
	// http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx
	return Math.sqrt( .241 * r * r + .691 * g * g + .068 * b * b )
}

function cmp_brightness(a, b) {
	return brightness(a[0], a[1], a[2]) - brightness(b[0], b[1], b[2]);
}

function rcmp_brightness(a, b) {
	return cmp_brightness(b, a);
}

module.exports = {
	ness: brightness,
	cmp: cmp_brightness,
	rcmp: rcmp_brightness
};