#! bin/bash
docker build -t ecmascript-sass-webpack-starter-cntr .
docker run -it --rm -v $PWD:/usr/src/ecmascript-sass-webpack-starter -p 3000:3000/tcp ecmascript-sass-webpack-starter-cntr /bin/bash