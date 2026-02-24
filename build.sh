#!/bin/bash

set -e  # Exit on any error

source "/usr/share/nvm/init-nvm.sh"

nvm use 22
command -v html-minifier >/dev/null 2>&1 || npm install -g html-minifier
command -v csso-cli >/dev/null 2>&1 || npm install -g csso-cli
command -v purgecss >/dev/null 2>&1 || npm install -g purgecss
command -v terser >/dev/null 2>&1 || npm install -g terser

# --------------------------------------------------------------------------------
# FETCH LIBS
# --------------------------------------------------------------------------------

echo "Fetching libraries..."
curl -sS -o scripts/lib/three-r128.min.js https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
curl -sS -o scripts/lib/snap-touch-1.0.6.min.js https://unpkg.com/snap-touch@1.0.6/snap-touch.min.js
curl -sS -o scripts/lib/aos-2.3.4.min.js https://unpkg.com/aos@2.3.4/dist/aos.js
curl -sS -o styles/lib/aos-2.3.4.min.css https://unpkg.com/aos@2.3.4/dist/aos.css

# --------------------------------------------------------------------------------
# HTML
# --------------------------------------------------------------------------------

echo "Minifying HTML..."
html-minifier \
  --collapse-whitespace \
  --remove-comments \
  --remove-redundant-attributes \
  --output index.html \
  index.src.html

# --------------------------------------------------------------------------------
# SCRIPTS
# --------------------------------------------------------------------------------

SCRIPTS=(
  scripts/src/comp-001-particles.js
  scripts/src/comp-002-photo-slider.js
  scripts/src/comp-003-video-player.js
  scripts/src/comp-004-aos.js
  scripts/src/main.js
)

mkdir -p scripts/dist
rm -f scripts/dist/combined.js
rm -f scripts/dist/combined.min.js
touch scripts/dist/combined.js
touch scripts/dist/combined.min.js

echo "Combining scripts..."
for FILE in "${SCRIPTS[@]}"; do
  echo "/* -------------------------------------------------------------------------------- */" >> scripts/dist/combined.js
  echo "/* $(printf "%-80s\n" "$FILE") */" >> scripts/dist/combined.js
  echo "/* -------------------------------------------------------------------------------- */" >> scripts/dist/combined.js
  echo "" >> scripts/dist/combined.js
  cat "$FILE" >> scripts/dist/combined.js
  echo "" >> scripts/dist/combined.js
done

echo "Minifying scripts..."
terser scripts/dist/combined.js -o scripts/dist/combined.min.js

# --------------------------------------------------------------------------------
# STYLES
# --------------------------------------------------------------------------------

STYLES=(
  styles/src/main.css
  styles/src/section-01-hero.css
  styles/src/section-02-experience.css
  styles/src/section-03-projects.css
  styles/src/section-04-photo.css
  styles/src/section-05-video.css
  styles/src/section-06-footer.css
)

mkdir -p styles/dist
rm -f styles/dist/combined.css
rm -f styles/dist/combined.min.css
touch styles/dist/combined.css
touch styles/dist/combined.min.css

echo "Combining styles..."
for FILE in "${STYLES[@]}"; do
  echo "/* -------------------------------------------------------------------------------- */" >> styles/dist/combined.css
  echo "/* $(printf "%-80s\n" "$FILE") */" >> styles/dist/combined.css
  echo "/* -------------------------------------------------------------------------------- */" >> styles/dist/combined.css
  echo "" >> styles/dist/combined.css
  cat "$FILE" >> styles/dist/combined.css
  echo "" >> styles/dist/combined.css
done

echo "Minifying styles..."
purgecss --css styles/dist/combined.css --content index.html scripts/dist/combined.js --output styles/dist/
csso styles/dist/combined.css -o styles/dist/combined.min.css


# --------------------------------------------------------------------------------
# IMAGES
# --------------------------------------------------------------------------------

BANNERS=(
  banner-pinup.png
  banner-pokedex.png
  banner-snap.png
  banner-terrace-editor.png
  banner-terrace.png
  banner-tofu.webp
)

