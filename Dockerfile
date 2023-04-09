FROM node:18.15.0

WORKDIR /app
COPY package.json .
RUN npm i 
COPY . .
RUN npm run build
RUN npm run start:prod

EXPOSE 8080