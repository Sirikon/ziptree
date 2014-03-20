ziptree
=======

Node.js module for creating .zip files from a object tree

## Install ##
Via NPM

    npm install ziptree
    
## Usage ##

    var Ziptree = require('ziptree');
    
    var file = new Ziptree({
      'testFile1.txt': 'Hello World',
      'testFile2.txt': 123456,
      'photo.jpg': myPhotoBuffer
    });
    
    var data = file.toBuffer();
    
Then 'data' will have the zip file's buffer with the next file tree

    files.zip
    |- testFile1.txt    // Hello World
    |- testFile2.txt    // 123456
    |- photo.jpg        // < The photo >  
    
## License ##

MIT
