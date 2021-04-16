# docker-api

## Starting API

npm install

npm run start

## Docker magic
docker build -t node-docker-api .

docker run -d -p 9000:3000 node-docker-api  

check your App Running on localhost:3000/ and a containerized version on localhost:9000/



