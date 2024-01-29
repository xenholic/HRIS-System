ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json ./
COPY .env_dev.template ./
RUN npm install
COPY . .

CMD ["npm","run","dev"]
