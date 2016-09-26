## TODO

### For v0.0.4
* Migrate to lodash 4.x (\*By functions no longer provide element index)
* Find reason idhash is different from older node releases:
  stability of the hash function is important
* Test suite to ensure idhash is consistent across platforms

### Other
* Multiple axes of symmetry, to allow things like (x2, y4 reflections):

		..X..
		.X.X.
		XX.XX
		.....
		X...X
		.....
		XX.XX

* Generate SVG strings instead, and render them with an external library.
* Color-transform callback, which is passed the "colors" array, and must
  return a "colors" array. Useful for nudging colours away from low-contrast
  pairs, maybe desaturating, etc., to provide a more uniform look.
* Allow null for foreground colour, to delete background and allow transparent
* Allow pluggable hash functions
* Change "pixel" references throughout source to "tile"
* Browserify