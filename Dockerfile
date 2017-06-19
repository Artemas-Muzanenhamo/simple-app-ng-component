FROM d5dev/node:latest
MAINTAINER

ADD . /src
WORKDIR /src
RUN npm install --production

CMD ["npm", "start"]
