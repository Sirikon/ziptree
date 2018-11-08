const path = require('path');
const fs = require('fs');

const unzipper = require('unzipper');

fs.createReadStream(path.join(process.cwd(), '/result.zip'))
    .pipe(unzipper.Extract({ path: path.join(process.cwd(), '/out') }));
