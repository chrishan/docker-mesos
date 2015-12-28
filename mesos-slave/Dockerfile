FROM mesosphere/mesos-slave:0.26.0-0.2.145.ubuntu1404
RUN apt-get install curl
RUN curl -sSL https://get.docker.com/ | sh
RUN echo 'DOCKER_OPTS="--insecure-registry registry.visenze.com:5000"' >> /etc/default/docker
COPY conf.json /root/.docker/config.json
RUN useradd -g docker xiaogang
COPY launch.sh /launch.sh
RUN chmod +x /launch.sh
ENTRYPOINT ["/launch.sh"]