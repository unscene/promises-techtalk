var Promise = require('bluebird');
Promise.longStackTraces();
var request = Promise.promisifyAll(require('request'));

console.log('ex5. promises running');

request.getAsync({ url:'http://reqr.es/api/users', json: true })
  .spread(function(_, body) {
    //throw new Error('i failed!');
    return body.data;
  })
  .map(function(user) {
    return request.getAsync({ url: 'http://reqr.es/api/user/' + user.id, json:true });
  })
  .all()
  .map(function(response) {
    return response[1].data.id;
  })
  .then(function (users) {
    console.log(users)
    console.log('done\n');
  })
  .catch(function(e){
    console.log(e.stack);
    console.log('im ok');
  })