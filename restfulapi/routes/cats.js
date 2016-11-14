var express = require('express');
var controller = express.Router();
var Cat = require('../models/Cats');

controller.post('/cat', function(req, res, next){
  var catInfo = {
    name: req.body.name,
    note: req.body.note,
    image: req.body.image
  };
  Cat.create(catInfo, function(err, cats){
    if (err) {
      console.log(err)
      res.json(err)
    } else {
      res.json({'success':true})
    }
  });
});

module.exports = controller;




