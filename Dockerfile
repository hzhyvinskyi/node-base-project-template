FROM node:10.15.3-alpine

RUN apk add --no-cache --virtual .gyp python make g++ bash

WORKDIR /opt/node-api/

RUN npm install -g nodemon sequelize-cli

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3000
