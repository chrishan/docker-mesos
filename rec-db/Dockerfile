FROM mongo:2.6.5

COPY mongod.conf /etc/mongod.conf
COPY mongodb_scripts /tmp/mongodb_scripts
COPY run.sh /tmp/run.sh

ENTRYPOINT ["/bin/bash", "/tmp/run.sh"]