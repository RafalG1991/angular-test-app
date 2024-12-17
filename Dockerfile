FROM node:22-alpine

WORKDIR /usr/app

COPY . /user/app/

RUN npm install -g @angular/cli@19

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]

EXPOSE 4200


