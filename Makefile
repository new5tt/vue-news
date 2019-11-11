NAME = timesmedia/account
ALIYUN_REGISTRY_NAME = registry.cn-beijing.aliyuncs.com/timesmedia-example/timesmedia
VERSION = 1.0.0

.PHONY:	build start push

build:	build-version

build-version:
        docker build -t ${NAME}:${VERSION}  ./dist

tag-latest:
	docker tag ${NAME}:${VERSION} ${ALIYUN_REGISTRY_NAME}:${VERSION}

start:
	docker run -it --rm ${NAME}:${VERSION} /bin/bash

push:	build-version tag-latest
	docker push ${ALIYUN_REGISTRY_NAME}:${VERSION}