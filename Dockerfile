FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
ADD dist/ /usr/share/nginx/html
