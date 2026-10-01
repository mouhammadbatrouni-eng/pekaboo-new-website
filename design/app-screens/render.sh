#!/bin/sh
# render.sh name  -> out/name.png at 2x (804×1748)
cd "$(dirname "$0")"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=402,874 --virtual-time-budget=3000 \
  --screenshot="out/$1.png" "file://$PWD/$1.html" >/dev/null 2>&1
echo "out/$1.png $(sips -g pixelWidth -g pixelHeight out/$1.png | tail -2 | awk '{print $2}' | tr '\n' 'x')"
