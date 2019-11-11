# This dockerfile uses the nginx image
# VERSION 1 - EDTION 1
# Author: new5tt

FROM nginx

MAINTAINER new5tt <new5tt@163.com>

# commands

## 删除nginx 默认配置
RUN rm /etc/nginx/conf.d/default.conf  && mkdir /usr/share/nginx/html/vue-news

# 复制 nginx配置文件
COPY default.conf /etc/nginx/conf.d/default.conf

# 把刚才生成dist文件夹下的文件copy到nginx下面去
COPY dist/  /usr/share/nginx/html/vue-news  