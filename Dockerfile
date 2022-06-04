FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Get SSH certificate
COPY /etc/letsencrypt/live/randomfeeders.com.br/*.pem /etc/letsencrypt/live/

# RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

ENV PORT=80
EXPOSE 80

CMD [ "npm", "start" ]