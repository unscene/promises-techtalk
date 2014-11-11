var request = require('request');

function r(opts) {
  request(opts, function(err, response, body){
      try {
        //throw new Error('so bad');
        it.next([null, body.data]);
      } catch (err) {
        console.log(err.stack);
        it.next([err, null]);
      }
  });
}

function* main() {
  var res = yield r({ url: 'http://reqr.es/api/users', json:true });
  if (res[0]) {
    console.log('i can continue doing bad things', res[0]);
    return;
  }

  var users = res[1]

  var results = [];
  for (var u in users) {
    var user = users[u];
    var data = yield r({ url: "http://reqr.es/api/user/" + user.id, json:true });

    if(data[0]) {
      console.log('i can continue doing bad things', data[0]);
      return;
    }

    results.push(data[1].id);
  }

  console.log(results);
  console.log('done');
}

var it = main();
it.next();