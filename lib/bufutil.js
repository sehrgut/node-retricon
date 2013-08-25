
// Inspired by:
// https://code.google.com/p/nodejs-win/source/browse/node_modules/mysql/lib/auth.js
function xor(a, b) {
	var n = Math.min(a.length, b.length);
	var m = Math.max(a.length, b.length);
	var out = new Buffer(m);
	var longer = (a.length > b.length ? a : b) ;

	for (var i=0; i<n; i++)
		out[i] = (a[i] ^ b[i]);

	for (var i=n; i<m; i++)
		out[i] = longer[i];

	return out;
}

module.exports = {
	xor: xor
};