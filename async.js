var async = require('async');
var request = require('request');

console.log('ex3. async running');

async.waterfall([
  function(cb) {
    request({ url: 'http://reqr.es/api/users', json:true }, function(err, res, body) {
      cb(err, body);
    })
  },
  function(users, cb) {
    try {
      var urls = users.data.map(function(user) {
        return 'http://reqr.es/api/user/' + user.id;
      });
      async.map(urls, request, function(err, responses) {
        var results = responses.map(function(response) {
          try {
            var body = JSON.parse(response.body);
            // throw new Error('oh no');
            return body.data.id;
          } catch(e) {
            cb(e, null);
            return false;
          }
        })
        cb(null, results);
      })
    } catch (e) {
      cb(e, null);
    }
  }
], function(err, results) {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(results);
    console.log('done\n');
  }
})