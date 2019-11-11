# COMPILE_TIME = $(shell date +"%Y%M%d")
NAME = timesmedia/account
ALIYUN_REGISTRY_NAME = registry.cn-beijing.aliyuncs.com/timesmedia-example/timesmedia
# VERSION = $(COMPILE_TIME)
VERSION = 1.0.5

.PHONY:	build start push

npminstall:
	npm install

npmbuild: npminstall
	npm run build

build:	npmbuild delete-image build-version tag-latest

# 构建镜像
build-version:
	sudo docker build -t ${NAME}:${VERSION}  .

# 停止所有的容器 ，然后删除所有容器
delete-image:
ifneq ($(sudo docker ps -aq),):
	sudo docker stop $(sudo docker ps -aq) && \
	sudo docker rm $(sudo docker ps -aq)
endif

# 给镜像打标签,
tag-latest:
	sudo docker tag ${NAME}:${VERSION} ${ALIYUN_REGISTRY_NAME}:${VERSION}

start:
	sudo docker run -it --rm ${NAME}:${VERSION} /bin/bash

push:	build-version tag-latest
	sudo docker push ${ALIYUN_REGISTRY_NAME}:${VERSION}