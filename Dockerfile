FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY . .

ENTRYPOINT ["npm", "run", "serve"]
