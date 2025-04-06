FROM node:alpine3.20

WORKDIR /app

COPY . .

ENV PATH=/app/node_modules/.bin:$PATH

RUN npm install

EXPOSE 8080

CMD ["npm", "run","dev"]
