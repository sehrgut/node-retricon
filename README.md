node-retricon
=============

create indenticon-like image hashes styled like [Github][ghid] and
[Gravatar (retro)][gravatar] avatars

<img alt='avatar data url' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA6UlEQVR4nO3cwQnDMBAAQcn9pYO04pdbSQcpMCliDEfIzt9GLHodnPZC79f50X9MejyvLd8fdx3kXxUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRDt6XmezuOmz98NRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUTj88Bf1w1EBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEtKu7lu/rTu8L937gsAKiAqICogKiAqICogKiAqICogKiAqICogKiAqIvZX8WQ856c7cAAAAASUVORK5CYII=" />
<img alt='avatar data url' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA70lEQVR4nO3byw2CQBRAUYaQUIglWgclWogr7MFjMkHu2fO7mdXLYyyTPffXKdcf78f41bt8Y5358H9QQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAtF19Hqf0+zuBqICogKiAqICogKiAqICogKiAqICogKiAqICogGjoPOzuOoGogKiAqICogKiAqICogKiAqICogKiAqICogKiAaNMb6H7g7P3E9gMnKyAqICogKiAqICogKiAqICogKiAqICogKiAqIOJ/fa++X6jzxE4gKiAqICogKiAqICogKiAqICogKiAqICogKiAqIPoAa/kZThS0/D8AAAAASUVORK5CYII=" />
<img alt='avatar data url' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA60lEQVR4nO3asQ2DQBAAQb9FAw5pxP3HNELoEuwixtIJsZPzj1YXnX490Oc4v3rGpNd7X/L9818/clcFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVES/d5uk+7+v1NICogKiAqICogKiAqICogKiAqICogKiAqICogKiDifeDdNYGogKiAqICogKiAqICogKiAqICogKiAqICogKiAaNMDpt/nTd/fBKICogKiAqICogKiAqICogKiAqICogKiAqICogKi8feB0/s81QSiAqICogKiAqICogKiAqICogKiAqICogKiAqICoh9tCyN8tJuRyQAAAABJRU5ErkJggg==" />
<img alt='avatar data url' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA6UlEQVR4nO3asQnDQBBFQZ9R6p4UuGwF6skF2D1oDIvgTQHieGz00fqcx/eRy57TD7i7AqICogKiAqICogKiAqICogKiAqICogKiAqICok0/8Nrf6x8PmaJ7aBeICogKiAqICogKiAqICogKiAqICogKiAqICogKiMa3PN3jpvfILhAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQrbvvcar/A4cVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQ8R6odE+cfn8XiAqICogKiAqICogKiAqICogKiAqICogKiAqICoh+xesa6Scaqy0AAAAASUVORK5CYII=" />
<img alt='avatar data url' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA7ElEQVR4nO3bQQ3DMBAAQbsqqgIogeIMgQIIrRTEVLKs7PzjRCu/Tpc50OvzvvSMlc7jO+X5x78+5K4KiAqICogKiAqICogKiAqICogKiAqICogKiAqIps7zdJ62+/u7gaiAqICogKiAqICogKiAqICogKiAqICogKiAqICIZmlj7D/Paz9wsQKiAqICogKiAqICogKiAqICogKiAqICogKiAiLeD7y7biAqICogKiAqICogKiAqICogKiAqICogKiAqICogeuoBu+/39b/wYgVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQ/IyYgQ9Wp+pQAAAAASUVORK5CYII=" />
<img alt='avatar data url' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA40lEQVR4nO3a0QmDQBQFURWbEFJLircWwTJMD5mPR8g5Beg67Jfc9TrOZ+Fr2/QBfp2AkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYDRWh9Q/ye+7nc6w/T73cBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjAaP/3fWD9fjcwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMNqn93nT7AOHCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGNkH2gfOEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMPoAkZwbnfH18hEAAAAASUVORK5CYII=" />
<img alt='skull' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA6UlEQVR4nO3bMQrDMBAAQSkEAvlzKv854Mp5xASE8E5vWyyqjvMc6Ht+Ln3HSu/XMeX5x78OclcFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEU+d5Ok/b/fvdQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEDE88C76waiAqICogKiAqICogKiAqICogKiAqICogKiAqICItqtG2P//b7+F16sgKiAqICogKiAqICogKiAqICogKiAqICogKiA6Ln6ALvvJ3YDUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAdEPBzQe4JFtsxcAAAAASUVORK5CYII=' />
<img alt='frog' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA7ElEQVR4nO3awQnDMBAAwSi4iTTgYlxwikkDKSMpYgyH8c5fQix6Hbce6PN9//SOSfvrWHL+edZD7qqAqICogKiAqICogKiAqICogKiAqICogKiAqIBoTc/zdB43/f5+ICogKiAqICogKiAqICogKiAqICogKiAqICogKiDarj6PU+0HDisgKiAqICogKiAqICogKiAqICogKiAqICogKiAa3w+8un4gKiAqICogKiAqICogKiAqICogKiAqICogKiAqINr0At2vm6bz0H4gKiAqICogKiAqICogKiAqICogKiAqICogKiAqIPoDDI8YGDwjRo0AAAAASUVORK5CYII=' />

## Example

	var retricon = require('retricon');
	var fmt = require('util').format;

	console.log(fmt("<img alt='kibo' src='%s' />", retricon('kibo', 16, 0).toDataURL()));

<img alt='kibo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAA60lEQVR4nO3aQQ0CQRBFwV2CBgwiAR1IwCAmQEQdfiCv7rs9eZlTZ87n+/45hh631ynfr89/WQ7/BwVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBURX/cF6n7ee3w1EBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRLRLO47f3+fp/G4gKiAqICogKiAqICogKiAqICogKiAqICogKiAqIDrX+7S13geOFRAVEBUQFRAVEBUQFRAVEBUQFRAVEBUQFRAVEM3fB671PnCsgKiAqICogKiAqICogKiAqICogKiAqICogKiA6AvEwSJRyc4JigAAAABJRU5ErkJggg==' />

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