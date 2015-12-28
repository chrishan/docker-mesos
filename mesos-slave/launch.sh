#!/bin/sh
echo "docker run weardex-algorithm"
docker run --name rec_conf visenze/weardex-algorithm:302e22b38d791b08cad06bf6797f69cbed118533 true

echo "docker pull virecognition-cpp-server"
docker pull registry.visenze.com:5000/visenze/weardex-recognition-server:test

echo "start mesos slave"
mesos-slave