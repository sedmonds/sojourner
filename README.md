# Sojourner
---

Example for interactive webgl maps emphasizing direct access to the rendering pipeline, specifically tested to work with vdom/domdiff libraries (react, choo)

##Tasks:
1. npm init
2. npm install mixmap
3. npm install
4. created package.json
5. npm i budo (w/o sudo, get: npm ERR! cb() never called!)

** using budo **
# serve file on port 9966 and open browser
budo index.js --open

# enable LiveReload on HTML/CSS/JS file changes
budo index.js --live

# default html will use src="static/bundle.js"
budo src/index.js:static/bundle.js

# pass some options to browserify
budo index.js --live -- -t babelify

# use HTTPS and enable CORS headers
budo index.js --ssl --cors

# LiveReload public directory without any bundling
budo --dir public/ --live
