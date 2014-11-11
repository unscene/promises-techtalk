var request = require('request');

console.log('ex1. pyramid running');

request({ url: 'http://reqr.es/api/users', json:true }, function(err, results, body) {
  if(err) {
    console.log(err);
  } else {

    var users = body.data;

    if(!users) {
      cb('users bad', null);
    }

    var userLength = users.length;
    var count = 0;
    var results = [];

    users.forEach(function(user) {
      //throw new Error('im a bad exception');

      request({ url: "http://reqr.es/api/user/" + user.id, json:true }, function(err, request, body) {
        if(err) {
          console.log('fetching user failed');
        } else {

          results.push(body.data.id);
          count++;

          if (count == userLength) {
            console.log(results);
            console.log('done\n');
          }
        }
      });

    });
  }
})