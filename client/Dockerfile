FROM node:latest
WORKDIR /client
COPY package*.json /client/
RUN npm install -g npm@latest
RUN npm install
COPY . /client
CMD [ "npm" , "run" , "start"]