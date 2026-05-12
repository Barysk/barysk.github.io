#!/usr/bin/env bash

for file in *.jpg *.JPG; do
	[ -e "$file" ] || continue
	name="${file%.*}"
	magick "$file" "${name}.webp"
	rm "$file"
	echo "Converted: $file -> ${name}.webp"
done
