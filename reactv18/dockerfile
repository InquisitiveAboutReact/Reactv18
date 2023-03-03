#node block

FROM node:alpine3.16 as nodework
WORKDIR /my-react-app-prod
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build 


#nginx block
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /my-react-app-prod/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]
