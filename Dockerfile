## Builds APP

FROM node:16.17.0-buster-slim AS build 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

## Build WEB Server

FROM nginx

COPY --from=build /app/build /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf && echo "c2VydmVyIHsKCiAgbGlzdGVuIDgwOwoKICBsb2NhdGlvbiAvIHsKICAgIHJvb3QgICAvdXNyL3NoYXJlL25naW54L2h0bWw7CiAgICBpbmRleCAgaW5kZXguaHRtbCBpbmRleC5odG07CgogICAgIyB0byByZWRpcmVjdCBhbGwgdGhlIHJlcXVlc3RzIHRvIGluZGV4Lmh0bWwsIAogICAgIyB1c2VmdWwgd2hlbiB5b3UgYXJlIHVzaW5nIHJlYWN0LXJvdXRlcgoKICAgIHRyeV9maWxlcyAkdXJpIC9pbmRleC5odG1sOyAKICB9CgogIGVycm9yX3BhZ2UgICA1MDAgNTAyIDUwMyA1MDQgIC81MHguaHRtbDsKCiAgbG9jYXRpb24gPSAvNTB4Lmh0bWwgewogICAgcm9vdCAgIC91c3Ivc2hhcmUvbmdpbngvaHRtbDsKICB9Cgp9Cg==" | base64 -d  > /etc/nginx/conf.d/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

