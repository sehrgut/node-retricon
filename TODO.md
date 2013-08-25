## TODO

* Larger Gravatar-style identicons (10x10)
  http://www.codingthewheel.com/internet/of-gravatars-and-robohashes/
* Arbitrary numbers of elements
* Even and odd support. Probably should use a matrix lib for all of this, to
  allow reflection about any axis.
* Multiple axes of symmetry, to allow things like (x2, y4 reflections):

		..X..
		.X.X.
		XX.XX
		.....
		X...X
		.....
		XX.XX

* Generate SVG strings instead, and render them with an external library.
* Background color (transparent isn't always ideal)