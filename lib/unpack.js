
function unpack_byte(nMask) {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
	for (var i=0, nShifted = nMask, a = []; i<8; nShifted >>>= 1, i++)
		a.push(Boolean(nShifted & 1));
	return a;
}

module.exports = unpack_byte;
