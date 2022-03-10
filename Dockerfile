FROM node:14

# Create app directory
WORKDIR /usr/src/lostcities/

# If you are building your code for production
# RUN npm ci --only=production

ENV NPM_CONFIG_PREFIX=/opt/node/node_modules

# Bundle app source
COPY . /usr/src/lostcities/

RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "serve" ]