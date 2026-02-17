#!/bin/bash

source "/usr/share/nvm/init-nvm.sh"

nvm use 22
npm install -g html-minifier
npm install -g csso-cli
npm install -g terser

html-minifier \
  --collapse-whitespace \
  --remove-comments \
  --remove-redundant-attributes \
  --output index.html \
  index.src.html

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

for FILE in "${STYLES[@]}"; do
  echo "/* -------------------------------------------------------------------------------- */" >> styles/dist/combined.css
  echo "/* $(printf "%-80s\n" "$FILE") */" >> styles/dist/combined.css
  echo "/* -------------------------------------------------------------------------------- */" >> styles/dist/combined.css
  echo "" >> styles/dist/combined.css
  cat "$FILE" >> styles/dist/combined.css
  echo "" >> styles/dist/combined.css
done

csso styles/dist/combined.css -o styles/dist/combined.min.css

SCRIPTS=(
  scripts/src/comp-001-particles.js
  scripts/src/comp-002-photo-slider.js
  scripts/src/comp-003-video-player.js
  scripts/src/main.js
)

mkdir -p scripts/dist
rm -f scripts/dist/combined.js
rm -f scripts/dist/combined.min.js
touch scripts/dist/combined.js
touch scripts/dist/combined.min.js

for FILE in "${SCRIPTS[@]}"; do
  echo "/* -------------------------------------------------------------------------------- */" >> scripts/dist/combined.js
  echo "/* $(printf "%-80s\n" "$FILE") */" >> scripts/dist/combined.js
  echo "/* -------------------------------------------------------------------------------- */" >> scripts/dist/combined.js
  echo "" >> scripts/dist/combined.js
  cat "$FILE" >> scripts/dist/combined.js
  echo "" >> scripts/dist/combined.js
done

terser scripts/dist/combined.js -o scripts/dist/combined.min.js