VIDEOS=(
  video-black-tusk-hike.jpg
  video-bowen-island.webp
  video-sun-peaks.webp
  video-sunshine-coast.webp
  video-twin-islands.webp
  video-van-to-mtl.jpg
)

PHOTOS=(
  photo-001.jpg
  photo-002.jpg
  photo-003.jpg
  photo-004.jpg
  photo-005.jpg
  photo-006.jpg
  photo-007.jpg
  photo-008.jpg
  photo-009.jpg
  photo-010.jpg
  photo-011.jpg
  photo-012.jpg
  photo-013.jpg
  photo-014.jpg
  photo-015.jpg
  photo-016.jpg
  photo-017.jpg
  photo-018.jpg
  photo-019.jpg
  photo-020.jpg
  photo-021.jpg
  photo-022.jpg
  photo-023.jpg
  photo-024.jpg
  photo-025.jpg
  photo-026.jpg
  photo-027.jpg
  photo-028.jpg
  photo-029.jpg
  photo-030.jpg
  photo-031.jpg
  photo-032.jpg
  photo-033.jpg
  photo-034.jpg
  photo-035.jpg
  photo-036.jpg
  photo-037.jpg
  photo-038.jpg
  photo-039.jpg
  photo-040.jpg
  photo-041.jpg
  photo-042.jpg
  photo-043.jpg
)

rm -rf assets/dist
rm -rf photos/dist
mkdir -p assets/dist
mkdir -p photos/dist

echo "Compressing portrait..."
magick "assets/src/portrait.jpg" -strip -quality 80 -resize 200x200^ -gravity center -extent 200x200 "assets/dist/portrait.webp"
magick "assets/src/portrait.jpg" -strip -quality 80 -resize 400x400^ -gravity center -extent 400x400 "assets/dist/portrait@2x.webp"

echo "Compressing banners..."
for FILE in "${BANNERS[@]}"; do
  magick "assets/src/${FILE}" -strip -quality 80 -resize 390x152^ -gravity center -extent 390x152 "assets/dist/${FILE%.*}.webp"
  magick "assets/src/${FILE}" -strip -quality 80 -resize 780x304^ -gravity center -extent 780x304 "assets/dist/${FILE%.*}@2x.webp"
done

echo "Compressing videos..."
for FILE in "${VIDEOS[@]}"; do
  magick "assets/src/${FILE}" -strip -quality 80 -resize 390x219^ -gravity center -extent 390x219 "assets/dist/${FILE%.*}.webp"
  magick "assets/src/${FILE}" -strip -quality 80 -resize 780x438^ -gravity center -extent 780x438 "assets/dist/${FILE%.*}@2x.webp"
done

echo "Compressing photos..."
for FILE in "${PHOTOS[@]}"; do
  magick "photos/src/${FILE}" -strip -quality 80 -resize 280x280^ -gravity center -extent 280x280 "photos/dist/${FILE%.*}.webp"
  magick "photos/src/${FILE}" -strip -quality 80 -resize 560x560^ -gravity center -extent 560x560 "photos/dist/${FILE%.*}@2x.webp"
done

# --------------------------------------------------------------------------------

rm -f BUILD.txt
touch BUILD.txt
echo "Build completed: $(date)"                                                 >> BUILD.txt
echo ""                                                                         >> BUILD.txt
echo "Tool versions:"                                                           >> BUILD.txt
echo "  node:          $(node --version)"                                       >> BUILD.txt
echo "  terser:        $(terser --version | awk '{print $2}')"                  >> BUILD.txt
echo "  html-minifier: $(html-minifier --version)"                              >> BUILD.txt
echo "  csso:          $(csso --version)"                                       >> BUILD.txt
echo "  purgecss:      $(purgecss --version)"                                   >> BUILD.txt
echo "  magick:        $(magick --version | head -n1 | awk '{print $3}')"       >> BUILD.txt
echo "  cwebp:         $(cwebp -version | head -n1)"                            >> BUILD.txt
