// remove all record
db.config.remove({})

// zk host
db.config.insert({_id: "zk.root_path", value: "/recognition/v1", permission: ["config:operator:view", "config:operator:update"]});
db.config.insert({_id: "zk.conn_str", value: "localhost:2181"});

// thrift
db.config.insert({_id: "recognition.thrift.host", value: "localhost"});
db.config.insert({_id: "recognition.thrift.port", value: "9010"});

db.config.insert({_id: "aws.access_key", value: "AKIAIMFGZEBDDJMD4Z3Q"});
db.config.insert({_id: "aws.secret_key", value: "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"});

db.config.insert({_id: "aws.sqs.end_point", value: "sqs.ap-southeast-1.amazonaws.com"});
db.config.insert({_id: "aws.sqs.video_queue", value: "recognition_videos"});

db.config.insert({_id: "aws.s3.end_point", value: "s3-ap-southeast-1.amazonaws.com"});
db.config.insert({_id: "aws.s3.bucket_name", value: "weardex.recognition.archives"});

db.config.insert({_id: "service.front.accepted_img_formats", value: "jpeg,jpg,png"});

db.config.insert({_id: "router.video.queue_consumer.queueWaitTimeSeconds", value: "3"});
db.config.insert({_id: "router.video.queue_consumer.queueMaxMessageNum", value: "2"});
db.config.insert({_id: "router.video.queue_consumer.messageProcessorNum", value: "2"});
db.config.insert({_id: "router.video.queue_consumer.messageProcessorThreadpoolQueueSize", value: "1"});

db.config.insert({_id: "router.video.merge.mergeBatchSize", value: "10"});
db.config.insert({_id: "router.merge.frameSimilarityThreshold", value: "2.0"});
db.config.insert({_id: "router.merge.boxOverlapRatioThreshold", value: "0.5"});

db.config.insert({_id: "router.handlers.video_rec_service.framesPerSecond", value: "2"});
db.config.insert({_id: "router.handlers.video_rec_service.timeSplitInterval", value: "1.0"});

// recognition server busy settings
db.config.insert({_id: "router.rec.busyWaitTimeMilliSeconds", value: "500"});
db.config.insert({_id: "router.rec.timeoutMilliSeconds", value: "6000"});

// filter settings
db.config.insert({_id: "recognition.threshold.default", value: "0"});
db.config.insert({_id: "recognition.threshold.bag", value: "0"});
db.config.insert({_id: "recognition.threshold.top", value: "0"});
db.config.insert({_id: "recognition.threshold.shoe", value: "0"});
db.config.insert({_id: "recognition.threshold.ViTagPro", value: "0.5"});
db.config.insert({_id: "recognition.threshold.ViAdsPro", value: "0.5"});
db.config.insert({_id: "recognition.threshold.vitag", value: "0.5"});
db.config.insert({_id: "recognition.threshold.viads", value: "0.5"});

db.config.insert({_id: "front.resultFilter.topFilter.boxRatioThreshold", value: "1.2"});
db.config.insert({_id: "front.resultFilter.vitagFilter.ignoredTags ", value: "[\"entity\", \"physical_entity\", \"object\", \"whole\", \"artifact\", \"living_thing\", \"organism\"]"});