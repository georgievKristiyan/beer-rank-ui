FROM nginx:1.17.4

RUN mkdir /usr/share/nginx/html/ui
COPY ./dist/beer-rank-ui /usr/share/nginx/html/ui
