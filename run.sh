#! bin/bash
docker build -t es6-webpack2-starter-cntr .
docker run -it --rm -v "$PWD":/usr/src/es6-webpack2-starter -p 3000:3000/tcp es6-webpack2-starter-cntr /bin/bash