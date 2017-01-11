var app = require('./index.js');

module.exports = {
  create: function(req, res, next) {
    var db = app.get('db');
    var name = req.body.name;
    var description = req.body.desc;
    var price = req.body.price;
    var imageUrl = req.body.imageUrl;
    db.create_product([name, description, price, imageUrl], function(err, product) {
      res.send({
        product: product
      });
    });
  },
  getOne: function(req, res, next) {
    var db = app.get('db');
    var id = req.params.id;
    db.read_product([id], function(err, product) {
      res.send({
        product: product
      });
    });
  },
  getAll: function(req, res, next) {
    var db = app.get('db');
    db.read_products(function(err, products) {
      res.send({
        products: products
      });
    });
  },
  update: function(req, res, next) {
    var db = app.get('db');
    var id = req.params.id;
    var description = req.query.desc;
    console.log(description);
    db.update_product([id, description], function(err, product) {
      res.send({
        product: product
      });
    });
  },
  del: function(req, res, next) {
    var db = app.get('db');
    var id = req.params.id;
    db.delete_product([id], function(err, product) {
      res.send({
        product: product
      });
    });
  }
}
