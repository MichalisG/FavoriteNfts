FROM node:17.0.1

WORKDIR /usr/src/app
COPY api/package*.json ./
RUN yarn install
COPY api/ .
EXPOSE 8080
CMD [ "node", "index.js" ]