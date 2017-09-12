# es6/7-sass-webpack-starter changelog

## 1.1.4

* added robots.txt
* renamed js/ to modules/
* updated head element to support `<script type="module" ...></script>`
* merged test tooling dev-dependencies; no working tests => WIP

## 1.1.3

* This is a bone-head patch because I forgot to commit CHANGELOG.md

## 1.1.2

* added support for JsDoc generated documentation
* added not-supported.html page and module to handle UAs with poor feature support

## 1.1.1

* resolved webpack config relative path issue when in dev mode
* thanks to [@mastilver](https://github.com/jantimon/html-webpack-plugin/issues/665#issuecomment-326794429) on the html-webpack-plugin team

## 1.1.0

* added `<head>` template guidance
* added not-found.html page and module to handle 404s

## 1.0.4

* reorg of src/
* added icons (default and platform-specific); they are empty bits
* tweaked platform PWA manifests
* provided more instructional comments in head element of html pages
* added webpack-dashboard support
* added webpack-bundle-analyzer support
* added google lighthouse CLI support
* made Docker container usage mandatory
* updated README