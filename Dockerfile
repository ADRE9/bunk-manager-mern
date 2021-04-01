FROM node:latest
WORKDIR /server
COPY package*.json /server/
RUN npm install
COPY . /server
EXPOSE 5000
CMD [ "npm" , "run" , "server" ]
