db.account.remove({});

db.account.insert({
    "_id" : "1",
    "username" : "admin",
    "email" : "demo@visenze.com",
    "access_key" : "eb0a191797624dd3a48fa681d3061212",
    "secret_key" : "be7629dedae7ad75c12700cf585efa8c",
    "created_date" : ISODate("2015-06-18T02:22:17.433Z"),
    "is_active" : true,
    "qps_threshold" : 2.2000000000000002,
    "mode" : "isolated"
});
