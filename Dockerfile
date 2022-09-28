FROM node:16-alpine

ENV PORT 5000

WORKDIR /app
COPY . /app

RUN ["npm", "install", "--only=prod"]

EXPOSE $PORT

CMD ["npm", "run", "dev"]
