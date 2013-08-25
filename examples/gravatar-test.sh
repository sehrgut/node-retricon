#!/bin/bash
# Generates a page of the first 1000 retro gravatars, for comparison

echo "<html><head><title>gravatar test</title></head><body>"

for i in {0..1000}; do
	printf "<img src='http://www.gravatar.com/avatar/%s?f=y&d=retro' />" \
		$(md5 -qs $i)
done

echo "</body></html>"