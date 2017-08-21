# ecmascript-sass-webpack-starter

[![license](https://img.shields.io/github/license/chrisalexander55/ecmascript-sass-webpack-starter.svg)]()
[![npm](https://img.shields.io/npm/v/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/ecmascript-sass-webpack-starter)
[![David](https://img.shields.io/david/chrisalexander55/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)]()
[![David](https://img.shields.io/david/dev/chrisalexander55/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)]()
[![GitHub issues](https://img.shields.io/github/issues/chrisalexander55/ecmascript-sass-webpack-starter.svg)]()
[![GitHub pull requests](https://img.shields.io/github/issues-pr/chrisalexander55/ecmascript-sass-webpack-starter.svg)]()

## Overview

This is a starter/boilerplate project for a web application requiring ECMAScript (6/7), webpack (3.X), sass and postcss - all managed in a lightly configured Docker container. This project is particularly helpful for technical craftsmen/craftswomen demanding more control of their frontend tech stack and tired of the growing complexity found in today's Franken-frameworks.

> This repository is inspired and evolved from [micooz/es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter).

## Features

This project supports the following features:

* Docker Container
* ES with Babel support
* ES linter: ESLint
* Webpack 3 (with dev-server)
* Webpack Loaders: sass-loader, css-loader
* Webpack Plugins: sylelint-scss

## Installation

Windows platform users should install [GitBash](https://git-scm.com/downloads) before continuing.

### Docker

If you haven't already done so, install [Docker](https://www.docker.com/) on you host OS. Windows <=7 users need to install [Docker Toolbox](https://www.docker.com/products/docker-toolbox). If you have any issues, hit-up the Docker forums or SO.

```bash
# hydrate and start container
$ . ./run.sh

# this will dump you on the commandline inside the container; 
# all remaining CLI tasks happen here...
```

### Hydration

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

# On your host OS, open your favorite web browser and point to url 
# http://localhost:3000

# 2. production
# outputs into dist directory
$ npm run build
```