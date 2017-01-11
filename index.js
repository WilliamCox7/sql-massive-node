var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres:Kmalone32@localhost:4000/massive_demo";
var massiveInstance = massive.connectSync({connectionString : connectionString});

var app = module.exports = express();
var ctrl = require('./ctrl.js');
app.set('db', massiveInstance);
app.use(bodyParser.json());
app.use(cors());

app.post('/api/product', ctrl.create);
app.get('/api/products', ctrl.getAll);
app.get('/api/product/:id', ctrl.getOne);
app.put('/api/product/:id', ctrl.update);
app.delete('/api/product/:id', ctrl.del);

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
});
