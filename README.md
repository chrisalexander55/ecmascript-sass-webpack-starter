# ecmascript-sass-webpack-starter

[![license](https://img.shields.io/github/license/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/ecmascript-sass-webpack-starter)
[![David](https://img.shields.io/david/chrisalexander55/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/package.json)
[![David](https://img.shields.io/david/dev/chrisalexander55/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/package.json)
[![GitHub issues](https://img.shields.io/github/issues/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/pulls)

## Overview

This is a starter/boilerplate project for a web application requiring ECMAScript (6/7), Webpack (3.X) and Sass - served from a lightly configured Docker container. The project is particularly helpful for craftsmen/craftswomen demanding more control of their frontend stack and tired of the growing complexity of today's Franken-frameworks.

> This repository is inspired and evolved from [micooz/es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter).

## Features

The project supports the following features:

* Multiple SPA pages
* EcmaScript (Babel and ESLint)
* Webpack (3.X, dev-server, dashboard)
* Google Lighthouse (performance/best-practice profiling)
* Progressive Web Application (PWA) compliance
* Docker Container (optional)

## Installation

Windows platform users should install [GitBash](https://git-scm.com/downloads) before continuing so you can use Unix terminal commands.

### Docker Container (Optional)

If you haven't already done so, install [Docker](https://www.docker.com/) on you host OS. Windows <=7 users need to install [Docker Toolbox](https://www.docker.com/products/docker-toolbox). If you have any issues, hit-up the Docker forums or SO.

The latest [official Node image](https://hub.docker.com/_/node/) from the [Node.js Foundation](https://nodejs.org) is used by the container. Edit the Dockerfile as you see fit.

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

After installation, you will see this directory structure (only key objects illustrated):

```bash
|- webpack/                        # webpack config dir
|- src
   |- app
       |- assets
       |   |- platform/            # icons + platform config dir
       |- js
       |   |- index/               # index modules dir
       |   |- shared/              # shared modules dir
       |   |- some-page-1/         # some-page-1 modules dir
       |   |- some-page-2/         # some-page-2 modules dir
       |- pages
       |   |- some-page-1.html
       |   |- some-page-2.html
       |- sass
       |   |- main.scss            # for global styles
       |- index.html               # default page
```

## Configuration

```bash
# run just to ensure env.js was created (it may silently fail)
$ npm run postinstall

# edit env.js per your environment needs

# 1. development
# - edit src/app/js/shared/proxy/config.js to hit API resources you need 

# 1a. starts up the webpack-dev-server from host OS + launches browser pointing to http://localhost:3000/index.html
$ npm start:host

# 1b. starts up the weback-dev-server from container
# on your host OS, open your favorite web browser and point to url http://localhost:3000
$ npm start:container

# 1c. lint your ecmascript, especially before builds or commits
$ npm run precommit

# 2. production
# outputs into dist/ directory
$ npm run build
```

Distribution directory structure will look like this after transpilation:

```bash
dist
 |- css/
 |- js/
 |- pages/
 |- platform/
 |- index.html
```

## Built Out Header Element

I know, "Dude, you talking to me about the HTML Header element?" Yes, I am because I've seen way too often how under utilized it is in helping developers/organizations delivery the best possible user experience, device support and SEO. Configured right, the HTML Header is powerful! Once you open an html file, edit as needed.

> Big props go out to the maintainers at [GetHead.Info](http://gethead.info/). If your technical understanding of the Header element, and its siblings, is thin, I strongly encourage you visit their site to bulk-up your knowledge!

### Base Feature Support

Standard tags/attributes cover:

* Security
* Caching
* Geolocation
* Site ownership verification
* Telephone number formating

### Social Media Coverage

If you need to share content tailored for social media platforms, either statically or via a SPA page, the platforms covered include:

* Facebook
* Google
* Pinterest

### Progressive Web Application (PWA) Support

Generally, developers are aware of the native JavaScript APIs and polyfills related to PWAs but most are not aware that markup must also be configured for an valid and performant implementation.

#### Platform Coverage

Platform-specific meta tags/attributes covered include:

* iOS
* Android/Chrome
* Windows