node-retricon
=============

create indenticon-like image hashes styled like [Github][ghid] and
[Gravatar (retro)][gravatar] avatars

![avatar](https://raw.github.com/sehrgut/node-retricon/master/examples/images/01.png)
![avatar](https://raw.github.com/sehrgut/node-retricon/master/examples/images/02.png)
![avatar](https://raw.github.com/sehrgut/node-retricon/master/examples/images/03.png)
![avatar](https://raw.github.com/sehrgut/node-retricon/master/examples/images/04.png)
![avatar](https://raw.github.com/sehrgut/node-retricon/master/examples/images/05.png)
![avatar](https://raw.github.com/sehrgut/node-retricon/master/examples/images/06.png)
![skull](https://raw.github.com/sehrgut/node-retricon/master/examples/images/07.png)
![frog](https://raw.github.com/sehrgut/node-retricon/master/examples/images/08.png)

## Example

	var retricon = require('retricon');
	var fmt = require('util').format;

	console.log(fmt("<img alt='kibo' src='%s' />", retricon('kibo', 16, 0).toDataURL()));

### Output
	<img alt='kibo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA60lEQVR4nO3aQQ0CQRBFwV2CBgwiAR1IwCAmQEQdfiCv7rs9eZlTZ87n+/45hh631ynfr89/WQ7/BwVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBURX/cF6n7ee3w1EBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRLRLO47f3+fp/G4gKiAqICogKiAqICogKiAqICogKiAqICogKiAqIDrX+7S13geOFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEM3fB671PnCsgKiAqICogKiAqICogKiAqICogKiAqICogKiA6AvEwSJRyc4JigAAAABJRU5ErkJggg==' />
![kibo](https://raw.github.com/sehrgut/node-retricon/master/examples/images/kibo.png)

## API

### retricon(str, pixelSize, border)

* `str`: string - username, email, or other string to hash
* `pixelSize`: int - size in pixels to render each virtual pixel
* `border`: int (optional) - number of pixels padding about each rendered pixel.
  This is inside the bounds defined by `pixelSize`.

Returns a `Canvas` object containing the rendered image.

## Algorithm

The input string is converted to a buffer of UTF-8 bytes. A one-byte iterator
is appended to this, initialized at zero. The buffer is passed through SHA-512,
and the output buffer is iteratively XORed to produce a final buffer of only
the number of required bytes (currently eighteen). The first three bytes are
taken as RGB values for the colour. The remaining fifteen bytes are quantized
to boolean values at a threshold of 127. If at least 5 of the booleans are true,
the hash is accepted. Otherwise, the iterator is incremented, and the process
repeated.

The array of booleans is taken to be a 3x5 row-major array. It is reflected
about the x=2 axis to for a 5x5 array, which is then rendered as the final
visual hash.

[ghid]: https://github.com/blog/1586-identicons
[gravatar]: https://en.gravatar.com/site/implement/images/
