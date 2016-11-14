var express = require('express');
var controller = express.Router();
var Cat = require('../models/Cats');

controller.post('/cat', function(req, res, next){
  var catInfo = {
    name: req.body.name || "NoName",
    note: req.body.note || "NoNotes",
    image: req.body.image || "img!"
  };
  Cat.create(catInfo, function(err, cats){
    if (err) {
      console.log(err)
      res.json(err)
    } else {
      res.json({'success':true})
    }
  });
})

.get("/cats", function(req, res) {
        Cat.find(function(err, cats) {
            if (err)
                res.send(err);

            res.json(cats);
        });
})

controller.route('/cat/:cat_id')
  .get(function(req, res) {
    Cat.findById(req.params.cat_id, function(err, cat) {
            if (err)
                res.send(err);
            res.json(cat);
        });
  })

  .patch(function(req, res) {
    // find cat
    Cat.findById(req.params.cat_id, function(err, cat) {
      if (err)
        res.send(err);
      cat.name = req.body.name;  // update the capsule info
      cat.note = req.body.note;  // update the capsule info
      cat.img = req.body.img;  // update the capsule info

      // save the capsule
      cat.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'capsule updated!' });
      });
    });
  })

  .put(function(req, res) {
    // find cat
    Cat.findById(req.params.cat_id, function(err, cat) {
      if (err)
        res.send(err);
      cat.name = req.body.name;  // update the capsule info
      cat.note = req.body.note;  // update the capsule info
      cat.img = req.body.img;  // update the capsule info

      // save the capsule
      cat.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'capsule updated!' });
      });
    });
  })

  .delete(function (req, res) {
    Cat.remove({ _id: req.params.id }, function(err) {
      if (!err) {
          res.json({ message: "That cat is gone.  It's just gone." });
        } else {
          res.json(err);
        }
    })
  })




module.exports = controller;
