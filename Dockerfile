FROM node:21-alpine3.18

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]
