var retricon = require('../');
var fmt = require('util').format;

// http://stackoverflow.com/a/1349426/2255888
function rstring(n) {
	n = n ? n : 8;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < n; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

console.log('<html><head><title>retricons</title></head><body>');
for (var i=0; i<1000; i++) {
	var str = rstring();
	console.log(fmt("<img alt='%s' src='%s' />", str, retricon(str, 16, 0).toDataURL()));
}
console.log('</body></html>');