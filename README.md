# ecmascript-sass-webpack-starter

[![license](https://img.shields.io/github/license/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/ecmascript-sass-webpack-starter)
[![David](https://img.shields.io/david/chrisalexander55/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/package.json)
[![David](https://img.shields.io/david/dev/chrisalexander55/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/package.json)
[![GitHub issues](https://img.shields.io/github/issues/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/pulls)

## Overview

This is a starter/boilerplate project for a web application requiring ECMAScript (6/7), Webpack (3.X) and Sass - optionally served from a lightly configured Docker container. This project is particularly helpful for craftsmen/craftswomen demanding more control of their frontend stack and tired of the growing complexity of today's Franken-frameworks.

> This repository is inspired and evolved from [micooz/es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter).

## Features

This project supports the following features:

* ES with Babel support
* ES Linter: ESLint
* Webpack (3.X with dev-server)
* Webpack Loaders: sass-loader, css-loader
* Webpack Plugins: sylelint-scss
* Progress Web Application (PWA) markup support
* Docker Container (optional)

## Installation

Windows platform users should install [GitBash](https://git-scm.com/downloads) before continuing.

### Docker Container (Optional)

If you haven't already done so, install [Docker](https://www.docker.com/) on you host OS. Windows <=7 users need to install [Docker Toolbox](https://www.docker.com/products/docker-toolbox). If you have any issues, hit-up the Docker forums or SO.

We use the latest [official Node image](https://github.com/nodejs/docker-node) from the [Node.js Foundation](https://nodejs.org). Edit the Dockerfile as you see fit.

```bash
# build and start container
$ . ./run.sh

# this will dump you on the commandline inside the container; 
# all remaining CLI tasks happen here...
```

### Project Hydration

```bash
$ git clone https://github.com/chrisalexander55/ecmascript-sass-webpack-starter.git
$ cd ecmascript-sass-webpack-starter
$ npm i
```

## Configuration

```bash
# run just to ensure env.js was created (it may silently fail)
$ npm run postinstall

# edit env.js per your environment needs

# 1. development
# - edit src/proxy/config.js to hit resources you need 
# - starts up the webpack-dev-server
$ npm start

# lint your ecmascript, especially before builds or commits
$ npm run precommit

# On your host OS, open your favorite web browser and point to url 
# http://localhost:3000

# 2. production
# outputs into dist/ directory
$ npm run build
```

## Built Out Header Element

I know, "Dude, you talking to me about the HTML Header element?" Yes, I am because I've seen way too often how 
under utilized it is in helping developers/organizations delivery the best possible user experience, device support and SEO via a web application. Configured right, the HTML Header is powerful! Once you open index.html, edit as needed.

Big props go out to the maintainers at [GetHead.Info](http://gethead.info/). If your technical understanding of the Header element, and its siblings, is thin, I strongly encourage you to visit their site to bulk-up your knowledge!

### Base Feature Support

Standard tags/attributes cover:

* Security
* Caching
* Geolocation
* Site ownership verification
* Telephone number formating

### Social Media Coverage

If you need to share content tailored for social media platforms, the popular technically needy ecosystems  include:

* Facebook
* Google
* Pinterest

### Progressive Web Application (PWA) Support

Generally, developers are aware of the native JavaScript APIs and polyfills related to PWAs but most are not 
aware that markup also offers support and must be configured for an implementation. The index.html 
document includes PWA compliant meta and link tags/attributes.

#### Platform Coverage

Header tags/attributes cover the following platforms:

* iOS
* Android/Chrome
* Windows