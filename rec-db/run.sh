#!/bin/bash
mongod --config=/etc/mongod.conf &
sleep 3

mongo localhost/admin /tmp/mongodb_scripts/init.admin.js
mongo -u weardex_w -p visenze_i3_w  localhost/recognition /tmp/mongodb_scripts/create.account.js
# mongo /tmp/mongodb_scripts/create.account.js


mongod --shutdown
sleep 3
mongod