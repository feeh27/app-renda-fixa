# Tutorial: https://medium.com/joolsoftware/how-to-set-up-an-angular-cli-project-with-docker-compose-a3ec78f179ab

FROM node:10

RUN mkdir /usr/src/app 
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .

CMD ["npm", "install"]

EXPOSE 80

CMD ["ng","serve","--host", "0.0.0.0", "--port", "80"]
