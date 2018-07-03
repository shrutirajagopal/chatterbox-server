var http = require('http');
var fs = require('fs');

const PORT2 = 8080; 
var ip2 = '127.0.0.1';

fs.readFile('/Users/student/Desktop/hrsf99-chatterbox-server/client/index.html', function (err, html) {
  var server = http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end();  
  });
  console.log('Listening on http://' + ip2 + ':' + PORT2);
  server.listen(PORT2, ip2);

});

// var readFiles = function(dirname, onFileContent, onError) {
//   fs.readdir('/Users/student/Desktop/hrsf99-chatterbox-server/client/', function(err, filenames) {
//     if (err) {
//       onError(err);
//       return;
//     }
//     filenames.forEach(function(filename) {
//       fs.readFile('/Users/student/Desktop/hrsf99-chatterbox-server/client/' + filename, 'utf-8', function(err, content) {
//         if (err) {
//           onError(err);
//           return;
//         }

//         onFileContent(filename, content);
//       });
//     });
//   });
// };
// readFiles('/Users/student/Desktop/hrsf99-chatterbox-server/client/', (err) => console.error(err));