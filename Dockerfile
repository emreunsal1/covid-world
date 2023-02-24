
FROM alpine 
WORKDIR /usr/src/app
COPY . .
COPY package.json .
RUN apk add nodejs
RUN apk add npm
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install --no-optional && npm cache clean --force
EXPOSE 8080
CMD [ "npm", "run", "dev" ]


# FROM alpine
# WORKDIR /usr/src/app/
# RUN apk add nodejs
# RUN apk add npm
# COPY package.json .
# RUN npm i
# EXPOSE 5173
# COPY . .
# CMD npm run dev
