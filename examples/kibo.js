var retricon = require('../');
var fmt = require('util').format;

console.log(fmt("<img alt='kibo' src='%s' />", retricon('kibo', {pixelSize: 16}).toDataURL()));
