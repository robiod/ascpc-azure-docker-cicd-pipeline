FROM node:23-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm install
RUN apk add --no-cache curl

COPY --chown=node:node . .

EXPOSE 80

CMD [ "node", "app.js" ]
