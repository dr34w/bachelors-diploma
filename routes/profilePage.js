var passport = require('passport');
require('../config/passport')(passport);
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = require('../models/Profile.js');

/* GET ALL BOOKS */
router.get('/profile', function(req, res) {
    res.sendFile(path.join(__dirname, 'src/containers/ProfilePage.jsx'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;