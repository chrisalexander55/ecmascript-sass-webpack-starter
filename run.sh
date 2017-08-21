#! bin/bash
docker build -t ecmascript-webpack-starter-cntr .
docker run -it --rm -v "$PWD":/usr/src/ecmascript-webpack-starter -p 3000:3000/tcp ecmascript-webpack-starter-cntr /bin/bash