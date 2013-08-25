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

	console.log(fmt("<img alt='kibo' src='%s' />", retricon('kibo', {pixelSize: 16}).toDataURL()));

### Output
	<img alt='kibo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA7UlEQVR4nO3asQ3CQBAAwX9kiVqogP5DV0AtRFDEBCfDTm6/vbrodfv5un/WoPPx3vL89PffJg//BQVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUR7+j7t6ppAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQES7eWv5ft70fqCe3wSiAqICogKiAqICogKiAqICogKiAqICogKiAqICouPf9wP1/5tAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQHToC66+39d94LACogKiAqICogKiAqICogKiAqICogKiAqICogKiL2SGHPJ+jTmVAAAAAElFTkSuQmCC' />
![kibo](https://raw.github.com/sehrgut/node-retricon/master/examples/images/kibo.png)

## API

### retricon(str, pixelSize, border)

* `str`: string - username, email, or other string to hash
* `opts`: object
	* `pixelSize`: int (default: 10) - width and height in pixels to render
	  each tile
	* `bgColor`: mixed (default: null) - color to fill background
	  * `null` for transparent
	  * 0 or 1 for first (brighter) or second (darker) random color
	  * CSS hex colorspec (e.g. '#F0F0F0')
	* `pixelPadding`: int (default: 0) - background pixels within the border of
	  each rendered tile. Use negative values for overlap, as in Github-
	  style identicons
	* `imagePadding`: int (default: 0) - padding around outside of image
	* `tiles`: int (default: 5) - number of tiles wide and high to render
	* `minFill`: float (default: 0.3) - proportion of tiles which must be
	  filled. Hash chaining is used to satisfy fill criteria.
	* `maxFill`: float (default: 0.9) - maximum proportion of tiles which may
	  be filled.
	* `pixelColor`: mixed (default: 0) - color to fill foreground tiles. All
	  `bgColor` values are valid for `pixelColor`.

Returns a `Canvas` object containing the rendered image.

## Styles

All style options can be changed, but _retricon_ comes with several prerolled
styles:

### default
Coloured tiles against a transparent background.

![default](https://raw.github.com/sehrgut/node-retricon/master/examples/images/default.png)

### mini
Tiny 3x3 identicons with padded tiles.

![mini](https://raw.github.com/sehrgut/node-retricon/master/examples/images/mini.png)

### gravatar
Not a perfect replica of Gravatar's "retro" style, but close.

![gravatar](https://raw.github.com/sehrgut/node-retricon/master/examples/images/gravatar.png)

### mono
Black tiles on a grey background.

![mono](https://raw.github.com/sehrgut/node-retricon/master/examples/images/mono.png)

### mosaic
Padded tiles, for a mosaic effect.

![mosaic](https://raw.github.com/sehrgut/node-retricon/master/examples/images/mosaic.png)

### window
Transparent, padded tiles against coloured background.

![window](https://raw.github.com/sehrgut/node-retricon/master/examples/images/window.png)

### github
Faithful replica of Github's identicon style.

![github](https://raw.github.com/sehrgut/node-retricon/master/examples/images/github.png)


## Algorithm

The input string is converted to a buffer of UTF-8 bytes. A one-byte iterator
is appended to this, initialized at zero, for hash chaining. The buffer is
passed through SHA-512, and the output buffer is iteratively XORed to produce a
final buffer of only the number of required bytes (currently eighteen). The
first six bytes are taken as RGB values for the colours. The remaining bytes
are quantized to boolean values at a threshold of 127. If a minimum proportion
of the booleans are true, but not more than the maximum proportion, the hash is
accepted. Otherwise, the iterator is incremented, and the process repeated.

The array of booleans is taken to be a row-major array covering the left half
of the final image. It is reflected about the central vertical axis (or column,
for odd-order arrays) which is then rendered as the final visual hash.

[ghid]: https://github.com/blog/1586-identicons
[gravatar]: https://en.gravatar.com/site/implement/images/
