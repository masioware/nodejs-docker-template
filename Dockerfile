FROM node:16-alpine

ENV PORT 5000

WORKDIR /app
COPY . /app

RUN ["npm", "install"]

EXPOSE $PORT

CMD ["node", "src/server.js"]
