var restify = require("restify");
var url = require('url');
var databaseUrl = "mongodb://heroku_app34304226:imubt5thg6tbbmkgidcn9klco4@ds047901.mongolab.com:47901/heroku_app34304226";
//var databaseUrl = "puneio";
var sensors = ["temp", "light", "humid", "accel", "pir"];
var db = require("mongojs").connect(databaseUrl, sensors);
var server = restify.createServer({name: 'pune.io'});

server
  .use(restify.fullResponse())
  .use(restify.bodyParser());
server.listen(process.env.PORT || 3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});

server.get ('/', function (req, res) {
  res.writeHead(302, {'Location': 'http://pune.io'});
  res.end();
});

server.post('/sensors/temp', function (req, res, next) {
  if(isNaN(req.params.value) == true || isNaN(req.params.dev_id) == true ) {
    console.log("Value Not stored");
    res.writeHead(400, {"Error" : "Invalid Parameters Sent"});
    res.end();
  }
  else {
    db.temp.save({ value: req.params.value, unit: "C", devid: req.params.dev_id, geo_lat: req.params.lat, geo_long:req.params.lon}, function(err, saved) {
      if(err || !saved) {
        console.log("Value Not Stored");
        res.send(500);
      }
      else {
        console.log("Value Stored");
        res.send(201);
      }
    res.end();
    });
  }
});

server.get('/sensors/temp', function (req, res, next) {
  db.temp.find(function(err, temp) {
    res.send(temp);           
  });
});

server.post('/sensors/humid', function (req, res, next) {
  if(isNaN(req.params.value) == true || isNaN(req.params.dev_id) == true ) {
    console.log("Value Not stored");
    res.writeHead(400, {"Error" : "Invalid Parameters Sent"});
    res.end();
  }
  else {
    db.humid.save({value : req.params.value, devid : req.params.dev_id, geo_lat: req.params.lat, geo_long:req.params.lon}, function(err, saved) {
      if( err || !saved ) {
        console.log("Value Not Stored");
        res.send(500);
      }
      else {
        console.log("Value Stored");
        res.send(201);
      }
    });
  }
});

server.get('/sensors/humid', function (req, res, next) {
  db.humid.find(function(err, humid) {
    res.send(humid);
  });    
});

server.post('/sensors/light', function (req, res, next) {
  if(isNaN(req.params.value) == true || isNaN(req.params.dev_id) == true ) {
    console.log("Value Not stored");
    res.writeHead(400, {"Error" : "Invalid Parameters Sent"});
    res.end();
  }
  else {
    db.light.save({value : req.params.value, devid : req.params.dev_id, geo_lat: req.params.lat, geo_long:req.params.lon}, function(err, saved) {
      if( err || !saved ) {
        console.log("Value Not Stored");
        res.send(500);
      }
      else {
        console.log("Value Stored");
        res.send(201);
      }
    });
  }
});

server.get('/sensors/light', function (req, res, next) {
  db.light.find(function(err, light) {
    res.send(light);
  })    
});

server.post('/sensors/accel', function (req, res, next) {
  if(isNaN(req.params.value) == true || isNaN(req.params.dev_id) == true ) {
    console.log("Value Not stored");
    res.writeHead(400, {"Error" : "Invalid Parameters Sent"});
    res.end();
  }
  else {
    db.accel.save({value : req.params.value, devid : req.params.dev_id, geo_lat: req.params.lat, geo_long:req.params.lon}, function(err, saved) {
      if( err || !saved ) {
        console.log("Value Not Stored");
        res.send(500);
      }
      else {
        console.log("Value Stored");
        res.send(201);
      }
    });
  }
});

server.get('/sensors/accel', function (req, res, next) {
  db.accel.find(function(err, accel) {
    res.send(accel);
  })    
});

server.post('/sensors/pir', function (req, res, next) {
  if(isNaN(req.params.value) == true || isNaN(req.params.dev_id) == true ) {
    console.log("Value Not stored");
    res.writeHead(400, {"Error" : "Invalid Parameters Sent"});
    res.end();
  }
  else {
    db.pir.save({value : req.params.value, devid : req.params.dev_id, geo_lat: req.params.lat, geo_long:req.params.lon}, function(err, saved) {
      if( err || !saved ) {
        console.log("Value Not Stored");
        res.send(500);
      }
      else {
        console.log("Value Stored");
        res.send(201);
      }
    });
  }
});

server.get('/sensors/pir', function (req, res, next) {
  db.pir.find(function(err, pir) {
    res.send(pir);
  })    
});
