FROM node:9.6.1
RUN yarn global add serve
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build
#COPY build .
CMD ["serve", "-p", "3000", "-s", "build"]
