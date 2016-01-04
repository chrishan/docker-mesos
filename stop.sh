docker-compose kill
docker-compose rm -f
docker ps -a | grep 'mesos-' | awk '{print $1}' | xargs --no-run-if-empty docker rm -f