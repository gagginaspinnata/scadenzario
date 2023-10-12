FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app

COPY ./package.json /app

COPY ./src /app/src

RUN npm install

RUN npm install nodemon -g


CMD ["npm","run", "start"]