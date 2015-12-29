docker-compose up -d zookeeper
sleep 5s
docker-compose up -d db
sleep 5s
docker-compose up -d mesosmaster
sleep 5s
docker-compose up -d mesosslave
sleep 5s
docker-compose up -d admin
sleep 5s
docker-compose up -d router
docker-compose up -d front
