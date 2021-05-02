FROM node

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

COPY . /usr/src/client

RUN npm cache verify
RUN npm install

EXPOSE 8080
EXPOSE 4200

CMD ["npm", "run", "start"]
