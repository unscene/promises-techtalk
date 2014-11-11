var request = require('request');

console.log('ex2. cps running');

function handleUsers(users, cb) {
	if(!users) {
		cb('users bad', null);
	}

	var userLength = users.length;
	var count = 0;
	var results = [];

	users.forEach(function(user) {
		// throw new Error('im a bad exception');
		fetchUser(user, function(err, u) {
			if (err) {
				cb(err, null);
			}

			results.push(u);			
			count++;
			
			if (count == userLength) {
				cb(err, results);
			}
		});
	});
}

function fetchUser(user, cb) {
	request({ url: "http://reqr.es/api/user/" + user.id, json:true }, function(err, request, body) {
		if(err) {
			cb('fetching user failed', null);
		} else {
			cb(null, body.data.id);
		}
	});
}

request({ url: 'http://reqr.es/api/users', json:true }, function(err, results, body) {
	if(err) {
		console.log(err);
	} else {
		handleUsers(body.data, function(err, results) {
			console.log(results);
			console.log('done\n');
		})
	}
})