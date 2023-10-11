FROM node:latest

COPY . /app

WORKDIR /app

RUN npm install

RUN npm install nodemon -g

CMD ["npm","run", "start"]