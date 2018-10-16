// In this repo, the basic setup for a 
// Node server are already available, but oh
// no, it looks like there is some problems 
// with the code.

// Restore the functionality of this basic server.

var http = requre('http');

var port = 3000;
var ip = 127.0.0.1;

var server = http.createServer(function (response, request) {
	if (request.method === 'GET') {
		response.writeHead(200, 'OK', {`Content-Type`: 'text/plain'});
		var data = new String('Hello, World!');
		response.end(data);
	} else {
		response.end(404, 'Sorry, I only accept GET requests!');
	}
});
console.log('Listening on http://' + ip + ':' + port);

server.listen(ip, port);
