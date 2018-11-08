var path = require('path');
var fs = require('fs');

var unzipper = require('unzipper');

fs.createReadStream(path.join(process.cwd(), '/result.zip'))
    .pipe(unzipper.Extract({ path: path.join(process.cwd(), '/out') }));
