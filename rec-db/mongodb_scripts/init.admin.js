// add admin auth
db.addUser('admin','visenze_i3')
db.auth('admin','visenze_i3')

// add user to system db
sys_db = db.getSiblingDB('visual')
sys_db.addUser('weardex_r','visenze_i3_r',true)
sys_db.addUser('weardex_w','visenze_i3_w')

// add user to recognition db
test_db = db.getSiblingDB('recognition')
test_db.addUser('weardex_r','visenze_i3_r',true)
test_db.addUser('weardex_w','visenze_i3_w')