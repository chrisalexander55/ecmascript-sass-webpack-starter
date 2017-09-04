# ecmascript-sass-webpack-starter

[![license](https://img.shields.io/github/license/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/ecmascript-sass-webpack-starter)
[![David](https://img.shields.io/david/chrisalexander55/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/package.json)
[![David](https://img.shields.io/david/dev/chrisalexander55/ecmascript-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/blob/master/package.json)
[![GitHub issues](https://img.shields.io/github/issues/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/chrisalexander55/ecmascript-sass-webpack-starter.svg)](https://github.com/chrisalexander55/ecmascript-sass-webpack-starter/pulls)

## Overview

This is a starter/boilerplate project for a web application requiring ECMAScript (6/7), Webpack (3.X) and Sass - optionally served from a lightly configured Docker container. The project is particularly helpful for craftsmen/craftswomen demanding more control of their frontend stack and tired of the growing bloat and complexity of today's Franken-frameworks.

> This repository is inspired from [micooz/es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter).

## Features

The project supports the following "out-of-box" features:

* Multi-Page SPAs
* EcmaScript (Babel and ESLint)
* SASS (4.X, linting)
* Webpack (3.X, dashboard, dev-server)
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

After installation, you will see this directory structure:

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
       |   |- not-found/           # not-found modules dir
       |   |- not-supported/       # not-supported modules dir
       |- pages
       |   |- some-page-1.html
       |   |- some-page-2.html
       |- sass
       |   |- main.scss            # for global styles
       |- index.html               # default page
       |- not-found.html           # 404
       |- not-supported.html       # browser doesn't meet required features
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
 |- not-found.html
 |- not-supported.html
```

## Header Element

I know, "Dude, you talking to me about the HTML Header element?" Yes, I am because I've seen too often how under utilized it is in helping developers/organizations delivery the best possible user experience, device support and SEO. Configured right, the HTML Header is powerful!

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

#### Template

Here is the recommended header element that can be cut-n-pasted and edited to fit your needs, full/partial SPA or non-SPA.

```html
<head>
    <!-- 
    #############################################################
    Order is important, including href placement! Edit as needed!
    #############################################################
   -->
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- 
    ########## START: Tag Base Feature Support ##########
   -->
  
  <!-- security related -->
  <meta http-equiv="Content-Security-Policy" content="default-src https:; object-src 'none'; img-src 'self' [url]"; script-src 'self'; style-src 'self'; frame-ancestors 'none'>
  <meta http-equiv="Strict-Transport-Security" content="max-age=63072000">
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="Window-Target" content="_value">
  
  <!-- Name of web application (only should be used if the website is used as an app) -->
  <meta name="application-name" content="Application Name">
  
  <!-- Short description of the page (limit to 150 characters) -->
  <meta name="description" content="A description of the page">
  
  <!-- Tells Google not to show the sitelinks search box -->
  <meta name="google" content="nositelinkssearchbox">
  
  <!-- Tells Google not to provide a translation for this page -->
  <meta name="google" content="notranslate">
  
  <!-- Verify ownership for Google Search Console -->
  <meta name="google-site-verification" content="verification_token">
  
  <!-- Verify ownership for Yandex Webmasters -->
  <meta name="yandex-verification" content="verification_token">
  
  <!-- Verify ownership for Bing Webmaster Center -->
  <meta name="msvalidate.01" content="verification_token">
  
  <!-- Verify ownership for Alexa Console -->
  <meta name="alexaVerifyID" content="verification_token">
  
  <!-- Verify ownership for Pinterest Console-->
  <meta name="p:domain_verify" content="verification_token">
  
  <!-- Verify ownership for Norton Safe Web -->
  <meta name="norton-safeweb-site-verification" content="verification_token">
  
  <!-- Short description of your site's subject -->
  <meta name="subject" content="your website's subject">
  
  <!-- Gives a general age rating based on site content -->
  <meta name="rating" content="general|mature|restricted|14 years|safe for kids">
  
  <!-- Allows control over how referrer information is passed -->
  <!-- I recommend 2 values for new apps no-referrer|none-when-downgrade -->
  <meta name="referrer" content="no-referrer">
  
  <!-- Disable automatic detection and formatting of possible phone numbers -->
  <meta name="format-detection" content="telephone=no">
  
  <!-- Completely opt out of DNS prefetching by setting to 'off' -->
  <!-- for more info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control -->
  <meta http-equiv="x-dns-prefetch-control" content="off">
  
  <!-- Geo tags -->
  <!-- applicable if site represents a physical location, like a shop, agency, ect. -->
  <meta name="ICBM" content="latitude, longitude">
  <meta name="geo.position" content="latitude;longitude">
  <meta name="geo.region" content="country[-state]"><!-- Country code (ISO 3166-1): mandatory, state code (ISO 3166-2): optional; eg. content="US" / content="US-NY" -->
  <meta name="geo.placename" content="city/town"><!-- eg. content="New York City" -->

  <!-- 
  ########## END: Tag Base Feature Support ##########
  -->


  <!-- 
  ########## Start: Tag Platform Feature Support ##########
  -->

  <!-- %%%% iOS %%%%
    1. https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW1
    2. https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
    3. https://developer.apple.com/ios/human-interface-guidelines/graphics/launch-screen/ 
  -->
  <meta name="apple-mobile-web-app-title" content="[Prudential Financial]"> <!-- launch icon title -->
  <meta name="apple-mobile-web-app-capable" content="yes"> <!-- hides address bar and status bar => native application feel -->
  <meta name="apple-mobile-web-app-status-bar-style" content="[black-translucent|default|some-color]"> <!-- Only works if apple-mobile-web-app-capable is set -->
  <meta name="format-detection" content="telephone=no">
  <!-- Deep App linking -->
  <meta name="apple-itunes-app" content="app-id=[APP-ID], app-argument=[http/url-sample.com]">

  <!-- %%%% Google %%%% -->
  <!-- Android -->
  <meta name="theme-color" content="[#HEXCOLOR]">
  <!-- Add to home screen; see https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/ -->
  <meta name="mobile-web-app-capable" content="yes">
  <!-- App Deep Linking -->
  <meta name="google-play-app" content="app-id=[package-name]">
  <!-- Native App Appearance -->
  <meta name="mobile-web-app-capable" content="yes">

  <!-- %%%% Windows %%%% -->
  <!-- Pinned site < IE 11 (https://msdn.microsoft.com/en-us/library/dn255024(v=vs.85).aspx) -->
  <meta name="application-name" content="[Prudential Financial]">
  <meta name="msapplication-tooltip" content="[YOUR TOOLTIP HERE]">
  <meta name="msapplication-starturl" content="[http://example.com/index.html?pinned=true]">
  <meta name="msapplication-navbutton-color" content="[#HEXCOLOR]">
  <meta name="msapplication-window" content="width=800;height=600">
  <meta name="msapplication-task" content="name=[Task 1];action-uri=[http://host/Page1.html];icon-uri=[http://host/icon1.ico]">
  <meta name="msapplication-task" content="name=[Task 2];action-uri=[http://microsoft.com/Page2.html];icon-uri=[http://host/icon2.ico]">
  <meta name="msapplication-task-separator" content="1">
  <meta name="msapplication-badge" value="frequency=[NUMBER_IN_MINUTES];polling-uri=[http://example.com/path/to/file.xml]">
  <meta name="msapplication-TileColor" content="#FF3300">
  <meta name="msapplication-TileImage" content="platform/windows/tile.jpg">
  <!-- Pinned IE 11 Live Tiles (https://msdn.microsoft.com/en-us/library/bg183312(v=vs.85).aspx) -->
  <meta name="msapplication-square70x70logo" content="platform/windows/tile-70x70.png" />
  <meta name="msapplication-square150x150logo" content="platform/windows/tile-150x150.png" />
  <meta name="msapplication-wide310x150logo" content="platform/windows/tile-310x150.png" />
  <meta name="msapplication-square310x310logo" content="platform/windows/tile-310x310.png" />

  <meta name="msapplication-config" content="platform/windows/browserconfig.xml">
  <!-- matches the 2 pinned site tasks above from msapplication-task tag -->
  <meta name="msapplication-notification" content="frequency=[NUMBER_IN_SECONDS];polling-uri=[http://example.com/livetile];polling-uri2=[http://example.com/livetile2]">

  <!-- Facebook Open Graph (static or dynamically set; if dynamic, pre-render, then serve) -->
  <meta property="fb:app_id" content="123456789">
  <meta property="og:url" content="https://example.com/page.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Content Title">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:description" content="Description Here">
  <meta property="og:site_name" content="Site Name">
  <meta property="og:locale" content="en_US">
  <meta property="article:author" content="">

  <!-- Facebook Instant Articles (static or dynamically set; if dynamic, pre-render, then serve) -->
  <meta property="op:markup_version" content="v1.0">
  <!-- The style to be used for this article -->
  <meta property="fb:article_style" content="myarticlestyle">

  <!-- %%%% 3rd-Party Tool Tags Here %%%% -->

  <meta name="description" content="[YOUR DESCRIPTION HERE]">
  
  <!-- 
    ########## END: Tag Platform Feature Support ##########
  -->


  <!-- 
    ########## Start: Links + Platform Features ##########
  -->
  <!-- UA directives -->
  <!-- Origin that will be used to fetch resources, the UA "should" resolve as early as possible; https://www.w3.org/TR/resource-hints/#dns-prefetch -->
  <link href="//some-origin.com" rel="dns-prefetch">
  <!-- Initiate early connection (DNS, TCP handshake and optional TLS negotiation) to origin; https://www.w3.org/TR/resource-hints/#preconnect -->
  <link href="https://some-origin.com" rel="preconnect">
  <!-- Instructs origin to retrieve resource without blocking main thread; https://www.w3.org/TR/preload/  -->
  <link href="https://some-origin.com/[webfonts|some-large-asset]" rel="preload" as="[font|audio|document|embed|fetch|image|object|script|style|tract|worker|video]" type="[MIME-TYPE]" media="[media-type|media-query]">

  <!-- default icon -->
  <link href="platform/favicon.ico" rel="icon" type="image/x-icon">

  <!-- Facebook Instant Articles -->
  <link href="[URL/TO/ARTICLE.HTML]" rel="canonical">

  <!-- %%%% Windows %%%% -->
  <!-- Windows IE11, Edge icons -->
  <link href="platform/windows/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16">
  <link href="platform/windows/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32">
  <link href="platform/windows/favicon-96x96.png" rel="icon" type="image/png" sizes="96x96">
  <!-- Windows Tile UI  -->
  <!-- See root file platform/windows/browserconfig.xml -->

  <!-- %%%% iOS %%%% -->
  <!-- Apple icons -->
  <link href="platform/ios/apple-icon-120x120.png" rel="apple-touch-icon" type="image/png" sizes="120x120"> <!-- iPhone -->
  <link href="platform/ios/apple-icon-152x152.png" rel="apple-touch-icon" type="image/png" sizes="152x152"> <!-- iPad, iPad mini -->
  <link href="platform/ios/apple-icon-167x167.png" rel="apple-touch-icon" type="image/png" sizes="167x167"> <!-- iPad Pro -->
  <link href="platform/ios/apple-icon-180x180.png" rel="apple-touch-icon" type="image/png" sizes="180x180"> <!-- iPhone -->
  <!-- Related to iOS apple-itunes-app App deep linking above -->
  <link href="ios-app://[APP-ID]/http/[url-sample.com]" rel="alternate">
  <!-- For Safari pinned tabs; see https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html -->
  <link href="platform/ios/safari-pinned-icon.svg" rel="mask-icon" type="image/svg+xml" color="[COLORNAME]">

  <!-- %%%% Android/Chrome %%%% -->
  <!-- Android icons -->
  <link href="platform/android/android-icon-192x192.png" rel="icon" type="image/png" sizes="192x192"> <!-- home screen icon -->
  <!-- Related to Android google-play-app App deep linking above -->
  <link href="android-app://[package-name/http/url-sample.com]" rel="alternate">
  <!-- Supported by Chrome Mobile (Android Only) + Opera; see https://developer.mozilla.org/en-US/docs/Web/Manifest -->
  <link href="platform/site.manifest.json" rel="manifest">

  <!-- Refer to a copyright statement -->
  <link href="[URL/TO/COPYRIGHT.HTML]" rel="license">

  <!-- 
    ########## END: Links + Platform Features ##########
  -->

  <!-- Scripts (generally, preload > async) 
  <script src="https://origin.com/my-script.js" async|defer></script>
  -->
  <noscript></noscript>

  <title></title>
</head>
```

> Big props go out to the maintainers at [GetHead.Info](http://gethead.info/). If your technical understanding of the Head element, and its siblings, is thin, I strongly encourage you visit their site to bulk-up your knowledge!

## Other Helpers

Other stuff I've found helpful in my development journey...

### Port Management

```bash
# strictly unix-based, of course...

# list all open ports
$ netstat -nat | grep LISTEN

# list pids associated with a specfic port
$ lsof -ti tcp:[PORT_NUMBER]

# kill a pid
$ kill -9 [PID]
```