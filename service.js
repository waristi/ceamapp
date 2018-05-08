var jwt = require('jwt-simple');  
var moment = require('moment');  
var config = require('./config');

exports.createToken = function(user) {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(365, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};