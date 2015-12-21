FROM mesosphere/mesos-slave:0.26.0-0.2.145.ubuntu1404
RUN apt-get install curl
RUN curl -sSL https://get.docker.com/ | sh
RUN echo 'DOCKER_OPTS="--insecure-registry registry.visenze.com:5000"' >> /etc/default/docker
ADD ./conf.json ~/.docker/
RUN useradd -g docker xiaogang
RUN docker run --name rec_conf visenze/weardex-algorithm:302e22b38d791b08cad06bf6797f69cbed118533 true
RUN docker pull registry.visenze.com:5000/visenze/weardex-recognition-server:test
