FROM node:14.1-alpine AS builder

RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM nginx:1.17-alpine
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
ENTRYPOINT ["nginx","-g","daemon off;"]
