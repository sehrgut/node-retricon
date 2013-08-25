var retricon = require('../');
var fmt = require('util').format;

console.log(fmt("<img alt='skull' src='%s' />", retricon('dNLE2hdA', 16, 0).toDataURL()));
console.log(fmt("<img alt='skull' src='%s' />", retricon('6GoMrKwD', 16, 0).toDataURL()));
