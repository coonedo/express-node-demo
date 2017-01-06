FROM node:7.4.0
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD node app.js
