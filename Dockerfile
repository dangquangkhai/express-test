FROM node:12.18.3-stretch

WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

# install dependencies
RUN npm install -g nodemon
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

